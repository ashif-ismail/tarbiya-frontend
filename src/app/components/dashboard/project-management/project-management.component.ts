import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskDistributionComponent } from './task-distribution/task-distribution.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { PmTotalUsersComponent } from './pm-total-users/pm-total-users.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TasksPerformanceComponent } from './tasks-performance/tasks-performance.component';
import { IssuesSummaryComponent } from './issues-summary/issues-summary.component';
import { PmAllProjectsComponent } from './pm-all-projects/pm-all-projects.component';
import { PmTeamMembersComponent } from './pm-team-members/pm-team-members.component';
import { PmActivityTimelineComponent } from './pm-activity-timeline/pm-activity-timeline.component';
import { PmStatsComponent } from './pm-stats/pm-stats.component';

@Component({
    selector: 'app-project-management',
    standalone: true,
    imports: [RouterLink, PmStatsComponent, TaskDistributionComponent, MyTasksComponent, PmTotalUsersComponent, CompletedTasksComponent, TasksPerformanceComponent, IssuesSummaryComponent, PmAllProjectsComponent, PmTeamMembersComponent, PmActivityTimelineComponent],
    templateUrl: './project-management.component.html',
    styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent {}