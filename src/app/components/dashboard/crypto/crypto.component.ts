import { Component } from '@angular/core';
import { CryptoStatsComponent } from './crypto-stats/crypto-stats.component';
import { MarketGraphComponent } from './market-graph/market-graph.component';
import { CurrentRateComponent } from './current-rate/current-rate.component';
import { CryptoMyProfileComponent } from './crypto-my-profile/crypto-my-profile.component';
import { UserActivitiesComponent } from './user-activities/user-activities.component';
import { OrderActivitiesComponent } from './order-activities/order-activities.component';
import { MyCurrenciesComponent } from './my-currencies/my-currencies.component';
import { TradingComponent } from './trading/trading.component';

@Component({
    selector: 'app-crypto',
    standalone: true,
    imports: [CryptoStatsComponent, MarketGraphComponent, CurrentRateComponent, CryptoMyProfileComponent, UserActivitiesComponent, OrderActivitiesComponent, MyCurrenciesComponent, TradingComponent],
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {}