import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-invoice',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatPaginatorModule, NgIf],
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

    displayedColumns: string[] = ['id', 'invoiceName', 'clientName', 'issuedDate', 'total', 'balance', 'action'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    paid = true;
    pending = true;

}

export interface PeriodicElement {
    issuedDate: string;
    clientName: any;
    id: string;
    invoiceName: string;
    total: string;
    balance: any;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        id: '#14251',
        invoiceName: 'Brand Logo Design',
        issuedDate: '14 Mar 2023',
        clientName: {
            img: 'img/user/user12.jpg',
            name: 'Jordan Stevenson',
            username: '@jordanstevenson'
        },
        total: '$350',
        balance: {
            paid: 'Paid'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Redesign - Landing Page',
        issuedDate: '12 Feb 2023',
        clientName: {
            img: 'img/user/user13.jpg',
            name: 'Lydia Reese',
            username: '@lydiareese'
        },
        total: '$400',
        balance: {
            pending: '$400'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Landing Page Design',
        issuedDate: '10 Mar 2023',
        clientName: {
            img: 'img/user/user14.jpg',
            name: 'James Andy',
            username: '@jamesandy'
        },
        total: '$321',
        balance: {
            paid: 'Paid'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Email Template UI',
        issuedDate: '08 Mar 2023',
        clientName: {
            img: 'img/user/user11.jpg',
            name: 'Louis Brandon',
            username: '@louisbrandon'
        },
        total: '$200',
        balance: {
            paid: 'Paid'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Redesign - Dashboard',
        issuedDate: '01 Mar 2023',
        clientName: {
            img: 'img/user/user9.jpg',
            name: 'Larry Nielsen',
            username: '@larrynielsen'
        },
        total: '$123',
        balance: {
            pending: '$123'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Tagus Dashboard UI',
        issuedDate: '03 Apr 2023',
        clientName: {
            img: 'img/user/user24.jpg',
            name: 'Stanley Bland',
            username: '@stanleybland'
        },
        total: '$99',
        balance: {
            pending: '$99'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Blog Template Design',
        issuedDate: '12 Feb 2023',
        clientName: {
            img: 'img/user/user23.jpg',
            name: 'Mark Evans',
            username: '@markevans'
        },
        total: '$128',
        balance: {
            pending: '$128'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Brand Logo Design',
        issuedDate: '14 Mar 2023',
        clientName: {
            img: 'img/user/user15.jpg',
            name: 'Timothy Lee',
            username: '@timothylee'
        },
        total: '$199',
        balance: {
            paid: 'Paid'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Opened New Showcase',
        issuedDate: '28 Feb 2023',
        clientName: {
            img: 'img/user/user1.jpg',
            name: 'Alvarado Turner',
            username: '@alvaradoturner'
        },
        total: '$150',
        balance: {
            paid: 'Paid'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Updated The Status',
        issuedDate: '10 Mar 2023',
        clientName: {
            img: 'img/user/user2.jpg',
            name: 'Evangelina Mcclain',
            username: '@evangelinamcclain'
        },
        total: '$130',
        balance: {
            pending: '$130'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Product UI/UX Design',
        issuedDate: '08 Mar 2023',
        clientName: {
            img: 'img/user/user3.jpg',
            name: 'Candice Munoz',
            username: '@candicemunoz'
        },
        total: '$176',
        balance: {
            paid: 'Paid'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'Product Devlopment',
        issuedDate: '28 Feb 2023',
        clientName: {
            img: 'img/user/user4.jpg',
            name: 'Bernard Langley',
            username: '@bernardlangley'
        },
        total: '$304',
        balance: {
            pending: '$304'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'New Office Building',
        issuedDate: '03 Apr 2023',
        clientName: {
            img: 'img/user/user5.jpg',
            name: 'Kristie Hall',
            username: '@kristiehall'
        },
        total: '$234',
        balance: {
            pending: '$234'
        },
        action: 'ri-more-fill'
    },
    {
        id: '#14251',
        invoiceName: 'SEO Marketing',
        issuedDate: '01 Mar 2023',
        clientName: {
            img: 'img/user/user6.jpg',
            name: 'Bolton Obrien',
            username: '@boltonobrien'
        },
        total: '$299',
        balance: {
            pending: '$299'
        },
        action: 'ri-more-fill'
    }
];