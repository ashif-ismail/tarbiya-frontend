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
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};
export type ChartOptions2 = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};
export type ChartOptions3 = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    colors: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
};

@Component({
    selector: 'app-welcome-dashboard',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './welcome-dashboard.component.html',
    styleUrls: ['./welcome-dashboard.component.scss']
})
export class WelcomeDashboardComponent {

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
    public chartOptions2: Partial<ChartOptions2>;
    public chartOptions3: Partial<ChartOptions3>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [45],
            chart: {
                width: 100,
                height: 100,
                offsetX: 2.5,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#00B69B"],
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
                            fontSize: "14px",
                            fontWeight: "700",
                        }
                    }
                }
            }
        };
        this.chartOptions2 = {
            series: [68],
            chart: {
                width: 100,
                height: 100,
                offsetX: 2.5,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#757FEF"],
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
                            fontSize: "14px",
                            fontWeight: "700",
                        }
                    }
                }
            }
        };
        this.chartOptions3 = {
            series: [60],
            chart: {
                width: 100,
                height: 100,
                offsetX: 2.5,
                type: "radialBar",
                sparkline: {
                    enabled: true,
                },
            },
            colors: ["#EE368C"],
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
                            fontSize: "14px",
                            fontWeight: "700",
                        }
                    }
                }
            }
        };
    }

}