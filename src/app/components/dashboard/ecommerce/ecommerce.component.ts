import { Component } from '@angular/core';
import { EcommerceStatsComponent } from './ecommerce-stats/ecommerce-stats.component';
import { AudienceOverviewComponent } from './audience-overview/audience-overview.component';
import { VisitsByDayComponent } from './visits-by-day/visits-by-day.component';
import { EcommerceImpressionsComponent } from './ecommerce-impressions/ecommerce-impressions.component';
import { EcommerceActivityTimelineComponent } from './ecommerce-activity-timeline/ecommerce-activity-timeline.component';
import { RevenueStatusComponent } from './revenue-status/revenue-status.component';
import { EcommerceRatingsComponent } from './ecommerce-ratings/ecommerce-ratings.component';
import { LiveVisitsOnOurSiteComponent } from './live-visits-on-our-site/live-visits-on-our-site.component';
import { SalesByLocationsComponent } from './sales-by-locations/sales-by-locations.component';
import { NewCustomersComponent } from './new-customers/new-customers.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { TeamMembersListComponent } from './team-members-list/team-members-list.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';

@Component({
    selector: 'app-ecommerce',
    standalone: true,
    imports: [EcommerceStatsComponent, AudienceOverviewComponent, VisitsByDayComponent, EcommerceImpressionsComponent, EcommerceActivityTimelineComponent, RevenueStatusComponent, EcommerceRatingsComponent, LiveVisitsOnOurSiteComponent, SalesByLocationsComponent, NewCustomersComponent, RecentOrdersComponent, TeamMembersListComponent, BestSellingProductsComponent],
    templateUrl: './ecommerce.component.html',
    styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent {}