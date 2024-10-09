import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexLegend,
    ChartComponent,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatCardModule } from "@angular/material/card";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: string[];
    legend: ApexLegend;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-pt-performance',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatMenuModule, MatCardModule, NgApexchartsModule],
    templateUrl: './pt-performance.component.html',
    styleUrls: ['./pt-performance.component.scss']
})
export class PtPerformanceComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [100, 90, 80, 70],
            chart: {
                height: 321,
                type: "radialBar"
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 10,
                        size: "30%",
                        image: undefined,
                        background: "transparent"
                    },
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            show: false
                        }
                    }
                }
            },
            colors: [
                "#757FEF", "#9EA5F4", "#C8CCF9", "#F1F2FD"
            ],
            labels: [
                "Completed", "Active", "Assigned", "Pending"
            ],
            legend: {
                show: true,
                offsetY: 0,
                offsetX: -20,
                floating: true,
                position: "left",
                fontSize: "14px",
                labels: {
                    colors: '#5B5B98'
                },
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
                }
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}