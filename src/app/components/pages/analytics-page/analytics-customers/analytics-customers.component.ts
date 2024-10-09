import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AcAudienceOverviewComponent } from './ac-audience-overview/ac-audience-overview.component';
import { AcStatusComponent } from './ac-status/ac-status.component';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-analytics-customers',
    standalone: true,
    imports: [AcAudienceOverviewComponent, AcStatusComponent, RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatProgressBarModule, MatCheckboxModule],
    templateUrl: './analytics-customers.component.html',
    styleUrls: ['./analytics-customers.component.scss']
})
export class AnalyticsCustomersComponent {

    displayedColumns: string[] = ['user', 'progress', 'email', 'role', 'gender', 'projects', 'rating', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

}

export interface PeriodicElement {
    email: string;
    role: string;
    user: any;
    action: string;
    gender: string;
    projects: number;
    progress: number;
    rating: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        user: {
            userName: 'Lucile Young',
            userImage: 'img/user/user8.jpg',
            userDesignation: '@lyoung4a',
        },
        email: 'lyoung4a@tagus.com',
        role: 'Agent',
        gender: 'Male',
        projects: 165,
        progress: 86,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star'
        }
    },
    {
        user: {
            userName: 'Jordan Stevenson',
            userImage: 'img/user/user9.jpg',
            userDesignation: '@jstevenson5c',
        },
        email: 'jstevenson5c@tagus.com',
        role: 'Agent',
        gender: 'Female',
        projects: 54,
        progress: 20,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-1'
        }
    },
    {
        user: {
            userName: 'Francis Frank',
            userImage: 'img/user/user10.jpg',
            userDesignation: '@ffrank7e',
        },
        email: 'ffrank7e@tagus.com',
        role: 'Maintainer',
        gender: 'Male',
        projects: 99,
        progress: 55,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-2'
        }
    },
    {
        user: {
            userName: 'Phoebe Patterson',
            userImage: 'img/user/user11.jpg',
            userDesignation: '@ppatterson2g',
        },
        email: 'ppatterson2g@tagus.com',
        role: 'Agent',
        gender: 'Male',
        projects: 27,
        progress: 76,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-2'
        }
    },
    {
        user: {
            userName: 'James Andy',
            userImage: 'img/user/user1.jpg',
            userDesignation: '@andyjm32',
        },
        email: 'andyjm32@tagus.com',
        role: 'Agent',
        projects: 222,
        gender: 'Female',
        progress: 87,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-1'
        }
    },
    {
        user: {
            userName: 'Sarah Taylor',
            userImage: 'img/user/user2.jpg',
            userDesignation: '@taylors32',
        },
        email: 'taylors32@tagus.com',
        role: 'Agent',
        projects: 54,
        progress: 99,
        gender: 'Male',
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star'
        }
    },
    {
        user: {
            userName: 'David Warner',
            userImage: 'img/user/user3.jpg',
            userDesignation: '@davidwabc2',
        },
        email: 'davidwabc2@tagus.com',
        role: 'Agent',
        projects: 165,
        gender: 'Male',
        progress: 34,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-2'
        }
    },
    {
        user: {
            userName: 'Steven Smith',
            userImage: 'img/user/user4.jpg',
            userDesignation: '@ssmith542',
        },
        email: 'ssmith542@tagus.com',
        role: 'Agent',
        gender: 'Custom',
        progress: 79,
        projects: 200,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-1'
        }
    },
    {
        user: {
            userName: 'Francis Frank',
            userImage: 'img/user/user10.jpg',
            userDesignation: '@ffrank7e',
        },
        email: 'ffrank7e@tagus.com',
        role: 'Maintainer',
        gender: 'Male',
        projects: 99,
        progress: 55,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-2'
        }
    },
    {
        user: {
            userName: 'Phoebe Patterson',
            userImage: 'img/user/user11.jpg',
            userDesignation: '@ppatterson2g',
        },
        email: 'ppatterson2g@tagus.com',
        role: 'Agent',
        gender: 'Male',
        projects: 27,
        progress: 76,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-2'
        }
    },
    {
        user: {
            userName: 'James Andy',
            userImage: 'img/user/user1.jpg',
            userDesignation: '@andyjm32',
        },
        email: 'andyjm32@tagus.com',
        role: 'Agent',
        projects: 222,
        gender: 'Female',
        progress: 87,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-1'
        }
    },
    {
        user: {
            userName: 'Sarah Taylor',
            userImage: 'img/user/user2.jpg',
            userDesignation: '@taylors32',
        },
        email: 'taylors32@tagus.com',
        role: 'Agent',
        projects: 54,
        progress: 99,
        gender: 'Male',
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star'
        }
    },
    {
        user: {
            userName: 'Lucile Young',
            userImage: 'img/user/user8.jpg',
            userDesignation: '@lyoung4a',
        },
        email: 'lyoung4a@tagus.com',
        role: 'Agent',
        gender: 'Male',
        projects: 165,
        progress: 86,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star'
        }
    },
    {
        user: {
            userName: 'Jordan Stevenson',
            userImage: 'img/user/user9.jpg',
            userDesignation: '@jstevenson5c',
        },
        email: 'jstevenson5c@tagus.com',
        role: 'Agent',
        gender: 'Female',
        projects: 54,
        progress: 20,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-1'
        }
    },
    {
        user: {
            userName: 'Francis Frank',
            userImage: 'img/user/user10.jpg',
            userDesignation: '@ffrank7e',
        },
        email: 'ffrank7e@tagus.com',
        role: 'Maintainer',
        gender: 'Male',
        projects: 99,
        progress: 55,
        action: 'ri-more-fill',
        rating: {
            star: 'flaticon-star-1',
            star2: 'flaticon-star-1',
            star3: 'flaticon-star-1',
            star4: 'flaticon-star-1',
            star5: 'flaticon-star-2'
        }
    },
];