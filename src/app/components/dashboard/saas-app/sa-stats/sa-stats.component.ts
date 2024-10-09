import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexChart,
    ApexFill,
    ChartComponent,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-sa-stats',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule, MatProgressBarModule],
    templateUrl: './sa-stats.component.html',
    styleUrls: ['./sa-stats.component.scss']
})
export class SaStatsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [45],
            chart: {
                width: 120,
                height: 130,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                }
            },
            colors: [
                "#2DB6F5"
            ],
            plotOptions: {
                radialBar: {
                    startAngle: -120,
                    endAngle: 120,
                    dataLabels: {
                        name: {
                            show: false
                        },
                        value: {
                            offsetY: 3,
                            fontSize: "15px",
                            fontWeight: "600"
                        }
                    }
                }
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}