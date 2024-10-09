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
    ApexStroke,
    ApexGrid,
    ApexXAxis,
    ApexFill,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    colors: any;
};

@Component({
    selector: 'app-lms-experience',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './lms-experience.component.html',
    styleUrls: ['./lms-experience.component.scss']
})
export class LmsExperienceComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Achievement",
                    data: [22, 16, 25, 13, 18, 20, 24, 17],
                },
                {
                    name: "Learning Path",
                    data: [18, 13, 21, 11, 15, 18, 22, 14],
                },
                {
                    name: "IQ Test Score",
                    data: [8, 7, 6, 8, 9, 7, 8, 6],
                }
            ],
            chart: {
                type: "bar",
                height: 350,
                toolbar: {
                    show: false,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#757fef", "#2db6f5", "#ee368c"],
            stroke: {
                width: 4,
                show: true,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "30",
                    "20",
                    "10",
                    "0"
                ],
                labels: {
                    show: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    },
                },
                axisBorder: {
                    show: false,
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + "%";
                    }
                }
            },
            legend: {
                offsetY: 5,
                position: "bottom",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98',
                },
            },
            grid: {
                show: true,
                borderColor: "#EDEFF5",
                strokeDashArray: 5,
            }
        };
    }

}