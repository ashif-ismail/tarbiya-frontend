import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Task {
    taskId: number;
    userId: number;
    title: string;
    description: string;
    taskStatus: string;
    trackedDate: string;
}

@Component({
    standalone: true,
    imports: [CommonModule, MatCardModule, MatCardModule, MatSlideToggleModule,MatExpansionPanelTitle,MatExpansionPanelHeader,
        MatExpansionPanel,MatExpansionPanelDescription,MatAccordion
    ],
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
    
    groupedTasks: { [key: string]: Task[] } = {};

    constructor(private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data: { userId: string }) {}

    ngOnInit() {
        this.fetchTasks();
    }

    fetchTasks() {
        const userId = this.data.userId

        this.http.get<Task[]>(`https://tarbiya-task-service.onrender.com/api/users/report/${userId}`).subscribe(
            (tasks) => {
                this.groupTasksByDate(tasks);
            },
            (error) => {
                console.error('Error fetching tasks:', error);
            }
        );
    }

    groupTasksByDate(tasks: Task[]) {
        this.groupedTasks = tasks.reduce((groups, task) => {
            if (!groups[task.trackedDate]) {
                groups[task.trackedDate] = [];
            }
            groups[task.trackedDate].push(task);
            return groups;
        }, {} as { [key: string]: Task[] });
    }

    onTaskToggle(task: Task) {
        task.taskStatus = task.taskStatus === 'DONE' ? 'PENDING' : 'DONE';
        // You can add logic here to update the task status on the server
    }
}
