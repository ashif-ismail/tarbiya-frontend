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
    selector: 'app-sessions-by-countries',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './sessions-by-countries.component.html',
    styleUrls: ['./sessions-by-countries.component.scss']
})
export class SessionsByCountriesComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Total Sessions:",
                    data: [1026, 1554, 497, 1126, 908, 1512, 604, 1047, 1354, 826],
                }
            ],
            chart: {
                type: "bar",
                height: 492,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [
                "#757FEF"
            ],
            stroke: {
                width: 0,
                show: true,
                colors: ["transparent"]
            },
            xaxis: {
                tickAmount: 4,
                categories: [
                    "United State",
                    "China",
                    "Canada",
                    "Indonesia",
                    "Russia",
                    "Japan",
                    "Brazil",
                    "United Kingdom",
                    "Vietnam",
                    "France"
                ],
                labels: {
                    show: true,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    },
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function(val) {
                        return val + " hours";
                    }
                }
            },
            legend: {
                offsetY: 5,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            },
            grid: {
                show: true,
                borderColor: "#EDEFF5",
                strokeDashArray: 5
            }
        };
    }

}