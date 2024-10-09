import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, NgIf],
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

    displayedColumns: string[] = ['name', 'startDate', 'deadline', 'status', 'budget'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    active = true;
    pending = true;
    completed = true;

}

export interface PeriodicElement {
    deadline: string;
    budget: string;
    name: string;
    status: any;
    startDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: 'Public Beta Release',
        startDate: '10 Mar 2023',
        deadline: '14 Mar 2023',
        budget: '$1250',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Fix Platform Errors',
        startDate: '09 Feb 2023',
        deadline: '12 Feb 2023',
        budget: '$999',
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Launch our Mobile App',
        startDate: '03 Mar 2023',
        deadline: '10 Mar 2023',
        budget: '$287',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Add the New Pricing Page',
        startDate: '02 Mar 2023',
        deadline: '08 Mar 2023',
        budget: '$1000',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Redesign New Online Shop',
        startDate: '25 Feb 2023',
        deadline: '01 Mar 2023',
        budget: '$132',
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'Material Ui Design',
        startDate: '02 Apr 2023',
        deadline: '03 Apr 2023',
        budget: '$1032',
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'Add Progress Track',
        startDate: '01 Feb 2023',
        deadline: '12 Feb 2023',
        budget: '$1321',
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Project for Client',
        startDate: '10 Mar 2023',
        deadline: '14 Mar 2023',
        budget: '$954',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Opened New Showcase',
        startDate: '05 Feb 2023',
        deadline: '28 Feb 2023',
        budget: '$800',
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Updated the Status',
        startDate: '05 Mar 2023',
        deadline: '10 Mar 2023',
        budget: '$775',
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Product UI/UX Design',
        startDate: '05 Mar 2023',
        deadline: '08 Mar 2023',
        budget: '$765',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Product Devlopment',
        startDate: '20 Feb 2023',
        deadline: '28 Feb 2023',
        budget: '$8534',
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'New Office Building',
        startDate: '01 Apr 2023',
        deadline: '03 Apr 2023',
        budget: '$4356',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'SEO Marketing',
        startDate: '27 Feb 2023',
        deadline: '01 Mar 2023',
        budget: '$321',
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'Public Beta Release',
        startDate: '10 Mar 2023',
        deadline: '14 Mar 2023',
        budget: '$1250',
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Fix Platform Errors',
        startDate: '09 Feb 2023',
        deadline: '12 Feb 2023',
        budget: '$999',
        status: {
            completed: 'Completed'
        }
    }
];