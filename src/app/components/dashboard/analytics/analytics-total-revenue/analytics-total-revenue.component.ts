import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-analytics-total-revenue',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './analytics-total-revenue.component.html',
    styleUrls: ['./analytics-total-revenue.component.scss']
})
export class AnalyticsTotalRevenueComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [65],
            chart: {
                height: 245,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "50%"
                    },
                    dataLabels: {
                        value: {
                            offsetY: 5,
                            fontSize: "15px",
                            fontWeight: "700",
                        }
                    }
                }
            },
            colors: ["#757FEF"],
            labels: ["Revenue"]
        };
    }

}