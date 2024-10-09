import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexFill,
    ApexLegend,
    ApexPlotOptions,
    ApexTitleSubtitle,
    ApexGrid,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    stroke: ApexStroke;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: string[];
    fill: ApexFill;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
    grid: ApexGrid
};

@Component({
    selector: 'app-sa-sales-analytics',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './sa-sales-analytics.component.html',
    styleUrls: ['./sa-sales-analytics.component.scss']
})
export class SaSalesAnalyticsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    data: [
                        {
                            x: 'Operations',
                            y: [2800, 4500]
                        },
                        {
                            x: 'Customer Success',
                            y: [3200, 4100]
                        },
                        {
                            x: 'Engineering',
                            y: [2950, 7800]
                        },
                        {
                            x: 'Marketing',
                            y: [3000, 4600]
                        },
                        {
                            x: 'Product',
                            y: [3500, 4100]
                        },
                        {
                            x: 'Data Science',
                            y: [4500, 6500]
                        },
                        {
                            x: 'Sales',
                            y: [4100, 5600]
                        }
                    ]
                }
            ],
            chart: {
                height: 365,
                type: 'rangeBar',
                toolbar: {
                    show: false
                }
            },
            colors: [
                '#2DB6F5', '#757FEF'
            ],
            plotOptions: {
                bar: {
                    horizontal: true,
                    isDumbbell: true,
                    dumbbellColors: [['#2DB6F5', '#757FEF']]
                }
            },
            legend: {
                show: false
            },
            fill: {
                type: 'gradient',
                gradient: {
                    gradientToColors: ['#757FEF'],
                    inverseColors: false
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            xaxis: {
                tickAmount: 6,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                }
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}