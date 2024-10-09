import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexYAxis,
    ApexGrid,
    ApexLegend,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: string[];
    legend: ApexLegend;
    fill: ApexFill;
};

@Component({
    selector: 'app-stacked-area-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './stacked-area-chart.component.html',
    styleUrls: ['./stacked-area-chart.component.scss']
})
export class StackedAreaChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "South",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 60
                        }
                    )
                },
                {
                    name: "North",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 20
                        }
                    )
                },
                {
                    name: "Central",
                    data: this.generateDayWiseTimeSeries(
                        new Date("11 Feb 2017 GMT").getTime(),
                        20,
                        {
                            min: 10,
                            max: 15
                        }
                    )
                }
            ],
            chart: {
                type: "area",
                height: 350,
                stacked: true,
                events: {
                    selection: function(chart, e) {
                        console.log(new Date(e.xaxis.min));
                    }
                },
                toolbar: {
                    show: true
                }
            },
            colors: ["#008FFB", "#00E396", "#CED4DC"],
            dataLabels: {
                enabled: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.6,
                    opacityTo: 0.8
                }
            },
            legend: {
                position: "top",
                horizontalAlign: "left",
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
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
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

    public generateDayWiseTimeSeries = function(baseval:any, count:any, yrange:any) {
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
    };

}