import { Component } from '@angular/core';
import {
    ApexAxisChartSeries,
    ApexChart,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexFill,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexXAxis,
    ApexTooltip,
    NgApexchartsModule
} from "ng-apexcharts";
import { dataSeries } from "./data-series";

@Component({
    selector: 'app-zoomable-line-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './zoomable-line-chart.component.html',
    styleUrls: ['./zoomable-line-chart.component.scss']
})
export class ZoomableLineChartComponent {

    public series: ApexAxisChartSeries;
    public chart: ApexChart;
    public dataLabels: ApexDataLabels;
    public markers: ApexMarkers;
    public title: ApexTitleSubtitle;
    public fill: ApexFill;
    public yaxis: ApexYAxis;
    public grid: ApexGrid;
    public xaxis: ApexXAxis;
    public tooltip: ApexTooltip;

    constructor() {
        this.initChartData();
    }

    public initChartData(): void {
        let ts2 = 1484418600000;
        let dates = [];
        for (let i = 0; i < 120; i++) {
            ts2 = ts2 + 86400000;
            dates.push([ts2, dataSeries[1][i].value]);
        }

        this.series = [
            {
                name: "XYZ MOTORS",
                data: dates
            }
        ];
        this.chart = {
            type: "area",
            stacked: false,
            height: 350,
            zoom: {
                type: "x",
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                show: true,
                autoSelected: "zoom"
            }
        };
        this.dataLabels = {
            enabled: false
        };
        this.markers = {
            size: 0
        };
        this.grid = {
            show: true,
            strokeDashArray: 0,
            borderColor: "#EDEFF5"
        },
        this.title = {
            text: "Stock Price Movement",
            align: "left"
        };
        this.fill = {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0
            }
        };
        this.yaxis = {
            labels: {
                formatter: function(val) {
                    return (val / 1000000).toFixed(0);
                },
                style: {
                    colors: "#a9a9c8",
                    fontSize: "14px",
                }
            },
            title: {
                text: "Price"
            }
        };
        this.xaxis = {
            type: "datetime",
            labels: {
                style: {
                    colors: "#a9a9c8",
                    fontSize: "14px",
                }
            }
        };
        this.tooltip = {
            shared: false,
            y: {
                formatter: function(val) {
                    return (val / 1000000).toFixed(0);
                }
            }
        };
    }

}