import { Component, ViewChild } from "@angular/core";

import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexChart,
    ApexXAxis,
    ChartComponent,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    xaxis: ApexXAxis;
    colors: any;
};

@Component({
    selector: 'app-basic-radar-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './basic-radar-chart.component.html',
    styleUrls: ['./basic-radar-chart.component.scss']
})
export class BasicRadarChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Tagus",
                    data: [80, 50, 30, 40, 100, 20]
                }
            ],
            chart: {
                height: 350,
                type: "radar",
                toolbar: {
                    show: true
                }
            },
            title: {
                text: "Basic Radar Chart"
            },
            xaxis: {
                categories: ["January", "February", "March", "April", "May", "June"]
            },
            colors: ["#757fef"]
        };
    }

}