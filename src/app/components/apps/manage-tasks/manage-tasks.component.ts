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
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent, MatOption } from '@angular/material/autocomplete';
import { User } from '../to-do-list/to-do-list.component';
import { Observable } from 'rxjs';
import { map, startWith, switchMap, take } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';

interface Task {
  taskId: number;
  title: string;
  description: string;
  categoryId: number;
  categoryName: string;
  createdAt: string;
  groupNames: string[];
  groupCount: number;
}

interface Category {
    categoryId: number;
    categoryName: string;
  }

  interface Group {
    groupId: number;
    groupName: string;
  }

@Component({
    selector: 'manage-tasks',
    standalone: true,
    imports: [
        RouterLink,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatTooltipModule,
        NgIf,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogActions,
        FormsModule,
        CommonModule,
        MatOption,
        MatAutocompleteModule,
        MatBadgeModule,
        MatChipsModule,
        MatChipListbox
    ],
    templateUrl: './manage-tasks.component.html',
    styleUrls: ['./manage-tasks.component.scss'],  
    providers: [DatePipe]
})
export class ManageTasksComponent implements OnInit, AfterViewInit {

    constructor(
        private dialog: MatDialog,
        private http: HttpClient,
        public datePipe: DatePipe 
    ) {}

    ngOnInit() {
        this.fetchTasks();
    }

    openAddTaskDialog(enterAnimationDuration: string, exitAnimationDuration: string, task?: Task): void {
        const dialogRef = this.dialog.open(AddTasksDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: { task: task, categories: this.fetchCategories() }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.fetchTasks();
            }
        });
        
    }

    openAssignGroupDialog(enterAnimationDuration: string, exitAnimationDuration: string, task?: Task): void {
        const dialogRef = this.dialog.open(AssignGroupDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: task
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.fetchTasks();
            }
        });
    }

    onRowClick(task: Task): void {
        // this.openAddTaskDialog('300ms', '100ms', task);
    }

    fetchCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('https://tarbiya-task-service.onrender.com/api/tasks/categories');
    }

    displayedColumns: string[] = ['title', 'description', 'groupNames', 'action'];
    dataSource = new MatTableDataSource<Task>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = 25;
    }

    ongoing = true;
    pending = true;
    completed = true;

    fetchTasks() {
        this.http.get<Task[]>('https://tarbiya-task-service.onrender.com/api/tasks').subscribe(
          (tasks) => {
            this.dataSource.data = tasks;
          },
          (error) => {
            console.error('Error fetching tasks:', error);
          }
        );
    }

    onEditClick(task: Task, event: Event): void {
        event.stopPropagation();
        this.openAddTaskDialog('300ms', '100ms', task);
    }

    onAssignGroupClick(task: Task, event: Event): void {
        event.stopPropagation();
        this.openAssignGroupDialog('300ms', '100ms', task);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement)?.value || '';
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

