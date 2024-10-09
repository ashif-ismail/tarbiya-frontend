import { Component, ViewChild } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatCardModule } from '@angular/material/card';
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
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

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
    selector: 'app-visits-by-day',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './visits-by-day.component.html',
    styleUrls: ['./visits-by-day.component.scss']
})
export class VisitsByDayComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Products",
                    data: [80, 50, 110, 80, 10, 40, 95]
                },
                {
                    name: "Total Views",
                    data: [20, 110, 90, 30, 100, 120, 60]
                }
            ],
            chart: {
                height: 580,
                type: "radar",
                toolbar: {
                    show: false,
                }
            },
            xaxis: {
                categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
            },
            yaxis: {
                show: false,
            },
            colors: ["#2db6f5", "#e289f2"],
            legend: {
                offsetY: -35,
                fontSize: "14px",
            }
        };
    }

}