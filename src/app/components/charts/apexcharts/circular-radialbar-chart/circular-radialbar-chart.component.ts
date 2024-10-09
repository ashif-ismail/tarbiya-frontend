import { Component, ViewChild } from "@angular/core";

import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    colors: any;
    labels: string[];
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-circular-radialbar-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './circular-radialbar-chart.component.html',
    styleUrls: ['./circular-radialbar-chart.component.scss']
})
export class CircularRadialbarChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [76],
            chart: {
                type: "radialBar",
                offsetY: -20
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: "97%",
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            opacity: 0.31,
                            blur: 2
                        }
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "22px"
                        }
                    }
                }
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1
                }
            },
            labels: ["Average Results"],
            colors: ["#757fef"]
        };
    }

}