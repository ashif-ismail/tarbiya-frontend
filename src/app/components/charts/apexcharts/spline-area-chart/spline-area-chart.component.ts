import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexTooltip,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    stroke: ApexStroke;
    colors: any;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
};

@Component({
    selector: 'app-spline-area-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './spline-area-chart.component.html',
    styleUrls: ['./spline-area-chart.component.scss']
})
export class SplineAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Tagus",
                    data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                    name: "Social",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }
            ],
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            colors: ["#757fef", "#2db6f5"],
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            },
            yaxis: {
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
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

    public generateData(baseval:any, count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

}