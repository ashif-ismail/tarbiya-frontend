import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArAverageReportComponent } from './ar-average-report/ar-average-report.component';
import { ArBrowserUsedTrafficReportsComponent } from './ar-browser-used-traffic-reports/ar-browser-used-traffic-reports.component';
import { ArRevenueReportComponent } from './ar-revenue-report/ar-revenue-report.component';
import { ArSessionsComponent } from './ar-sessions/ar-sessions.component';

@Component({
    selector: 'app-analytics-reports',
    standalone: true,
    imports: [RouterLink, ArAverageReportComponent, ArBrowserUsedTrafficReportsComponent, ArRevenueReportComponent, ArSessionsComponent],
    templateUrl: './analytics-reports.component.html',
    styleUrls: ['./analytics-reports.component.scss']
})
export class AnalyticsReportsComponent {}