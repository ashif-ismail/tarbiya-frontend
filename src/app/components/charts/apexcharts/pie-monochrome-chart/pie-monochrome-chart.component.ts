import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTheme,
    ApexStroke,
    ApexLegend,
    ApexTooltip,
    ApexDataLabels,
    ApexTitleSubtitle,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    dataLabels: ApexDataLabels;
    legend: ApexLegend;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    colors: any;
};

@Component({
    selector: 'app-pie-monochrome-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './pie-monochrome-chart.component.html',
    styleUrls: ['./pie-monochrome-chart.component.scss']
})
export class PieMonochromeChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [25, 15, 44, 55, 41, 17],
            chart: {
                width: "100%",
                type: "pie"
            },
            labels: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            title: {
                text: "Number of leads"
            },
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