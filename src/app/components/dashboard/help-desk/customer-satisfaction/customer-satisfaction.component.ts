import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexLegend,
    ChartComponent,
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
    colors: string[];
    legend: ApexLegend;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-customer-satisfaction',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './customer-satisfaction.component.html',
    styleUrls: ['./customer-satisfaction.component.scss']
})
export class CustomerSatisfactionComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [80, 75, 70, 60],
            chart: {
                height: 268,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            offsetY: -2,
                            show: true
                        },
                        value: {
                            show: true,
                            offsetY: 3,
                            fontWeight: "600",
                        },
                        total: {
                            show: true,
                            label: 'Overall',
                        }
                    },
                    hollow: {
                        size: "45%",
                    }
                }
            },
            colors: [
                "#757FEF", "#2DB6F5", "#8BD3F4", "#BFE9FF"
            ],
            labels: [
                "Excellent", "Very Good", "Good", "Unhappy"
            ],
            legend: {
                show: false,
            }
        };
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}