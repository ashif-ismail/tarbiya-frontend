import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexChart,
    ApexStroke,
    ApexTooltip,
    ApexDataLabels,
    ApexLegend,
    NgApexchartsModule,
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    stroke: ApexStroke;
    chart: ApexChart;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    labels: any;
    legend: ApexLegend;
    colors: any;
};

@Component({
    selector: 'app-milestones-overview',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './milestones-overview.component.html',
    styleUrls: ['./milestones-overview.component.scss']
})
export class MilestonesOverviewComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [45, 20, 20, 15],
            chart: {
                height: 268,
                type: "pie"
            },
            stroke: {
                width: 0,
                show: true
            },
            colors: [
                "#757FEF", "#90C6E0", "#E040FB", "#E9EFFC"
            ],
            dataLabels: {
                enabled: false,
                style: {
                    fontSize: '14px'
                },
                dropShadow: {
                    enabled: false
                }
            },
            tooltip: {
                style: {
                    fontSize: '14px'
                },
                y: {
                    formatter: function(val:any) {
                        return val + "%";
                    }
                }
            },
            legend: {
                offsetY: 0,
                show: false,
                position: "bottom",
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98',
                },
            },
            labels: ["Target", "Last Week", "Last Month", "Last Year"]
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}