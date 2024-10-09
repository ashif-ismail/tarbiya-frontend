import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexStroke,
    ApexTitleSubtitle,
    ApexYAxis,
    ApexXAxis,
    ApexGrid,
    ApexDataLabels,
    ApexMarkers,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    markers: ApexMarkers;
    stroke: ApexStroke;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    colors: any;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-stepline-line-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './stepline-line-chart.component.html',
    styleUrls: ['./stepline-line-chart.component.scss']
})
export class SteplineLineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "stepline-series",
                    data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
                }
            ],
            chart: {
                type: "line",
                height: 350
            },
            stroke: {
                curve: "stepline"
            },
            colors: ["#757fef"],
            dataLabels: {
                enabled: false
            },
            title: {
                text: "Stepline Chart",
                align: "left"
            },
            markers: {
                hover: {
                    sizeOffset: 4
                }
            },
            xaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                },
                axisBorder: {
                    show: false
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

}