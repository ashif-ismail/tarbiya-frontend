import { CommonModule, NgIf } from '@angular/common';
import { Component, ViewChild, OnInit, AfterViewInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { environment } from '../../../../environment'; 
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent, MatOption } from '@angular/material/autocomplete';

interface Group {
    groupId: number;
    groupName: string;
    leader: {
      username: string;
    };
    totalMembers: number;
  }

  interface User {
    userId: number;
    username: string;
    phoneNumber: string;
    role: string;
    createdAt: string;
  }

@Component({
    selector: 'manage-groups',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatTooltipModule, NgIf,MatFormFieldModule,
        MatInputModule,MatIconModule,MatDialogActions,FormsModule,CommonModule, MatOption],
    templateUrl: './manage-groups.component.html',
    styleUrls: ['./manage-groups.component.scss'],
    providers: [DatePipe]
})
export class ManageGroupsComponent implements OnInit, AfterViewInit {

    constructor(
        private dialog: MatDialog,
        private http: HttpClient,
        public datePipe: DatePipe 
    ) {}

    ngOnInit() {
        this.fetchGroups();
    }

    openAddTaskDialog(enterAnimationDuration: string, exitAnimationDuration: string, group?: Group): void {
        const dialogRef = this.dialog.open(AddTaskDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: group
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.fetchGroups();
            }
        });
    }

    onRowClick(group: Group): void {
        this.openAddTaskDialog('300ms', '100ms', group);
    }

    displayedColumns: string[] = ['groupName', 'leaderName', 'totalMembers', 'action'];
    dataSource = new MatTableDataSource<Group>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = 25;
    }

    ongoing = true;
    pending = true;
    completed = true;

    fetchGroups() {
        this.http.get<Group[]>('https://tarbiya-task-service.onrender.com/api/groups').subscribe(
          (groups) => {
            this.dataSource.data = groups;
          },
          (error) => {
            console.error('Error fetching groups:', error);
          }
        );
      }

    onEditClick(user: Group, event: Event): void {
        event.stopPropagation();
        this.openAddTaskDialog('300ms', '100ms', user);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement)?.value || '';
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

@Component({
    selector: 'add-group-dialog',
    templateUrl: './add-group-dialog.html',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatDialogActions,
        MatSnackBarModule,
        NgIf,
        CommonModule,MatOption,MatAutocompleteModule
    ]
})
export class AddTaskDialogBox implements OnInit {
    newGroup: Group = {
        groupId: 0,
        groupName: '',
        leader: {
            username: ''
        },
        totalMembers: 0
    };
    users: User[] = [];
    filteredUsers: User[] = [];
    leaderSearch: string = '';
    isEditMode: boolean = false;
    selectedLeaderId: number | null = null;

    constructor(
        public dialogRef: MatDialogRef<AddTaskDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: Group | undefined
    ) {}

    ngOnInit() {
        if (this.data) {
            this.newGroup = { ...this.data };
            this.isEditMode = true;
            this.leaderSearch = this.newGroup.leader.username;
        }
        this.loadUsers();
    }

    loadUsers() {
        this.http.get<User[]>('https://tarbiya-task-service.onrender.com/api/users').subscribe(
          (data) => {
            this.users = data;
            if (this.isEditMode) {
                this.onLeaderSearch();
            }
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );
      }
    
    onLeaderSearch() {
        this.filteredUsers = this.users.filter(user =>
          user.username.toLowerCase().includes(this.leaderSearch.toLowerCase())
        );
    }
    
    onLeaderSelected(event: MatAutocompleteSelectedEvent) {
        const selectedUser = this.users.find(user => user.username === event.option.value);
        if (selectedUser) {
            this.newGroup.leader = { username: selectedUser.username };
            this.leaderSearch = selectedUser.username;
            this.selectedLeaderId = selectedUser.userId;  // Store the selected leader's ID
        }
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            const url = 'https://tarbiya-task-service.onrender.com/api/groups'
            
            const method = this.isEditMode ? 'put' : 'post';

            let payload: any;

            if (this.isEditMode) {
                // For update, send groupId, groupName and leaderId
                payload = {
                    groupId: this.newGroup.groupId,
                    groupName: this.newGroup.groupName,
                    leaderId: this.selectedLeaderId
                };
            } else {
                payload = {
                    groupName: this.newGroup.groupName,
                    leaderId: this.selectedLeaderId
                }
            }

            this.http[method](url, payload).subscribe(
                response => {
                    this.showSnackbar(`Group ${this.isEditMode ? 'updated' : 'created'} successfully`, 'success');
                    this.dialogRef.close(true);
                },
                error => {
                    this.showSnackbar(`Error ${this.isEditMode ? 'updating' : 'creating'} group. Please try again.`, 'error');
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