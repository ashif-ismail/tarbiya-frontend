import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexGrid,
    ApexYAxis,
    ApexTitleSubtitle,
    ApexXAxis,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: any;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-sa-revenue-summary',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './sa-revenue-summary.component.html',
    styleUrls: ['./sa-revenue-summary.component.scss']
})
export class SaRevenueSummaryComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Revenue Summary",
                    data: [2.3, 3, 4.0, 10.5, 5.6, 5, 4, 2.8, 2, 1.3, 0.8, 0.3]
                }
            ],
            chart: {
                height: 360,
                type: "bar",
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 9,
                    columnWidth: "60%",
                    borderRadiusWhenStacked: 'last',
                    borderRadiusApplication: 'around',
                    dataLabels: {
                        position: "top"
                    }
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function(val) {
                    return val + "%";
                },
                offsetY: -28,
                style: {
                    colors: ["#5B5B98"]
                }
            },
            colors: [
                "#757fef"
            ],
            fill: {
                opacity: 1
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
                position: "top",
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}