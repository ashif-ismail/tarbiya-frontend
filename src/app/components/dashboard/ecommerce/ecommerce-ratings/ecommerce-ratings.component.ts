import { Component, ViewChild } from "@angular/core";
import {  ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart,
    ApexTheme,
    ApexTitleSubtitle,
    ApexFill,
    ApexStroke,
    ApexYAxis,
    ApexLegend,
    ApexPlotOptions
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    fill: ApexFill,
    yaxis: ApexYAxis,
    stroke: ApexStroke,
    legend: ApexLegend,
    plotOptions: ApexPlotOptions
};

@Component({
    selector: 'app-ecommerce-ratings',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatCardModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './ecommerce-ratings.component.html',
    styleUrls: ['./ecommerce-ratings.component.scss']
})
export class EcommerceRatingsComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;

    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [50, 40, 50, 60, 40],
            chart: {
                width: 240,
                type: 'polarArea'
            },
            labels: ['Rating 5', 'Rating 4', 'Rating 3', 'Rating 2', 'Rating 1'],
            fill: {
                opacity: 1
            },
            stroke: {
                width: 1,
                colors: undefined
            },
            yaxis: {
                show: false
            },
            legend: {
                show: false
            },
            plotOptions: {
                polarArea: {
                    rings: {
                        strokeWidth: 0
                    }
                }
            },
            theme: {
                monochrome: {
                    enabled: true,
                    shadeTo: 'light',
                    shadeIntensity: 0.5
                }
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}