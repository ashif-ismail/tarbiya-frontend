import { Component, ViewChild } from "@angular/core";
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexFill,
    ApexLegend,
    ApexYAxis,
    ApexTooltip,
    ApexGrid,
    ApexTitleSubtitle,
    ApexXAxis,
    NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    colors: any;
    grid: ApexGrid;
    yaxis: ApexYAxis | ApexYAxis[];
    title: ApexTitleSubtitle;
    labels: string[];
    legend: ApexLegend;
    stroke: any; // ApexStroke;
    dataLabels: any; // ApexDataLabels;
    fill: ApexFill;
    tooltip: ApexTooltip;
};

@Component({
    selector: 'app-line-column-chart',
    standalone: true,
    imports: [NgApexchartsModule],
    templateUrl: './line-column-chart.component.html',
    styleUrls: ['./line-column-chart.component.scss']
})
export class LineColumnChartComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Website Blog",
                    type: "column",
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                },
                {
                    name: "Social Media",
                    type: "line",
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: true
                }
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: "Traffic Sources"
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1],
                style: {
                    fontSize: '14px'
                }
            },
            labels: [
                "01 Jan 2023",
                "02 Jan 2023",
                "03 Jan 2023",
                "04 Jan 2023",
                "05 Jan 2023",
                "06 Jan 2023",
                "07 Jan 2023",
                "08 Jan 2023",
                "09 Jan 2023",
                "10 Jan 2023",
                "11 Jan 2023",
                "12 Jan 2023"
            ],
            xaxis: {
                type: "datetime",
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px",
                    }
                }
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            colors: ["#757fef"],
            legend: {
                offsetY: 5,
                position: "bottom",
                fontSize: "14px",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            },
            yaxis: [
                {
                    title: {
                        text: "Website Blog",
                        style: {
                            color: 'transparent'
                        }
                    },
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
                {
                    opposite: true,
                    title: {
                        text: "Social Media",
                        style: {
                            color: 'transparent'
                        }
                    },
                    labels: {
                        style: {
                            colors: "#a9a9c8",
                            fontSize: "14px",
                        }
                    },
                    axisBorder: {
                        show: false
                    }
                }
            ]
        };
    }

}