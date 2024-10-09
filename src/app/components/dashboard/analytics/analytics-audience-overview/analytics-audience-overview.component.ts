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
    ApexDataLabels,
    ApexStroke,
    ApexYAxis,
    ApexGrid,
    ApexTitleSubtitle,
    ApexLegend,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    tooltip: any;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
    colors: any;
};

@Component({
    selector: 'app-analytics-audience-overview',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './analytics-audience-overview.component.html',
    styleUrls: ['./analytics-audience-overview.component.scss']
})
export class AnalyticsAudienceOverviewComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "New Visitors",
                    data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51]
                },
                {
                    name: "Unique Visitors",
                    data: [50, 57, 74, 99, 75, 38, 62, 47, 82, 56]
                },
                {
                    name: "Previous Visitors",
                    data: [87, 57, 62, 47, 82, 56, 74, 99, 75, 38]
                }
            ],
            chart: {
                height: 287,
                type: "line",
                toolbar: {
                    show: false,
                }
            },
            colors: [
                "#2DB6F5", "#F765A3", "#757FEF"
            ],
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 3,
                curve: "straight",
            },
            legend: {
                offsetY: 3,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98',
                }
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: false,
                }
            },
            xaxis: {
                axisBorder: {
                    show: false,
                },
                labels: {
                    trim: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                categories: [
                    "01 Jan",
                    "02 Jan",
                    "03 Jan",
                    "04 Jan",
                    "05 Jan",
                    "06 Jan",
                    "07 Jan",
                    "08 Jan",
                    "09 Jan",
                    "10 Jan",
                ]
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}