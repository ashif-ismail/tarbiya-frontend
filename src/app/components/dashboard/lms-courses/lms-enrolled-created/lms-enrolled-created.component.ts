import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LmsCreatedComponent } from './lms-created/lms-created.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LmsEnrolledComponent } from './lms-enrolled/lms-enrolled.component';

@Component({
    selector: 'app-lms-enrolled-created',
    standalone: true,
    imports: [MatCardModule, LmsCreatedComponent, LmsEnrolledComponent, MatTabsModule],
    templateUrl: './lms-enrolled-created.component.html',
    styleUrls: ['./lms-enrolled-created.component.scss']
})
export class LmsEnrolledCreatedComponent {}