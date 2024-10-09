import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { EnrolledCoursesComponent } from './enrolled-courses/enrolled-courses.component';
import { CreatedCoursesComponent } from './created-courses/created-courses.component';

@Component({
    selector: 'app-courses',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatTabsModule, EnrolledCoursesComponent, CreatedCoursesComponent],
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {}