import { Component, ViewChild } from "@angular/core";
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

import {
    ApexNonAxisChartSeries,
    ApexTooltip,
    ApexLegend,
    ApexStroke,
    ApexDataLabels,
    ApexPlotOptions,
    ApexChart
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    labels: any;
    plotOptions: ApexPlotOptions;
    colors: any;
    dataLabels: ApexDataLabels;
};

@Component({
	selector: 'app-crypto-my-profile',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
	templateUrl: './crypto-my-profile.component.html',
	styleUrls: ['./crypto-my-profile.component.scss']
})
export class CryptoMyProfileComponent {

	@ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [1000, 800, 1500, 761, 871],
            colors: ["#757fef", "#2db6f5", "#00b69b", "#f7931a", "#f4f4f4"],
            chart: {
                height: 280,
                type: "donut"
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$" + val;
                    },
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '88%'
                    }
                }
            },
            stroke: {
                width: 0,
                show: true
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                offsetY: 0,
                show: false,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center"
            },
            labels: ["Bitcoin", "Ethereum", "Comp Bidr", "Matic", "Litecoin"]
        };
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}