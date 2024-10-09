import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexLegend,
    ApexXAxis,
    ApexYAxis,
    ApexGrid,
    ApexPlotOptions,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-range-column-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './range-column-chart.component.html',
    styleUrls: ['./range-column-chart.component.scss']
})
export class RangeColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Blue",
                    data: [
                        {
                            x: "Team A",
                            y: [1, 5]
                        },
                        {
                            x: "Team B",
                            y: [4, 6]
                        },
                        {
                            x: "Team C",
                            y: [5, 8]
                        },
                        {
                            x: "Team D",
                            y: [3, 11]
                        }
                    ]
                },
                {
                    name: "Green",
                    data: [
                        {
                            x: "Team A",
                            y: [2, 6]
                        },
                        {
                            x: "Team B",
                            y: [1, 3]
                        },
                        {
                            x: "Team C",
                            y: [7, 8]
                        },
                        {
                            x: "Team D",
                            y: [5, 9]
                        }
                    ]
                }
            ],
            chart: {
                type: "rangeBar",
                height: 350,
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            dataLabels: {
                enabled: true
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
            },
            xaxis: {
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
            }
        };
    }

}