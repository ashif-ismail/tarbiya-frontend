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
    ApexYAxis,
    ApexLegend,
    ApexGrid,
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
    legend: ApexLegend;
    colors: any;
    xaxis: ApexXAxis;
    fill: ApexFill;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-lms-hours-spent',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './lms-hours-spent.component.html',
    styleUrls: ['./lms-hours-spent.component.scss']
})
export class LmsHoursSpentComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Hours Spent",
                    data: [16, 12, 18, 14, 11, 9, 17]
                }
            ],
            chart: {
                height: 312,
                type: "bar",
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "40%",
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#757FEF"],
            xaxis: {
                categories: [
                    "Sat",
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri"
                ],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    },
                },
            },
            yaxis: {
                tickAmount: 5,
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: true,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    },
                }
            },
            grid: {
                show: true,
                borderColor: "#EDEFF5",
                strokeDashArray: 5,
            },
            legend: {
                offsetY: 5,
                show: false,
                position: "bottom",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98',
                },
            },
        };
    }

}