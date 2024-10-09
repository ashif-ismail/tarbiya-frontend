import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTheme,
    ApexTitleSubtitle,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    fill: ApexFill,
    yaxis: ApexYAxis,
    stroke: ApexStroke,
    legend: ApexLegend,
    plotOptions: ApexPlotOptions
};

@Component({
    selector: 'app-monochrome-polar-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './monochrome-polar-chart.component.html',
    styleUrls: ['./monochrome-polar-chart.component.scss']
})
export class MonochromePolarChartComponent {

@ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [42, 39, 35, 29, 26],
            chart: {
                type: 'polarArea'
            },
            labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                position: 'bottom',
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    }
                }
            },
            theme: {
                monochrome: {
                    // enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.6
                }
            }
        };
    }

}