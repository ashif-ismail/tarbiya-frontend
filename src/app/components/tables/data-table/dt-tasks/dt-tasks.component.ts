import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-dt-tasks',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatTooltipModule, NgIf],
    templateUrl: './dt-tasks.component.html',
    styleUrls: ['./dt-tasks.component.scss']
})
export class DtTasksComponent {

    displayedColumns: string[] = ['name', 'deadline', 'status', 'assignee'];
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
    assignee: any;
    name: string;
    status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        name: 'Public Beta Release',
        deadline: '14 Mar 2023',
        assignee: {
            img: 'img/user/user15.jpg',
            name: 'James Andy'
        },
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Fix Platform Errors',
        deadline: '12 Feb 2023',
        assignee: {
            img: 'img/user/user14.jpg',
            name: 'Alina Smith'
        },
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Launch our Mobile App',
        deadline: '10 Mar 2023',
        assignee: {
            img: 'img/user/user16.jpg',
            name: 'David Warner'
        },
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Add the New Pricing Page',
        deadline: '08 Mar 2023',
        assignee: {
            img: 'img/user/user9.jpg',
            name: 'Steven Smith'
        },
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Redesign New Online Shop',
        deadline: '01 Mar 2023',
        assignee: {
            img: 'img/user/user22.jpg',
            name: 'Shane Cloud'
        },
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'Material Ui Design',
        deadline: '03 Apr 2023',
        assignee: {
            img: 'img/user/user11.jpg',
            name: 'Olivia Lucy'
        },
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'Add Progress Track',
        deadline: '12 Feb 2023',
        assignee: {
            img: 'img/user/user19.jpg',
            name: 'Liam Payne'
        },
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Project for Client',
        deadline: '14 Mar 2023',
        assignee: {
            img: 'img/user/user3.jpg',
            name: 'David Warner'
        },
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Opened New Showcase',
        deadline: '28 Feb 2023',
        assignee: {
            img: 'img/user/user2.jpg',
            name: 'Alina Smith'
        },
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Updated the Status',
        deadline: '10 Mar 2023',
        assignee: {
            img: 'img/user/user1.jpg',
            name: 'James Andy'
        },
        status: {
            completed: 'Completed'
        }
    },
    {
        name: 'Product UI/UX Design',
        deadline: '08 Mar 2023',
        assignee: {
            img: 'img/user/user7.jpg',
            name: 'Liam Payne'
        },
        status: {
            active: 'Active'
        }
    },
    {
        name: 'Product Devlopment',
        deadline: '28 Feb 2023',
        assignee: {
            img: 'img/user/user6.jpg',
            name: 'Olivia Lucy'
        },
        status: {
            pending: 'Pending'
        }
    },
    {
        name: 'New Office Building',
        deadline: '03 Apr 2023',
        assignee: {
            img: 'img/user/user5.jpg',
            name: 'Shane Cloud'
        },
        status: {
            active: 'Active'
        }
    },
    {
        name: 'SEO Marketing',
        deadline: '01 Mar 2023',
        assignee: {
            img: 'img/user/user4.jpg',
            name: 'Steven Smith'
        },
        status: {
            pending: 'Pending'
        }
    }
];