import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexStroke,
    ApexLegend,
    ApexTooltip,
    ApexDataLabels,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    colors: any;
};

@Component({
    selector: 'app-pie-donut-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './pie-donut-chart.component.html',
    styleUrls: ['./pie-donut-chart.component.scss']
})
export class PieDonutChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [44, 55, 13, 43, 22],
            chart: {
                type: "donut"
            },
            labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
            legend: {
                offsetY: 0,
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
            },
            stroke: {
                width: 0,
                show: true
            },
            // colors: ["#757fef", "#ee368c", "#2db6f5"],
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
            }
        };
    }

}