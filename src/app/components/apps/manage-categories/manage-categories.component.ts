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

  interface Category {
    categoryId: number;
    categoryName: string;
  }

@Component({
    selector: 'manage-categories',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatTooltipModule, NgIf,MatFormFieldModule,
        MatInputModule,MatIconModule,MatDialogActions,FormsModule,CommonModule, MatOption],
    templateUrl: './manage-categories.component.html',
    styleUrls: ['./manage-categories.component.scss'],
    providers: [DatePipe]
})
export class ManageCategoriesComponent implements OnInit, AfterViewInit {

    constructor(
        private dialog: MatDialog,
        private http: HttpClient,
        public datePipe: DatePipe 
    ) {}

    ngOnInit() {
        this.fetchCategories();
    }

    openAddTaskDialog(enterAnimationDuration: string, exitAnimationDuration: string, category?: Category): void {
        const dialogRef = this.dialog.open(AddCategoriesDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration,
            data: category
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result === true) {
                this.fetchCategories();
            }
        });
    }

    onRowClick(group: Category): void {
        this.openAddTaskDialog('300ms', '100ms', group);
    }

    displayedColumns: string[] = ['categoryId', 'categoryName', 'action'];
    dataSource = new MatTableDataSource<Category>([]);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.paginator.pageSize = 25;
    }

    ongoing = true;
    pending = true;
    completed = true;

    fetchCategories() {
        this.http.get<Category[]>('https://tarbiya-task-service.onrender.com/api/tasks/categories').subscribe(
          (categories) => {
            this.dataSource.data = categories;
          },
          (error) => {
            console.error('Error fetching groups:', error);
          }
        );
      }

    onEditClick(category: Category, event: Event): void {
        event.stopPropagation();
        this.openAddTaskDialog('300ms', '100ms', category);
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement)?.value || '';
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}

@Component({
    selector: 'add-categories-dialog',
    templateUrl: './add-categories-dialog.html',
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
export class AddCategoriesDialogBox implements OnInit {
    newCategory: Category = {
        categoryId: 0,
        categoryName: '',
    };
    category: Category[] = [];
    filteredCategory: Category[] = [];
    categorySearch: string = '';
    isEditMode: boolean = false;
    selectedCategoryId: number | null = null;

    constructor(
        public dialogRef: MatDialogRef<AddCategoriesDialogBox>,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: Category | undefined
    ) {}

    ngOnInit() {
        if (this.data) {
            this.newCategory = { ...this.data };
            this.isEditMode = true;
            this.categorySearch = this.newCategory.categoryName;
        }
    }
    
      onCategorySearch() {
        this.filteredCategory = this.category.filter(category =>
          category.categoryName.toLowerCase().includes(this.categorySearch.toLowerCase())
        );
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            const url = 'https://tarbiya-task-service.onrender.com/api/tasks/categories'
            
            const method = this.isEditMode ? 'put' : 'post';

            let payload: any;

            if (this.isEditMode) {
                // For update, send groupId, groupName and leaderId
                payload = {
                    categoryId: this.newCategory.categoryId,
                    categoryName: this.newCategory.categoryName
                };
            } else {
                payload = {
                    categoryName: this.newCategory.categoryName
                }
            }

            this.http[method](url, payload).subscribe(
                response => {
                    this.showSnackbar(`Category ${this.isEditMode ? 'updated' : 'created'} successfully`, 'success');
                    this.dialogRef.close(true);
                },
                error => {
                    this.showSnackbar(`Error ${this.isEditMode ? 'updating' : 'creating'} category. Please try again.`, 'error');
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