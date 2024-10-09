import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexChart,
    ApexStroke,
    ApexTooltip,
    ApexDataLabels,
    ApexLegend,
    NgApexchartsModule,
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    stroke: ApexStroke;
    chart: ApexChart;
    tooltip: ApexTooltip;
    dataLabels: ApexDataLabels;
    labels: any;
    legend: ApexLegend;
    colors: any;
};

@Component({
    selector: 'app-lms-active-course',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './lms-active-course.component.html',
    styleUrls: ['./lms-active-course.component.scss']
})
export class LmsActiveCourseComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor() {
        this.chartOptions = {
            series: [59.5, 25, 15.5],
            chart: {
                height: 315,
                type: "pie"
            },
            stroke: {
                width: 0,
                show: true
            },
            colors: ["#757fef", "#ee368c", "#2db6f5"],
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '14px',
                },
                dropShadow: {
                    enabled: false
                }
            },
            tooltip: {
                style: {
                    fontSize: '14px',
                },
                y: {
                    formatter: function(val:any) {
                        return val + "%";
                    }
                }
            },
            legend: {
                offsetY: 5,
                position: "bottom",
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98',
                },
            },
            labels: ["Courses Done", "On Progress", "To Do"]
        };
    }

}