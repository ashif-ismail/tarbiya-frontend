import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";
import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexResponsive,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ChartComponent,
    NgApexchartsModule,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    xaxis: ApexXAxis;
    yaxis: ApexYAxis;
    colors: any;
};

@Component({
    selector: 'app-ar-revenue-report',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './ar-revenue-report.component.html',
    styleUrls: ['./ar-revenue-report.component.scss']
})
export class ArRevenueReportComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Earning",
                    data: [80, 50, 110, 80, 10, 40, 95, 90, 30, 100, 120, 60]
                },
                {
                    name: "Expenses",
                    data: [20, 110, 90, 30, 100, 120, 60, 80, 50, 110, 80, 10]
                }
            ],
            chart: {
                height: 544,
                type: "radar",
                toolbar: {
                    show: false,
                }
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            yaxis: {
                show: false
            },
            colors: [
                "#757FEF", "#FF8A65"
            ],
            legend: {
                offsetY: 0,
                position: "top",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}