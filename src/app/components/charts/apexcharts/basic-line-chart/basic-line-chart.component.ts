import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexYAxis,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexStroke,
    ApexGrid,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    colors: any;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};

@Component({
    selector: 'app-basic-line-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './basic-line-chart.component.html',
    styleUrls: ['./basic-line-chart.component.scss']
})
export class BasicLineChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Desktops",
                    data: [0, 41, 35, 51, 49, 62, 69, 91, 148]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#757fef"],
            stroke: {
                curve: "straight"
            },
            title: {
                text: "Product Trends by Month",
                align: "left"
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5",
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ],
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
                        fontSize: "14px"
                    }
                },
                axisBorder: {
                    show: false
                }
            }
        };
    }

}