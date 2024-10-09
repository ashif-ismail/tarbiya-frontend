import { Component } from '@angular/core';
import { WelcomeDashboardComponent } from './welcome-dashboard/welcome-dashboard.component';
import { AnalyticsStatusComponent } from './analytics-status/analytics-status.component';
import { AnalyticsStatsComponent } from './analytics-stats/analytics-stats.component';
import { AnalyticsAudienceOverviewComponent } from './analytics-audience-overview/analytics-audience-overview.component';
import { SalesAnalyticsComponent } from './sales-analytics/sales-analytics.component';
import { RevenueReportComponent } from './revenue-report/revenue-report.component';
import { AnalyticsTotalRevenueComponent } from './analytics-total-revenue/analytics-total-revenue.component';
import { AnalyticsActivityComponent } from './analytics-activity/analytics-activity.component';
import { BrowserUsedTrafficReportsComponent } from './browser-used-traffic-reports/browser-used-traffic-reports.component';
import { SessionsByCountriesComponent } from './sessions-by-countries/sessions-by-countries.component';
import { TotalTransactionsComponent } from './total-transactions/total-transactions.component';
import { TerminalsComponent } from './terminals/terminals.component';
import { SessionsDeviceComponent } from './sessions-device/sessions-device.component';
import { NewVsReturingComponent } from './new-vs-returing/new-vs-returing.component';
import { AnalyticsLanguageComponent } from './analytics-language/analytics-language.component';
import { AnalyticsGenderComponent } from './analytics-gender/analytics-gender.component';
import { VisitorsAgeComponent } from './visitors-age/visitors-age.component';

@Component({
    selector: 'app-analytics',
    standalone: true,
    imports: [WelcomeDashboardComponent, AnalyticsStatusComponent, AnalyticsStatsComponent, AnalyticsAudienceOverviewComponent, SalesAnalyticsComponent, RevenueReportComponent, AnalyticsTotalRevenueComponent, AnalyticsActivityComponent, BrowserUsedTrafficReportsComponent, SessionsByCountriesComponent, TotalTransactionsComponent, TerminalsComponent, SessionsDeviceComponent, NewVsReturingComponent, AnalyticsLanguageComponent, AnalyticsGenderComponent, VisitorsAgeComponent],
    templateUrl: './analytics.component.html',
    styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent {}