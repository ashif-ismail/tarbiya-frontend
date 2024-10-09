import { Component } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexDataLabels,
    ApexFill,
    ApexYAxis,
    ApexXAxis,
    ApexStroke,
    ApexGrid,
    ApexLegend,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";
import { githubData } from "./github-data";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    fill: ApexFill;
    legend: ApexLegend;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    stroke: ApexStroke;
    colors: any;
};

@Component({
    selector: 'app-github-area-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './github-area-chart.component.html',
    styleUrls: ['./github-area-chart.component.scss']
})
export class GithubAreaChartComponent {

    public chartMonths: Partial<ChartOptions>;
    public chartYears: Partial<ChartOptions>;
    public commonOptions: Partial<ChartOptions> = {
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 1,
            type: "solid"
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
        stroke: {
            width: 0,
            curve: "smooth"
        },
        grid: {
            show: true,
            strokeDashArray: 5,
            borderColor: "#EDEFF5"
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

    constructor() {
        this.initCharts();
    }

    public initCharts(): void {
        this.chartMonths = {
            series: [
                {
                    name: "commits",
                    data: githubData.series
                }
            ],
            chart: {
                id: "chartyear",
                type: "area",
                height: 160,
                toolbar: {
                    show: false,
                    autoSelected: "pan"
                },
                events: {
                    mounted: function(chart) {
                        // var commitsEl = document.querySelector(".cmeta span.commits");
                        // var commits = chart.getSeriesTotalXRange(
                        //   chart.w.globals.minX,
                        //   chart.w.globals.maxX
                        // );
                        // commitsEl.innerHTML = commits;
                    },
                    updated: function(chart) {
                        // var commitsEl = document.querySelector(".cmeta span.commits");
                        // var commits = chart.getSeriesTotalXRange(
                        //   chart.w.globals.minX,
                        //   chart.w.globals.maxX
                        // );
                        // commitsEl.innerHTML = commits;
                    }
                }
            },
            colors: ["#757fef"],
            yaxis: {
                show: false,
                tickAmount: 3
            }
        };
        this.chartYears = {
            series: [
                {
                    name: "commits",
                    data: githubData.series
                }
            ],
            chart: {
                height: 200,
                type: "area",
                toolbar: {
                    autoSelected: "selection"
                },
                brush: {
                    enabled: true,
                    target: "chartyear"
                },
                selection: {
                    enabled: true,
                    xaxis: {
                        min: new Date("26 Jan 2014").getTime(),
                        max: new Date("29 Mar 2015").getTime()
                    }
                }
            },
            colors: ["#7BD39A"],
            legend: {
                position: "top",
                horizontalAlign: "left"
            }
        };
    }

}