import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, HttpClientModule, MatSnackBarModule,
        MatIconModule
    ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    hide = true; // for password visibility toggle

    constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private router: Router,
        private snackBar: MatSnackBar
    ) {
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {
        localStorage.setItem('isSidebarDarkTheme', 'true');   
    }

    isPrivilegedUser(): boolean {
        const role = localStorage.getItem('role');
        return role === 'privileged';
    }


    onSubmit() {
        if (this.loginForm.valid) {
            this.http.post('https://tarbiya-task-service.onrender.com/api/users/login', this.loginForm.value, { observe: 'response' })
                .subscribe(
                    (response) => {
                        if (response.body) {
                            localStorage.setItem('logged_in', 'true');
                            const user = JSON.stringify(response.body);
                            localStorage.setItem('userId', JSON.parse(user).userId);
                            localStorage.setItem('username', JSON.parse(user).username);
                            localStorage.setItem('phoneNumber', JSON.parse(user).phoneNumber);
                            localStorage.setItem('role', JSON.parse(user).role);
                            this.snackBar.open('Login successful', 'Close', { duration: 3000 });

                            if (this.isPrivilegedUser()) {
                                this.router.navigate(['/manage-members']);
                            } else {
                                this.router.navigate(['/task-entry']);
                            }

                        } else {
                            console.error('Login failed: No body in response');
                            this.snackBar.open('Login failed. Please check your credentials.', 'Close', { duration: 3000 });
                        }
                    },
                    (error: HttpErrorResponse) => {
                        console.error('Login failed', error);
                        if (error.status === 401) {
                            this.snackBar.open('Invalid username or password.', 'Close', { duration: 3000 });
                        } else {
                            this.snackBar.open('An error occurred. Please try again later.', 'Close', { duration: 3000 });
                        }
                    }
                );
        }
    }
}