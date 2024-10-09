import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, FullCalendarModule],
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        weekends: true,
        events: [
            { title: 'Meeting with UI/UX Designers', date: '2024-07-12' },
            { title: 'Call for payment Project NOK', date: '2024-07-06' },
            { title: 'Picnic with my Family', date: '2024-07-21' },
            { title: 'Project Work with Developers', date: '2024-07-15' },
            { title: 'Meeting with Developers', date: '2024-07-09' },
            { title: 'Consultation with Doctor', date: '2024-07-17' },
            { title: 'Consultation with Employees', date: '2024-07-04' },
            { title: 'Meeting with UI/UX Designers', date: '2024-08-12' },
            { title: 'Call for payment Project NOK', date: '2024-08-06' },
            { title: 'Picnic with my Family', date: '2024-08-21' },
            { title: 'Project Work with Developers', date: '2024-08-15' },
            { title: 'Meeting with Developers', date: '2024-08-01' },
            { title: 'Consultation with Doctor', date: '2024-08-17' },
            { title: 'Consultation with Employees', date: '2024-08-04' },
            { title: 'Meeting with UI/UX Designers', date: '2024-08-12' },
            { title: 'Call for payment Project NOK', date: '2024-08-06' },
            { title: 'Picnic with my Family', date: '2024-08-21' },
            { title: 'Project Work with Developers', date: '2024-08-15' },
            { title: 'Meeting with Developers', date: '2024-08-01' },
            { title: 'Consultation with Doctor', date: '2024-09-17' },
            { title: 'Consultation with Employees', date: '2024-09-04' },
            { title: 'Meeting with UI/UX Designers', date: '2024-09-12' },
            { title: 'Call for payment Project NOK', date: '2024-09-06' },
            { title: 'Picnic with my Family', date: '2024-09-21' },
            { title: 'Project Work with Developers', date: '2024-09-15' },
            { title: 'Meeting with Developers', date: '2024-09-09' },
            { title: 'Consultation with Doctor', date: '2024-09-17' },
            { title: 'Consultation with Employees', date: '2024-09-04' },
        ],
        plugins: [dayGridPlugin]
    };

    constructor(
        public dialog: MatDialog
    ) {}

    openAddEventDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(AddEventDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'add-event-dialog:not(p)',
    templateUrl: './add-event-dialog.html',
})
export class AddEventDialogBox {

    constructor(
        public dialogRef: MatDialogRef<AddEventDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}