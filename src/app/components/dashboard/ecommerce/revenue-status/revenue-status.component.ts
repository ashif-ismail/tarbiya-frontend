import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexDataLabels,
    ApexGrid,
    ApexTooltip,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    stroke: ApexStroke;
    grid: ApexGrid;
    colors: any;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
};

@Component({
    selector: 'app-revenue-status',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './revenue-status.component.html',
    styleUrls: ['./revenue-status.component.scss']
})
export class RevenueStatusComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Income",
                    data: [40, 45, 50, 40, 45, 51, 49, 43, 45, 50, 55],
                }
            ],
            chart: {
                height: 270,
                type: "area",
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            colors: [
                "#757fef"
            ],
            xaxis: {
                categories: [
                    "1 Jan",
                    "2 Jan",
                    "3 Jan",
                    "4 Jan",
                    "5 Jan",
                    "6 Jan",
                    "7 Jan",
                    "8 Jan",
                    "9 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan",
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "13px",
                    },
                },
            },
            yaxis: {
                min: 36,
                tickAmount: 4,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "13px",
                    },
                },
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
                y: {
                    formatter: function (val) {
                        return "$" + val + "k";
                    },
                }
            }
        };
    }

}