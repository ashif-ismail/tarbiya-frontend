import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild, OnInit, AfterViewInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environment'; 
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatOption } from '@angular/material/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { group } from 'console';
import { map, Observable, startWith } from 'rxjs';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsComponent } from '../user-reports/reports.component';

export interface User {
    userId: number;
    username: string;
    phoneNumber: string;
    role: string;
    createdAt: string;
    groups: string[];
}

@Component({
    selector: 'app-to-do-list',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatTooltipModule, NgIf,MatFormFieldModule,
        MatInputModule,MatIconModule,MatDialogActions,FormsModule,CommonModule,MatMenuModule],
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
    providers: [DatePipe]
})
export class ToDoListComponent implements OnInit, AfterViewInit {

    @ViewChild(MatTable) table!: MatTable<any>;

    onAssignToGroup(user: User) {
        const dialogRef = this.dialog.open(AssignGroupDialogBox, {
          data: {user: user}
        });
      
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.http.post(`https://tarbiya-task-service.onrender.com/api/users/${user.userId}/groups/${result.group.groupId}`, null)
              .subscribe(
                response => {
                  console.log('User assigned to group successfully');
                  user.groups.push(result.group.groupName);
                  this.table.renderRows();
                },
                error => console.error('Error assigning user to group:', error)
              );
          }
        });
      }

      openReportsDialog(userId: string): void {
        this.dialog.open(ReportsComponent, {
            width: '700px',
        data: { userId: userId }
        });
      }

      onRemoveFromGroup(user: User) {
        const dialogRef = this.dialog.open(RemoveGroupDialogBox, {
          data: {user: user}
        });
      
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.http.delete(`https://tarbiya-task-service.onrender.com/api/groups/members/${user.userId}/${result.group.groupId}`)
              .subscribe(
                response => {
                  console.log('User removed from group successfully');
                  user.groups = user.groups.filter(group => group !== result.group.groupName);
                  this.table.renderRows();
                },
                error => console.error('Error removing user from group:', error)
              );
          }
        });
      }


    constructor(
        private dialog: MatDialog,
        private http: HttpClient,
        public datePipe: DatePipe 
    ) {}

    ngOnInit() {
        this.fetchUsers();
    }

    openAddTaskDialog(enterAnimationDuration: string, exitAnimationDuration: string, user?: User): void {
        const dialogRef = this.dialog.open(AddTaskDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: user
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.fetchUsers();
            }
        });
    }

    onRowClick(user: User): void {
        this.openAddTaskDialog('300ms', '100ms', user);
    }

    displayedColumns: string[] = ['username', 'phoneNumber', 'role', 'groups', 'action'];
    dataSource = new MatTableDataSource<User>([]);

    getGroupBadgeClass(group: string): string {
        // You can customize this method to return different classes for different groups
        return 'group-badge';
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = 25;
    }

    ongoing = true;
    pending = true;
    completed = true;

    fetchUsers() {
        this.http.get<User[]>('https://tarbiya-task-service.onrender.com/api/users').subscribe(
            (users) => {
                this.dataSource.data = users.map(user => ({
                    ...user,
                    createdAt: this.datePipe.transform(user.createdAt, 'medium') || user.createdAt
                }));
            },
            (error) => {
                console.error('Error fetching users:', error);
            }
        );
    }

    onEditClick(user: User, event: Event): void {
        event.stopPropagation(); // Prevent row click event
        this.openAddTaskDialog('300ms', '100ms', user);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement)?.value || '';
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    getRoleBadgeClass(role: string): string {
        switch (role.toUpperCase()) {
            case 'PRIVILEGED':
                return 'tbadge-privileged';
            case 'NORMAL':
                return 'tbadge-normal';
            default:
                return 'tbadge-default';
        }
    }
}

