import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DatePipe } from '@angular/common';

interface Task {
    taskId: number;
    title: string;
    description: string;
    category: {
        categoryId: number;
        categoryName: string;
    };
    createdAt: string;
}

interface TaskSubmission {
    userId: number;
    taskId: number;
    status: 'DONE' | 'MISSED';
}

@Component({
    selector: 'app-contacts',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        MatDialogModule,
        DatePipe
    ],
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    tasksForm: FormGroup;
    tasks: Task[] = [];
    userId = Number(localStorage.getItem('userId'));
    currentDate: Date = new Date();

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private snackBar: MatSnackBar,
        private cookieService: CookieService,
        private dialog: MatDialog
    ) {
        this.tasksForm = this.formBuilder.group({});
    }

    ngOnInit() {
        this.fetchTasks();
    }

    fetchTasks() {
        this.http.get<Task[]>(`https://tarbiya-task-service.onrender.com/api/tasks/user/${this.userId}`).subscribe(
            (response) => {
                this.tasks = response;
                this.initTasksForm();
            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );
    }

    initTasksForm() {
        const today = new Date().toISOString().split('T')[0];
        const savedState = this.cookieService.get(`taskState_${this.userId}_${today}`);
        const savedStateObj = savedState ? JSON.parse(savedState) : {};

        this.tasks.forEach(task => {
            const controlName = `task_${task.taskId}`;
            const initialValue = savedStateObj[controlName] || false;
            this.tasksForm.addControl(controlName, this.formBuilder.control(initialValue));
        });

        this.tasksForm.valueChanges.subscribe(() => {
            this.saveTaskState();
        });
    }

    saveTaskState() {
        const today = new Date().toISOString().split('T')[0];
        this.cookieService.set(`taskState_${this.userId}_${today}`, JSON.stringify(this.tasksForm.value), { expires: 1 });
    }

    isAnyTaskEnabled(): boolean {
        return Object.values(this.tasksForm.value).some(value => value === true);
    }

    onSubmit() {
        const today = new Date().toISOString().split('T')[0];
        const submissionCookie = this.cookieService.get(`taskSubmission_${this.userId}_${today}`);

        if (submissionCookie) {
            const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
                width: '300px',
                data: { message: 'You have already submitted tasks for today. Do you want to update your submission?' }
            });

            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.submitTasks();
                }
            });
        } else {
            this.submitTasks();
        }
    }

    private submitTasks() {
        const submissions: TaskSubmission[] = this.tasks.map(task => ({
            userId: this.userId,
            taskId: task.taskId,
            status: this.tasksForm.get(`task_${task.taskId}`)?.value ? 'DONE' : 'MISSED'
        }));

        this.http.post('https://tarbiya-task-service.onrender.com/api/tasks/user', submissions).subscribe(
            (response) => {
                console.log('Tasks submitted successfully', response);
                this.showSnackbar('Tasks submitted successfully', 'success');
                this.setSubmissionCookie();
            },
            (error) => {
                console.error('Error submitting tasks:', error);
                this.showSnackbar('Error submitting tasks', 'error');
            }
        );
    }

    private setSubmissionCookie() {
        const today = new Date().toISOString().split('T')[0];
        this.cookieService.set(`taskSubmission_${this.userId}_${today}`, 'true', { expires: 1 });
    }

    showSnackbar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 3000, // 3 seconds
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: action === 'success' ? ['success-snackbar'] : ['error-snackbar']
        });
    }
}

@Component({
    selector: 'app-confirmation-dialog',
    template: `
        <h2 mat-dialog-title>Confirmation</h2>
        <mat-dialog-content>{{ data.message }}</mat-dialog-content>
        <mat-dialog-actions>
            <button mat-icon-button [mat-dialog-close]="false">Cancel</button>
            <button mat-icon-button [mat-dialog-close]="true" cdkFocusInitial>Proceed</button>
        </mat-dialog-actions>
    `,
    styles: [`
        mat-dialog-actions {
            justify-content: flex-end;
            margin-top: 20px;
        }
        button {
            margin-left: 8px;
        }
    `],
    standalone: true,
    imports: [MatDialogModule, CommonModule]
})
export class ConfirmationDialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
