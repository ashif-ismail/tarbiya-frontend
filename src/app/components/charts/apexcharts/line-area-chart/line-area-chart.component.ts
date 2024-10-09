import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    ApexTooltip,
    ApexMarkers,
    ApexXAxis,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    legend: ApexLegend;
    grid: ApexGrid;
    yaxis: ApexYAxis | ApexYAxis[];
    labels: string[];
    stroke: ApexStroke;
    markers: ApexMarkers;
    fill: ApexFill;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-line-area-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './line-area-chart.component.html',
    styleUrls: ['./line-area-chart.component.scss']
})
export class LineAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                name: "Team A",
                    type: "area",
                    data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
                },
                {
                name: "Team B",
                    type: "line",
                    data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: false
                }
            },
            stroke: {
                curve: "smooth"
            },
            fill: {
                type: "solid",
                opacity: [0.35, 1]
            },
            labels: [
                "Dec 01",
                "Dec 02",
                "Dec 03",
                "Dec 04",
                "Dec 05",
                "Dec 06",
                "Dec 07",
                "Dec 08",
                "Dec 09 ",
                "Dec 10",
                "Dec 11"
            ],
            markers: {
                size: 0
            },
            yaxis: [
                {
                    title: {
                        text: "Series A"
                    },
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
                {
                    opposite: true,
                    title: {
                        text: "Series B"
                    },
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
            ],
            xaxis: {
                labels: {
                    trim: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function(y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;
                    }
                }
            },
            legend: {
                offsetY: 0,
                position: "bottom",
                fontSize: "14px",
                horizontalAlign: "center",
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