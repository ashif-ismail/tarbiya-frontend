import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ChartComponent,
    ApexChart,
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexGrid,
    ApexFill,
    ApexYAxis,
    ApexXAxis,
    ApexTooltip,
    ApexMarkers,
    ApexAnnotations,
    ApexStroke,
    NgApexchartsModule
} from "ng-apexcharts";

import { data } from "./series-data";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    title: ApexTitleSubtitle;
    fill: ApexFill;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    xaxis: ApexXAxis;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    annotations: ApexAnnotations;
    colors: any;
    toolbar: any;
};

@Component({
    selector: 'app-market-graph',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './market-graph.component.html',
    styleUrls: ['./market-graph.component.scss']
})
export class MarketGraphComponent {

    @ViewChild("chart", { static: false }) chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService,
    ) {
        this.initChart();
    }
  
    initChart(): void {
        this.chartOptions = {
            series: [
                {
                    name: "Price",
                    data: data
                }
            ],
            chart: {
                type: "area",
                height: 335,
                toolbar: {
                    show: false,
                }
            },
            dataLabels: {
                enabled: false
            },
            grid: {
                show: true,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            },
            colors: [
                "#757fef"
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: "datetime",
                min: new Date("01 Mar 2012").getTime(),
                tickAmount: 6,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "13px",
                    },
                },
                axisBorder: {
                    show: false
                }
            },
            yaxis: {
                tickAmount: 5,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "13px",
                    },
                },
            },
            tooltip: {
                x: {
                    format: "dd MMM yyyy"
                }
            }
        };
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}