@Component({
    selector: 'add-task-dialog',
    templateUrl: './add-task-dialog.html',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatDialogActions,
        MatSnackBarModule,
        NgIf,
        CommonModule
    ]
})
export class AddTaskDialogBox implements OnInit {
    newUser: User = {
        userId: 0,
        username: '',
        phoneNumber: '',
        role: '',
        createdAt: '',
        groups: []
    };
    isEditMode: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AddTaskDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: User | undefined
    ) {}

    ngOnInit() {
        if (this.data) {
            this.newUser = { ...this.data };
            this.isEditMode = true;
        }
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            const url = this.isEditMode 
                ? `https://tarbiya-task-service.onrender.com/api/users/${this.newUser.userId}`
                : 'https://tarbiya-task-service.onrender.com/api/users';
            
            const method = this.isEditMode ? 'put' : 'post';

            this.http[method](url, this.newUser).subscribe(
                response => {
                    this.showSnackbar(`User ${this.isEditMode ? 'updated' : 'created'} successfully`, 'success');
                    this.dialogRef.close(true);
                },
                error => {
                    console.error(`Error ${this.isEditMode ? 'updating' : 'creating'} user`, error);
                    this.showSnackbar(`Error ${this.isEditMode ? 'updating' : 'creating'} user. Please try again.`, 'error');
                }
            );
        } else {
            this.showSnackbar('Please fill in all required fields', 'error');
        }
    }

    close(){
        this.dialogRef.close(true);
    }

    showSnackbar(message: string, type: 'success' | 'error') {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
}

interface Group {
    groupId: number;
    groupName: string;
  }
@Component({
    selector: 'assign-group-dialog',
    templateUrl: './assign-group-dialog.html',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class AssignGroupDialogBox implements OnInit {
    form: FormGroup;
    groups: Group[] = [];
  filteredGroups: Observable<Group[]>;

    newUser: User = {
        userId: 0,
        username: '',
        phoneNumber: '',
        role: '',
        createdAt: '',
        groups: []
    };
    isEditMode: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AssignGroupDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { user: User }
    ) {
        this.form = this.fb.group({
            group: ['', Validators.required]
          });
    }

    ngOnInit() {
        this.loadGroups();
        this.filteredGroups = this.form.get('group')!.valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.groupName),
          map(name => name ? this._filter(name) : this.groups.slice())
        );
      }
    
      loadGroups() {
        this.http.get<Group[]>('https://tarbiya-task-service.onrender.com/api/groups').subscribe(
          (groups) => {
            this.groups = groups;
          },
          (error) => console.error('Error loading groups:', error)
        );
      }
    
      private _filter(name: string): Group[] {
        const filterValue = name.toLowerCase();
        return this.groups.filter(group => group.groupName.toLowerCase().includes(filterValue));
      }
    
      displayFn(group: Group): string {
        return group && group.groupName ? group.groupName : '';
      }
    
      onSubmit() {
        if (this.form.valid) {
          this.dialogRef.close(this.form.value);
        }
      }

    close(){
        this.dialogRef.close(true);
    }

    showSnackbar(message: string, type: 'success' | 'error') {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
}


@Component({
    selector: 'remove-group-dialog',
    templateUrl: './remove-group-dialog.html',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class RemoveGroupDialogBox implements OnInit {
    form: FormGroup;
    groups: Group[] = [];
  filteredGroups: Observable<Group[]>;

    newUser: User = {
        userId: 0,
        username: '',
        phoneNumber: '',
        role: '',
        createdAt: '',
        groups: []
    };
    isEditMode: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AssignGroupDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { user: User }
    ) {
        this.form = this.fb.group({
            group: ['', Validators.required]
          });
    }

    ngOnInit() {
        this.loadGroups();
        this.filteredGroups = this.form.get('group')!.valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.groupName),
          map(name => name ? this._filter(name) : this.groups.slice())
        );
      }
    
      loadGroups() {
        this.http.get<Group[]>('https://tarbiya-task-service.onrender.com/api/groups').subscribe(
          (groups) => {
            this.groups = groups;
          },
          (error) => console.error('Error loading groups:', error)
        );
      }
    
      private _filter(name: string): Group[] {
        const filterValue = name.toLowerCase();
        return this.groups.filter(group => group.groupName.toLowerCase().includes(filterValue));
      }
    
      displayFn(group: Group): string {
        return group && group.groupName ? group.groupName : '';
      }
    
      onSubmit() {
        if (this.form.valid) {
          this.dialogRef.close(this.form.value);
        }
      }

    close(){
        this.dialogRef.close(true);
    }

    showSnackbar(message: string, type: 'success' | 'error') {
        this.snackBar.open(message, 'Close', {
            duration: 3000,
            panelClass: type === 'success' ? ['success-snackbar'] : ['error-snackbar'],
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
}