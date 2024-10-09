import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
    colors: any;
};

@Component({
    selector: 'app-basic-heatmap-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './basic-heatmap-chart.component.html',
    styleUrls: ['./basic-heatmap-chart.component.scss']
})
export class BasicHeatmapChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Metric 1",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 2",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 3",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 4",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 5",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 6",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 7",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 8",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                },
                {
                    name: "Metric 9",
                    data: this.generateData(18, {
                        min: 0,
                        max: 90
                    })
                }
            ],
            chart: {
                height: 350,
                type: "heatmap",
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#008FFB"],
            title: {
                text: "HeatMap Chart (Single color)"
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            xaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
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

    public generateData(count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
        var x = "w" + (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }

}