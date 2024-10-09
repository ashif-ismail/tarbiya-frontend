import { Component } from '@angular/core';
import { LmsStatsComponent } from './lms-stats/lms-stats.component';
import { LmsProgressComponent } from './lms-progress/lms-progress.component';
import { LmsHoursSpentComponent } from './lms-hours-spent/lms-hours-spent.component';
import { LmsInstructorsComponent } from './lms-instructors/lms-instructors.component';
import { LmsPlanningComponent } from './lms-planning/lms-planning.component';
import { LmsStudentsComponent } from './lms-students/lms-students.component';
import { LmsCurrentCoursesComponent } from './lms-current-courses/lms-current-courses.component';
import { LmsExperienceComponent } from './lms-experience/lms-experience.component';
import { LmsActiveCourseComponent } from './lms-active-course/lms-active-course.component';
import { LmsCourseCompletionComponent } from './lms-course-completion/lms-course-completion.component';
import { LmsMessagesComponent } from './lms-messages/lms-messages.component';
import { LmsStatusComponent } from './lms-status/lms-status.component';
import { LmsEnrolledCreatedComponent } from './lms-enrolled-created/lms-enrolled-created.component';

@Component({
    selector: 'app-lms-courses',
    standalone: true,
    imports: [LmsStatsComponent, LmsProgressComponent, LmsHoursSpentComponent, LmsInstructorsComponent, LmsPlanningComponent, LmsStatusComponent, LmsCurrentCoursesComponent, LmsEnrolledCreatedComponent, LmsExperienceComponent, LmsActiveCourseComponent, LmsCourseCompletionComponent, LmsMessagesComponent, LmsStudentsComponent],
    templateUrl: './lms-courses.component.html',
    styleUrls: ['./lms-courses.component.scss']
})
export class LmsCoursesComponent {}