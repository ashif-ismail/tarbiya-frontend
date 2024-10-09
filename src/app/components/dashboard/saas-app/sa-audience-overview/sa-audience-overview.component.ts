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
    ApexLegend,
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
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
};

@Component({
    selector: 'app-sa-audience-overview',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './sa-audience-overview.component.html',
    styleUrls: ['./sa-audience-overview.component.scss']
})
export class SaAudienceOverviewComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "New Visitors",
                    data: [0, 70, 35, 80, 40, 80, 75, 65, 80, 70, 40, 0],
                },
                {
                    name: "Unique Visitors",
                    data: [0, 55, 80, 30, 50, 60, 32, 40, 60, 60, 40, 10],
                },
                {
                    name: "Previous Visitors",
                    data: [0, 45, 35, 50, 80, 40, 60, 50, 110, 40, 65, 20],
                }
            ],
            chart: {
                height: 420,
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
                "#E7EBF5", "#8EB0DE", "#90C6E0"
            ],
            xaxis: {
                axisBorder: {
                    show: false
                },
                categories: [
                    "13 Jan",
                    "14 Jan",
                    "15 Jan",
                    "16 Jan",
                    "17 Jan",
                    "18 Jan",
                    "19 Jan",
                    "20 Jan",
                    "21 Jan",
                    "22 Jan",
                    "23 Jan",
                    "24 Jan",
                    "25 Jan"
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                tickAmount: 6,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            },
            legend: {
                offsetY: 0,
                position: 'top',
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}