import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexGrid,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexLegend,
    NgApexchartsModule
} from "ng-apexcharts";

import { series } from "./data";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    colors: any;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
    labels: string[];
    legend: ApexLegend;
    subtitle: ApexTitleSubtitle;
};

@Component({
    selector: 'app-basic-area-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './basic-area-chart.component.html',
    styleUrls: ['./basic-area-chart.component.scss']
})
export class BasicAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "STOCK ABC",
                    data: series.monthDataSeries1.prices
                }
            ],
            chart: {
                type: "area",
                height: 350,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#757fef"],
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Fundamental Analysis of Stocks",
                align: "left"
            },
            subtitle: {
                text: "Price Movements",
                align: "left"
            },
            labels: series.monthDataSeries1.dates,
            xaxis: {
                type: "datetime",
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            yaxis: {
                opposite: true,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: false
                }
            },
            legend: {
                horizontalAlign: "left"
            }
        };
    }

}