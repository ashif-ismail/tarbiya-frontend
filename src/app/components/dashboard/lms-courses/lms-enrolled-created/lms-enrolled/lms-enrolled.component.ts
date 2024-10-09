import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-lms-enrolled',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf],
    templateUrl: './lms-enrolled.component.html',
    styleUrls: ['./lms-enrolled.component.scss']
})
export class LmsEnrolledComponent {

    displayedColumns: string[] = ['course', 'status', 'startTime', 'endTime'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    passed = true;
    failed = true;
    percentage = true;

}
export interface PeriodicElement {
    startTime: any;
    endTime: any;
    course: any;
    status: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {
        course: {
            title: 'Node.js for Beginners: Go From Zero to Hero with Node.js',
            image: 'img/lms/lms1.jpg',
        },
        startTime: {
            date: '19/02/2023',
            time: '10:00 AM',
        },
        endTime: {
            date: '19/02/2023',
            time: '11:00 AM',
        },
        status: {
            percentage: '87%'
        }
    },
    {
        course: {
            title: 'Learn the Fundamentals of working with Angular and How to Create ',
            image: 'img/lms/lms2.jpg',
        },
        startTime: {
            date: '18/02/2023',
            time: '04:00 AM',
        },
        endTime: {
            date: '18/02/2023',
            time: '05:00 AM',
        },
        status: {
            failed: 'Failed',
        }
    },
    {
        course: {
            title: 'Build an iOS Application in Swift Learn the Fundamentals',
            image: 'img/lms/lms3.jpg',
        },
        startTime: {
            date: '17/02/2023',
            time: '05:00 PM',
        },
        endTime: {
            date: '17/02/2023',
            time: '06:00 PM',
        },
        status: {
            passed: 'Passed',
        }
    },
    {
        course: {
            title: 'Programming Language Become a React Native Developer',
            image: 'img/lms/lms4.jpg',
        },
        startTime: {
            date: '16/02/2023',
            time: '12:00 PM',
        },
        endTime: {
            date: '16/02/2023',
            time: '01:00 PM',
        },
        status: {
            percentage: '50%'
        }
    },
    {
        course: {
            title: 'The Data Science Course 2023: Complete Data Science Bootcamp',
            image: 'img/lms/lms5.jpg',
        },
        startTime: {
            date: '15/02/2023',
            time: '03:00 AM',
        },
        endTime: {
            date: '15/02/2023',
            time: '04:00 AM',
        },
        status: {
            passed: 'Passed',
        }
    },
    {
        course: {
            title: 'Java Programming Masterclass for Software Developers',
            image: 'img/lms/lms6.jpg',
        },
        startTime: {
            date: '14/02/2023',
            time: '01:00 AM',
        },
        endTime: {
            date: '14/02/2023',
            time: '02:00 AM',
        },
        status: {
            percentage: '32%'
        }
    },
    {
        course: {
            title: 'Deep Learning A-Z™: Hands-On Artificial Neural Networks',
            image: 'img/lms/lms7.jpg',
        },
        startTime: {
            date: '13/02/2023',
            time: '08:00 PM',
        },
        endTime: {
            date: '13/02/2023',
            time: '09:00 PM',
        },
        status: {
            failed: 'Failed',
        }
    },
    {
        course: {
            title: 'Python for Finance: Investment Fundamentals & Data Analytics',
            image: 'img/lms/lms8.jpg',
        },
        startTime: {
            date: '12/02/2023',
            time: '09:00 AM',
        },
        endTime: {
            date: '12/02/2023',
            time: '10:00 AM',
        },
        status: {
            passed: 'Passed',
        }
    },
    {
        course: {
            title: 'Node.js for Beginners: Go From Zero to Hero with Node.js',
            image: 'img/lms/lms1.jpg',
        },
        startTime: {
            date: '19/02/2023',
            time: '10:00 AM',
        },
        endTime: {
            date: '19/02/2023',
            time: '11:00 AM',
        },
        status: {
            percentage: '87%'
        }
    },
    {
        course: {
            title: 'Learn the Fundamentals of working with Angular and How to Create ',
            image: 'img/lms/lms2.jpg',
        },
        startTime: {
            date: '18/02/2023',
            time: '04:00 AM',
        },
        endTime: {
            date: '18/02/2023',
            time: '05:00 AM',
        },
        status: {
            failed: 'Failed',
        }
    }
];