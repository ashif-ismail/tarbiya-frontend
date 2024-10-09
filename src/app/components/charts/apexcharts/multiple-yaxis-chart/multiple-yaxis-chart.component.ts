import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexTooltip,
    ApexGrid,
    ApexXAxis,
    ApexLegend,
    ApexDataLabels,
    ApexTitleSubtitle,
    ApexYAxis,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    markers: any; //ApexMarkers;
    stroke: any; //ApexStroke;
    yaxis: ApexYAxis | ApexYAxis[];
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    fill: ApexFill;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-multiple-yaxis-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './multiple-yaxis-chart.component.html',
    styleUrls: ['./multiple-yaxis-chart.component.scss']
})
export class MultipleYaxisChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Income",
                    type: "column",
                    data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
                },
                {
                    name: "Cashflow",
                    type: "column",
                    data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
                },
                {
                    name: "Revenue",
                    type: "line",
                    data: [20, 29, 37, 36, 44, 45, 50, 58]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [1, 1, 4]
            },
            title: {
                text: "XYZ - Stock Analysis (2009 - 2016)",
                align: "left",
                offsetX: 110
            },
            xaxis: {
                categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#008FFB"
                    },
                    labels: {
                        style: {
                            colors: "#a9a9c8",
                            fontSize: "14px"
                        }
                    },
                    title: {
                        text: "Income (thousand crores)",
                        style: {
                            color: "#008FFB"
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                },
                {
                    seriesName: "Income",
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#00E396"
                    },
                    labels: {
                        style: {
                            colors: "#a9a9c8",
                            fontSize: "14px"
                        }
                    },
                    title: {
                        text: "Operating Cashflow (thousand crores)",
                        style: {
                            color: "#00E396"
                        }
                    }
                },
                {
                    seriesName: "Revenue",
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#FEB019"
                    },
                    labels: {
                        style: {
                            colors: "#FEB019"
                        }
                    },
                    title: {
                        text: "Revenue (thousand crores)",
                        style: {
                            color: "#FEB019"
                        }
                    }
                }
            ],
            tooltip: {
                fixed: {
                    enabled: true,
                    position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 30,
                    offsetX: 60
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40,
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                }
            }
        };
    }

}