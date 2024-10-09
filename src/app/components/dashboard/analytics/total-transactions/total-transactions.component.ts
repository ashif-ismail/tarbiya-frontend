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
    ApexGrid,
    ApexPlotOptions,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    grid: ApexGrid;
    chart: ApexChart;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
    colors: any;
};

@Component({
    selector: 'app-total-transactions',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './total-transactions.component.html',
    styleUrls: ['./total-transactions.component.scss']
})
export class TotalTransactionsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "This Week",
                    data: [30, 20, 40, 25, 18, 43, 15]
                },
                {
                    name: "Last Week",
                    data: [20, 10, 20, 20, 12, 27, 28]
                },
                {
                    name: "Performance",
                    data: [10, 10, 15, 15, 15, 14, 15]
                },
                {
                    name: "Cost",
                    data: [20, 10, 20, 20, 12, 27, 28]
                },
            ],
            chart: {
                type: "bar",
                height: 355,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "22%"
                }
            },
            xaxis: {
                type: "category",
                axisBorder: {
                    show: false,
                },
                labels: {
                    show: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            colors: [
                "#EDF0F4", "#1CCAB8", "#BDEEE1", "#D0F1FA"
            ],
            legend: {
                offsetY: 8,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    },
                },
                axisBorder: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}