import { Component, ViewChild } from "@angular/core";

import {
    ApexAxisChartSeries,
    ChartComponent,
    ApexChart,
    ApexPlotOptions,
    ApexTitleSubtitle,
    ApexLegend,
    ApexXAxis,
    ApexGrid,
    ApexYAxis,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis,
    yaxis: ApexYAxis,
    grid: ApexGrid,
    legend: ApexLegend,
    tooltip: ApexTooltip,
    plotOptions: ApexPlotOptions;
    colors: string[]
};

@Component({
    selector: 'app-basic-boxplot-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './basic-boxplot-chart.component.html',
    styleUrls: ['./basic-boxplot-chart.component.scss']
})
export class BasicBoxplotChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: 'box',
                    type: 'boxPlot',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: [54, 66, 69, 75, 88]
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: [43, 65, 69, 76, 81]
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: [31, 39, 45, 51, 59]
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: [39, 46, 55, 65, 71]
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: [29, 31, 35, 39, 44]
                        }
                    ]
                },
                {
                    name: 'outliers',
                    type: 'scatter',
                    data: [
                        {
                            x: new Date('2017-01-01').getTime(),
                            y: 32
                        },
                        {
                            x: new Date('2018-01-01').getTime(),
                            y: 25
                        },
                        {
                            x: new Date('2019-01-01').getTime(),
                            y: 64
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 27
                        },
                        {
                            x: new Date('2020-01-01').getTime(),
                            y: 78
                        },
                        {
                            x: new Date('2021-01-01').getTime(),
                            y: 15
                        }
                    ]
                }
            ],
            chart: {
                height: 350,
                type: "boxPlot",
                toolbar: {
                    show: true
                }
            },
            colors: ['#008FFB', '#FEB019'],
            title: {
                text: 'BoxPlot - Scatter Chart',
                align: 'left'
            },
            xaxis: {
                type: 'datetime',
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
            tooltip: {
                shared: false,
                intersect: true
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
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}