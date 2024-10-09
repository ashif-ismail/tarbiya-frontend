import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexYAxis,
    ApexTooltip,
    ApexLegend,
    ApexMarkers,
    ApexGrid,
    ApexXAxis,
    ApexPlotOptions,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    grid: ApexGrid;
    legend: ApexLegend;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis | ApexYAxis[];
    labels: string[];
    stroke: any; // ApexStroke;
    markers: ApexMarkers;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-line-column-area-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './line-column-area-chart.component.html',
    styleUrls: ['./line-column-area-chart.component.scss']
})
export class LineColumnAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Team A",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                },
                {
                    name: "Team B",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                },
                {
                    name: "Team C",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                stacked: false,
                toolbar: {
                    show: false
                }
            },
            stroke: {
                width: [0, 2, 5],
                curve: "smooth"
            },
            plotOptions: {
                bar: {
                    columnWidth: "50%"
                }
            },
            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: false,
                    shade: "light",
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55
                }
            },
            labels: [
                "01/01/2023",
                "02/01/2023",
                "03/01/2023",
                "04/01/2023",
                "05/01/2023",
                "06/01/2023",
                "07/01/2023",
                "08/01/2023",
                "09/01/2023",
                "10/01/2023",
                "11/01/2023"
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: "datetime",
                labels: {
                    trim: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            yaxis: {
                title: {
                    text: "Points"
                },
                min: 0,
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
                position: "top",
                fontSize: "14px",
                horizontalAlign: "left",
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