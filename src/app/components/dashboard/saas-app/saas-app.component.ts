import { Component } from '@angular/core';
import { SaStatsComponent } from './sa-stats/sa-stats.component';
import { SaRevenueSummaryComponent } from './sa-revenue-summary/sa-revenue-summary.component';
import { SaSalesAnalyticsComponent } from './sa-sales-analytics/sa-sales-analytics.component';
import { SaAudienceOverviewComponent } from './sa-audience-overview/sa-audience-overview.component';
import { SaAllProjectsComponent } from './sa-all-projects/sa-all-projects.component';
import { SaMessagesComponent } from './sa-messages/sa-messages.component';
import { MilestonesOverviewComponent } from './milestones-overview/milestones-overview.component';
import { SaCompletedTasksComponent } from './sa-completed-tasks/sa-completed-tasks.component';
import { SaTasksPerformanceComponent } from './sa-tasks-performance/sa-tasks-performance.component';

@Component({
    selector: 'app-saas-app',
    standalone: true,
    imports: [SaStatsComponent, SaRevenueSummaryComponent, SaSalesAnalyticsComponent, SaAudienceOverviewComponent, SaAllProjectsComponent, SaMessagesComponent, MilestonesOverviewComponent, SaCompletedTasksComponent, SaTasksPerformanceComponent],
    templateUrl: './saas-app.component.html',
    styleUrls: ['./saas-app.component.scss']
})
export class SaasAppComponent {}