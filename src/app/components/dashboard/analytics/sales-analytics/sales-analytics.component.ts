import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexGrid,
    ApexPlotOptions,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    grid: ApexGrid;
    chart: ApexChart;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
    colors: any;
};

@Component({
    selector: 'app-sales-analytics',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './sales-analytics.component.html',
    styleUrls: ['./sales-analytics.component.scss']
})
export class SalesAnalyticsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Cost",
                    data: [30, 20, 40, 25, 18, 43, 15]
                },
                {
                    name: "Sales",
                    data: [20, 10, 20, 20, 12, 27, 28]
                },
                {
                    name: "Revenue",
                    data: [10, 10, 15, 15, 15, 14, 15]
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            xaxis: {
                type: "category",
                axisBorder: {
                    show: false,
                },
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            colors: [
                "#165BAA", "#A155B9", "#F765A3"
            ],
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "left",
                labels: {
                    colors: '#5B5B98'
                }
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    },
                },
                axisBorder: {
                    show: false,
                }
            },
            fill: {
                opacity: 1
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}