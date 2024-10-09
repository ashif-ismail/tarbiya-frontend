import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexYAxis,
    ApexFill,
    ApexMarkers,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    fill: ApexFill;
    stroke: ApexStroke;
    markers: ApexMarkers;
    colors: string[];
};

@Component({
    selector: 'app-brush-line-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './brush-line-chart.component.html',
    styleUrls: ['./brush-line-chart.component.scss']
})
export class BrushLineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions1: Partial<ChartOptions>;
    public chartOptions2: Partial<ChartOptions>;

    constructor() {
        this.chartOptions1 = {
            series: [
                {
                    name: "series1",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        185,
                        {
                            min: 0,
                            max: 20
                        }
                    )
                }
            ],
            chart: {
                id: "chart2",
                type: "line",
                height: 210,
                toolbar: {
                    autoSelected: "pan",
                    show: false
                }
            },
            colors: ["#757fef"],
            stroke: {
                width: 3
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 1
            },
            markers: {
                size: 0
            },
            xaxis: {
                type: "datetime",
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            yaxis: {
                tickAmount: 2,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: false
                }
            }
        };

        this.chartOptions2 = {
            series: [
                {
                    name: "series1",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017").getTime(),
                        185,
                        {
                            min: 0,
                            max: 20
                        }
                    )
                }
            ],
            chart: {
                id: "chart1",
                height: 120,
                type: "area",
                brush: {
                    target: "chart2",
                    enabled: true
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date("19 Jun 2017").getTime(),
                        max: new Date("14 Aug 2017").getTime()
                    }
                }
            },
            colors: ["#008FFB"],
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.91,
                    opacityTo: 0.1
                }
            },
            xaxis: {
                type: "datetime",
                tooltip: {
                    enabled: false
                },
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            yaxis: {
                tickAmount: 2,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: false
                }
            }
        };
    }

    public generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval;
            var y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            series.push([x, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }

}