import { Component } from '@angular/core';
import { HdStatsComponent } from './hd-stats/hd-stats.component';
import { TicketsStatusComponent } from './tickets-status/tickets-status.component';
import { AverageTimeCallComponent } from './average-time-call/average-time-call.component';
import { SupportStatusComponent } from './support-status/support-status.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';
import { HdActivityComponent } from './hd-activity/hd-activity.component';
import { AgentPerformanceComponent } from './agent-performance/agent-performance.component';

@Component({
    selector: 'app-help-desk',
    standalone: true,
    imports: [HdStatsComponent, TicketsStatusComponent, AverageTimeCallComponent, SupportStatusComponent, CustomerSatisfactionComponent, HdActivityComponent, AgentPerformanceComponent],
    templateUrl: './help-desk.component.html',
    styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {}