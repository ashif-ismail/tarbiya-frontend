import { Component, ViewChild } from "@angular/core";
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexGrid,
    ApexPlotOptions,
    ApexResponsive,
    ApexXAxis,
    ApexYAxis,
    ApexLegend,
    ApexFill,
    NgApexchartsModule
} from "ng-apexcharts";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    grid: ApexGrid;
    chart: ApexChart;
    yaxis: ApexYAxis;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    responsive: ApexResponsive[];
    xaxis: ApexXAxis;
    legend: ApexLegend;
    fill: ApexFill;
    colors: any;
};

@Component({
    selector: 'app-sa-completed-tasks',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgApexchartsModule],
    templateUrl: './sa-completed-tasks.component.html',
    styleUrls: ['./sa-completed-tasks.component.scss']
})
export class SaCompletedTasksComponent {

    @ViewChild("chart") chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  
    constructor(
        public themeService: CustomizerSettingsService
    ) {
        this.chartOptions = {
            series: [
                {
                    name: "Completed Tasks",
                    data: [30, 20, 40, 25, 18, 43, 15, 35]
                }
            ],
            chart: {
                type: "bar",
                height: 290,
                stacked: true,
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    borderRadiusApplication: 'end',
                    horizontal: false,
                    columnWidth: "20%"
                }
            },
            xaxis: {
                type: "category",
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    show: false,
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    }
                }
            },
            colors: [
                "#2DB6F5"
            ],
            legend: {
                offsetY: 0,
                show: false,
                fontSize: "14px",
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: '#5B5B98'
                }
            },
            yaxis: {
                show: false,
                labels: {
                    style: {
                        colors: "#a9a9c8",
                        fontSize: "14px"
                    },
                },
                axisBorder: {
                    show: false
                }
            },
            fill: {
                opacity: 1
            },
            grid: {
                show: false,
                strokeDashArray: 5,
                borderColor: "#EDEFF5"
            }
        };
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}