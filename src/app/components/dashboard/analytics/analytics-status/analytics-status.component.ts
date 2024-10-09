import { Component, ViewChild } from "@angular/core";
import { DatePipe } from '@angular/common';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexTooltip,
    ApexGrid,
    ApexTitleSubtitle,
    ApexXAxis,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    series2: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    tooltip: ApexTooltip;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    colors: any;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-analytics-status',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule, DatePipe],
    templateUrl: './analytics-status.component.html',
    styleUrls: ['./analytics-status.component.scss']
})
export class AnalyticsStatusComponent {

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
            series: [
                {
                    name: "Visited",
                    data: [2400, 1398, 5405, 3910, 4398, 3321, 2000]
                }
            ],
            series2: [
                {
                    name: "Net Income",
                    data: [24, 13, 30, 35, 40, 22, 15]
                }
            ],
            chart: {
                height: 90,
                width: 180,
                type: "bar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "15%",
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#FFBA69", "#757FEF"
            ],
            xaxis: {
                categories: [
                    "Sat",
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri"
                ],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            grid: {
                borderColor: "#f2f2f2",
                strokeDashArray: 2,
                show: true
            },
            legend: {
                show: false
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return "$" + val + "K";
                    }
                }
            }
        };
        this.currentDate = new Date();
    }

    currentDate: Date;

}