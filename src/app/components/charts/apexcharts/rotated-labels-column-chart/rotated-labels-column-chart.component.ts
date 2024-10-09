import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexAnnotations,
    ApexFill,
    ApexStroke,
    ApexGrid,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: any; //ApexXAxis;
    annotations: ApexAnnotations;
    fill: ApexFill;
    stroke: ApexStroke;
    grid: ApexGrid;
};

@Component({
    selector: 'app-rotated-labels-column-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './rotated-labels-column-chart.component.html',
    styleUrls: ['./rotated-labels-column-chart.component.scss']
})
export class RotatedLabelsColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Servings",
                    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
                }
            ],
            annotations: {
                points: [
                    {
                        x: "Bananas",
                        seriesIndex: 0,
                        label: {
                            borderColor: "#775DD0",
                            offsetY: 0,
                            style: {
                                color: "#fff",
                                background: "#775DD0"
                            },
                            text: "Bananas are good"
                        }
                    }
                ]
            },
            chart: {
                height: 350,
                type: "bar",
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2
            },
            grid: {
                row: {
                    colors: ["#ffffff", "#f2f2f2"]
                },
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            xaxis: {
                labels: {
                    rotate: -45,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                categories: [
                    "Apples",
                    "Oranges",
                    "Strawberries",
                    "Pineapples",
                    "Mangoes",
                    "Bananas",
                    "Blackberries",
                    "Pears",
                    "Watermelons",
                    "Cherries",
                    "Pomegranates",
                    "Tangerines",
                    "Papayas"
                ],
                tickPlacement: "on"
            },
            yaxis: {
                title: {
                    text: "Servings"
                },
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
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 0.85,
                    opacityTo: 0.85
                }
            }
        };
    }

}