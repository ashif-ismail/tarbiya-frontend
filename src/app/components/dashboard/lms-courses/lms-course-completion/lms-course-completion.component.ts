import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexPlotOptions,
    ApexDataLabels,
    ApexChart,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    series2: ApexNonAxisChartSeries;
    series3: ApexNonAxisChartSeries;
    series4: ApexNonAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: 'app-lms-course-completion',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, NgApexchartsModule],
    templateUrl: './lms-course-completion.component.html',
    styleUrls: ['./lms-course-completion.component.scss']
})
export class LmsCourseCompletionComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [80],
            series2: [50],
            series3: [30],
            series4: [60],
            chart: {
                height: 140,
                offsetX: -120,
                type: "radialBar"
            },
            colors: ["#757FEF"],
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "50%"
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "#757FEF",
                            offsetY: 5,
                            show: true
                        }
                    }
                }
            }
        };
    }

}