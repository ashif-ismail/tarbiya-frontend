import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { EmailSidebarComponent } from '../email-sidebar/email-sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-email-inbox',
    standalone: true,
    imports: [RouterLink, EmailSidebarComponent, MatCardModule, MatButtonModule, MatMenuModule, MatTableModule, MatCheckboxModule, MatPaginatorModule],
    templateUrl: './email-inbox.component.html',
    styleUrl: './email-inbox.component.scss'
})
export class EmailInboxComponent {

    displayedColumns: string[] = ['checkbox', 'star', 'title', 'desc', 'date'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}

export interface PeriodicElement {
    title: string;
    checkbox: string;
    star: string;
    desc: string;
    date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {
        checkbox: 'Checkbox 1',
        title: 'Benthon, me (3)',
        star: 'flaticon-star',
        desc: `Hello  –  Trip home from 🎉 Colombo has been arranged, then Jenna will com...`,
        date: '14 Feb 2023'
    },
    {
        checkbox: 'Checkbox 2',
        title: 'Lucas Kriebel (via Twitter)',
        star: 'flaticon-star-1',
        desc: `Last pic over my village  –  Yeah i'd like that! Do you remember the video som..`,
        date: '13 Feb 2023'
    },
    {
        checkbox: 'Checkbox 3',
        title: 'Andrew Zimmer',
        star: 'flaticon-star',
        desc: `Mochila Beta: Subscription Confirmed  –  You've been confirmed! Welcome to `,
        date: '12 Feb 2023'
    },
    {
        checkbox: 'Checkbox 4',
        title: 'Infinity HR',
        star: 'flaticon-star',
        desc: `You've been confirmed! Welcome to the ruling class of the inbox. For your `,
        date: '11 Feb 2023'
    },
    {
        checkbox: 'Checkbox 5',
        title: 'me, keter (4)',
        star: 'flaticon-star-1',
        desc: `For your records, here is a copy of the information you submitted to us...`,
        date: '10 Feb 2023'
    },
    {
        checkbox: 'Checkbox 6',
        title: 'Death to Stock',
        star: 'flaticon-star',
        desc: `Hello  –  Trip home from 🎉 Colombo has been arranged, then Jenna will com...`,
        date: '09 Feb 2023'
    },
    {
        checkbox: 'Checkbox 7',
        title: 'Erik, me (5)',
        star: 'flaticon-star-1',
        desc: `Off on Thursday  –  Eff that place, you might as well stay here with us inst`,
        date: '08 Feb 2023'
    },
    {
        checkbox: 'Checkbox 8',
        title: 'Benthon, me (3)',
        star: 'flaticon-star',
        desc: `Trip home from 🎉 Colombo has been arranged, then Jenna will come to hom...`,
        date: '07 Feb 2023'
    },
    {
        checkbox: 'Checkbox 9',
        title: 'Google Drive Team',
        star: 'flaticon-star',
        desc: `This Week's Top Stories  –  Our top pick for you on Medium this week The`,
        date: '06 Feb 2023'
    },
    {
        checkbox: 'Checkbox 10',
        title: 'Benthon, me (3)',
        star: 'flaticon-star',
        desc: `Weekend on Revibe  –  Today's Friday and we thought maybe you want so`,
        date: '05 Feb 2023'
    },
    {
        checkbox: 'Checkbox 11',
        title: 'me, Susanna (11)',
        star: 'flaticon-star',
        desc: `You can now use your storage in Google Drive  –  Hey Nicklas Sandell! Tha`,
        date: '04 Feb 2023'
    },
    {
        checkbox: 'Checkbox 12',
        title: 'Benthon, me (3)',
        star: 'flaticon-star-1',
        desc: `Hello  –  Trip home from 🎉 Colombo has been arranged, then Jenna will com...`,
        date: '03 Feb 2023'
    },
    {
        checkbox: 'Checkbox 13',
        title: 'Benthon, me (3)',
        star: 'flaticon-star',
        desc: `Hello  –  Trip home from 🎉 Colombo has been arranged, then Jenna will com...`,
        date: '02 Feb 2023'
    },
    {
        checkbox: 'Checkbox 14',
        title: 'Benthon, me (3)',
        star: 'flaticon-star',
        desc: `Hello  –  Trip home from 🎉 Colombo has been arranged, then Jenna will com...`,
        date: '01 Feb 2023'
    }
];