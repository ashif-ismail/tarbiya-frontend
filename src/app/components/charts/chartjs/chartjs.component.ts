import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BarChartjsComponent } from './bar-chartjs/bar-chartjs.component';
import { BubbleChartjsComponent } from './bubble-chartjs/bubble-chartjs.component';
import { DoughnutChartjsComponent } from './doughnut-chartjs/doughnut-chartjs.component';
import { PieChartjsComponent } from './pie-chartjs/pie-chartjs.component';
import { PolarChartjsComponent } from './polar-chartjs/polar-chartjs.component';
import { RadarChartjsComponent } from './radar-chartjs/radar-chartjs.component';
import { ScatterChartjsComponent } from './scatter-chartjs/scatter-chartjs.component';

@Component({
    selector: 'app-chartjs',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, BarChartjsComponent, BubbleChartjsComponent, DoughnutChartjsComponent, PieChartjsComponent, PolarChartjsComponent, RadarChartjsComponent, ScatterChartjsComponent, BaseChartDirective],
    templateUrl: './chartjs.component.html',
    styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent {

    constructor() {
        Chart.register(Annotation)
    }
  
    public lineChartData: ChartConfiguration['data'] = {
        datasets: [
            {
                data: [ 65, 59, 80, 81, 56, 55, 40 ],
                label: 'Series A',
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                fill: 'origin',
            },
            {
                data: [ 28, 48, 40, 19, 86, 27, 90 ],
                label: 'Series B',
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)',
                fill: 'origin',
            },
            {
                data: [ 180, 480, 770, 90, 1000, 270, 400 ],
                label: 'Series C',
                yAxisID: 'y1',
                backgroundColor: 'rgba(255,0,0,0.3)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                fill: 'origin',
            }
        ],
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ]
    };
  
    public lineChartOptions: ChartConfiguration['options'] = {
        elements: {
            line: {
                tension: 0.5
            }
        },
        scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            y: {
                position: 'left',
            },
            y1: {
                position: 'right',
                grid: {
                    color: 'rgba(255,0,0,0.3)',
                },
                ticks: {
                    color: 'red'
                }
            }
        },
        plugins: {
            legend: { display: true },
            annotation: {
                annotations: [
                    {
                        type: 'line',
                        scaleID: 'x',
                        value: 'March',
                        borderColor: 'orange',
                        borderWidth: 2,
                        label: {
                            display: true,
                            position: 'center',
                            color: 'orange',
                            content: 'LineAnno',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                ],
            }
        }
    };
  
    public lineChartType: ChartType = 'line';
  
    @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
    private static generateNumber(i: number): number {
        return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
    }
  
    public randomize(): void {
        for (let i = 0; i < this.lineChartData.datasets.length; i++) {
            for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
                this.lineChartData.datasets[i].data[j] = ChartjsComponent.generateNumber(i);
            }
        }
        this.chart?.update();
    }

}