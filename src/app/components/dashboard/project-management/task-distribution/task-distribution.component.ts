import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { RouterLink } from "@angular/router";
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexLegend,
    ApexGrid,
    ApexPlotOptions,
    ApexStroke,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";
export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    legend: ApexLegend;
    grid: ApexGrid;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    labels: any;
    colors: any;
    stroke: ApexStroke;
    fill: ApexFill;
};

@Component({
    selector: 'app-task-distribution',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './task-distribution.component.html',
    styleUrls: ['./task-distribution.component.scss']
})
export class TaskDistributionComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [14, 23, 21, 17],
            chart: {
                height: 607,
                type: "polarArea"
            },
            stroke: {
                width: 0,
                colors: ["#ffffff"]
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 1,
                        strokeColor: '#EDEFF5',
                    },
                    spokes: {
                        strokeWidth: 1,
                        connectorColors: '#EDEFF5',
                    }
                }
            },
            colors: [
                "#B8C8DB", "#A1AADB", "#BA68C8", "#8E72C8"
            ],
            fill: {
                opacity: 1
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            legend: {
                offsetY: 0,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "left",
                labels: {
                    colors: '#5B5B98',
                }
            },
            labels: ["API", "Frontend", "Backend", "Design"]
        };
    }

}