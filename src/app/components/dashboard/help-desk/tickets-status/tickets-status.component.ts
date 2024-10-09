import { Component, ViewChild } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexStroke,
    ApexGrid,
    ApexYAxis,
    ApexXAxis,
    ApexPlotOptions,
    ApexTooltip,
    ApexLegend,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    colors: string[];
    tooltip: ApexTooltip;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-tickets-status',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule, MatProgressBarModule],
    templateUrl: './tickets-status.component.html',
    styleUrls: ['./tickets-status.component.scss']
})
export class TicketsStatusComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    name: "Open",
                    data: [
                        10,
                        20,
                        15,
                        12,
                        9,
                        11,
                        6
                    ]
                },
                {
                    name: "Closed",
                    data: [
                        -10,
                        -10,
                        -15,
                        -12,
                        -9,
                        -11,
                        -6
                    ]
                }
            ],
            chart: {
                type: "bar",
                height: 282,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#2DB6F5", "#757FEF"
            ],
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    columnWidth: "15%",
                    borderRadiusWhenStacked: 'last'
                }
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            xaxis: {
                axisBorder: {
                    show: false
                },
                categories: [
                    "Sat",
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri"
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            legend: {
                show: false
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}