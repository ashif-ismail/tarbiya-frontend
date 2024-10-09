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
    selector: 'app-audience-overview',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatCardModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './audience-overview.component.html',
    styleUrls: ['./audience-overview.component.scss']
})
export class AudienceOverviewComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Orders",
                    data: [22, 16, 25, 13, 18, 12, 20, 24, 17],
                },
                {
                    name: "Net Revenue",
                    data: [18, 13, 21, 11, 15, 7, 18, 22, 14],
                },
                {
                    name: "Refunds",
                    data: [8, 7, 6, 8, 9, 7, 7, 8, 6],
                }
            ],
            chart: {
                type: "bar",
                height: 350,
            },
            plotOptions: {
                bar: {
                    borderRadius: 3,
                    horizontal: false,
                    columnWidth: "33%",
                    borderRadiusApplication: 'end',
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#757fef", "#2db6f5", "#ee368c"],
            stroke: {
                width: 5,
                show: true,
                colors: ["transparent"]
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
                    "Sep"
                ],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    },
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
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
                        return "$" + val + " thousands";
                    }
                }
            },
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "left",
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}