@Component({
    selector: 'add-tasks-dialog',
    templateUrl: './add-tasks-dialog.html',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatDialogActions,
        MatSnackBarModule,
        NgIf,
        CommonModule,
        MatOption,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class AddTasksDialogBox implements OnInit {
    task: any = {
        taskId: null,
        taskName: '',
        description: '',
        category: ''
    };
    isEditMode: boolean = false;
    categories: Category[] = [];
    filteredCategories: Observable<Category[]>;
    categorySearch = new FormControl('');
    selectedCategoryId: number | null = null;

    constructor(
        public dialogRef: MatDialogRef<AddTasksDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: { task: Task | undefined, categories: Observable<Category[]> }
    ) {}

    ngOnInit() {
        this.data.categories.subscribe(categories => {
            this.categories = categories;
            this.initializeForm();
        });
    }

    initializeForm() {
        if (this.data.task) {
            this.isEditMode = true;
            this.task = {
                taskId: this.data.task.taskId,
                taskName: this.data.task.title,
                description: this.data.task.description,
                category: this.data.task.categoryName
            };
            this.selectedCategoryId = this.data.task.categoryId;
            this.categorySearch.setValue(this.task.category);
        }

        this.filteredCategories = this.categorySearch.valueChanges.pipe(
            startWith(this.task.category),
            map(value => this._filterCategories(value || ''))
        );
    }

    private _filterCategories(name: string): Category[] {
        const filterValue = name.toLowerCase();
        return this.categories.filter(category => 
            category.categoryName.toLowerCase().includes(filterValue)
        );
    }


    onCategorySelected(event: MatAutocompleteSelectedEvent) {
        const selectedCategory = event.option.value as Category;
        this.task.category = selectedCategory.categoryName;
        this.selectedCategoryId = selectedCategory.categoryId;
    }

    displayCategoryName(category: Category | string): string {
        return typeof category === 'string' ? category : category?.categoryName || '';
    }

    onSubmit() {
        if (this.selectedCategoryId === null) {
            this.showSnackbar('Please select a valid category', 'error');
            return;
        }

        const payload = {
            title: this.task.taskName,
            description: this.task.description,
            categoryId: this.selectedCategoryId
        };

        let apiCall: Observable<any>;

        if (this.isEditMode) {
            apiCall = this.http.put(`https://tarbiya-task-service.onrender.com/api/tasks`, {
                ...payload,
                taskId: this.task.taskId
            });
        } else {
            apiCall = this.http.post('https://tarbiya-task-service.onrender.com/api/tasks', payload);
        }

        apiCall.subscribe(
            (response) => {
                this.showSnackbar(`Task ${this.isEditMode ? 'updated' : 'added'} successfully`, 'success');
                this.dialogRef.close(true);
            },
            (error) => {
                console.error('Error submitting task:', error);
                this.showSnackbar(`Error ${this.isEditMode ? 'updating' : 'adding'} task`, 'error');
            }
        );
    }

    close() {
        this.dialogRef.close(false);
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
    selector: 'assign-group-dialog',
    templateUrl: './assign-group-dialog.html',
    standalone: true,
    imports: [
        FormsModule,
        MatButtonModule,
        MatDialogActions,
        MatSnackBarModule,
        NgIf,MatFormFieldModule,MatInputModule,
        CommonModule,MatOption,MatAutocompleteModule
    ]
})
export class AssignGroupDialogBox implements OnInit {
    newGroup: Group = {
        groupId: 0,
        groupName: '',
    };
    groupControl = new FormControl('');
    groups: Group[] = [];
    filteredGroup: Group[] = [];
    groupSearch: string = '';
    filteredGroups: Observable<any[]>;
    isEditMode: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AssignGroupDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: Task | undefined
    ) {}

    ngOnInit() {
        this.loadGroups();
        this.filteredGroups = this.groupControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || ''))
        );
    }
    
      onGroupSearch() {
        this.filteredGroup = this.groups.filter(group =>
          group.groupName.toLowerCase().includes(this.groupSearch.toLowerCase())
        );
    }

    onGroupSelected(event: MatAutocompleteSelectedEvent) {
        const selectedGroup = event.option.value as Group;
        this.newGroup.groupId = selectedGroup.groupId;
    }

    loadGroups() {
        this.http.get<Group[]>('https://tarbiya-task-service.onrender.com/api/groups').subscribe(
          (groups) => {
            this.groups = groups;
          },
          (error) => console.error('Error loading groups:', error)
        );
      }

    displayFn(group: any): string {
        return group && group.groupName ? group.groupName : '';
      }
    
      private _filter(value: string): any[] {
        const filterValue = value.toLowerCase();
        return this.groups.filter(group => group.groupName.toLowerCase().includes(filterValue));
      }

    onSubmit(form: NgForm) {  
            const url = `https://tarbiya-task-service.onrender.com/api/groups/${this.newGroup.groupId}/tasks/${this.data?.taskId}`;
            
            this.http.post(url, null).subscribe(
                response => {
                    this.showSnackbar(`Task assigned to group successfully`, 'success');
                    this.dialogRef.close(true);
                },
                error => {
                    this.showSnackbar('Failed to assign task to group', 'error');
                }
            );
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