import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MpPersonalInfoComponent } from "./mp-personal-info/mp-personal-info.component";
import { MpActivityTimelineComponent } from "./mp-activity-timeline/mp-activity-timeline.component";
import { MpStatsComponent } from "./mp-stats/mp-stats.component";
import { MpOverviewComponent } from "./mp-overview/mp-overview.component";
import { MpMyTasksComponent } from "./mp-my-tasks/mp-my-tasks.component";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-member-profile',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MpPersonalInfoComponent, MpActivityTimelineComponent, MpStatsComponent, MpOverviewComponent, MpMyTasksComponent],
    templateUrl: './member-profile.component.html',
    styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [50],
            chart: {
                height: 110,
                width: 110,
                offsetX: 2.5,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#00B69B"],
            plotOptions: {
                radialBar: {
                    startAngle: -120,
                    endAngle: 120,
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: 3,
                            fontSize: "14px",
                            fontWeight: "700",
                        }
                    }
                }
            }
        };
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}