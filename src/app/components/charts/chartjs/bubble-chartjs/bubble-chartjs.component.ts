import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-bubble-chartjs',
    standalone: true,
    imports: [BaseChartDirective],
    templateUrl: './bubble-chartjs.component.html',
    styleUrls: ['./bubble-chartjs.component.scss']
})
export class BubbleChartjsComponent {

    public bubbleChartOptions: ChartConfiguration['options'] = {
        scales: {
            x: {
                min: 0,
                max: 30,
                ticks: {}
            },
            y: {
                min: 0,
                max: 30,
                ticks: {}
            },
        }
    };
    public bubbleChartType: ChartType = 'bubble';
    public bubbleChartLegend = true;
    public bubbleChartData: ChartData<'bubble'> = {
        labels: [],
        datasets: [ {
            data: [
                { x: 10, y: 10, r: 10 },
                { x: 15, y: 5, r: 15 },
                { x: 26, y: 12, r: 23 },
                { x: 7, y: 8, r: 8 },
            ],
            label: 'Series A',
            backgroundColor: [
                'red',
                'green',
                'blue',
                'purple',
                'yellow',
                'brown',
                'magenta',
                'cyan',
                'orange',
                'pink'
            ],
            borderColor: 'blue',
            hoverBackgroundColor: 'purple',
            hoverBorderColor: 'red',
        }]
    };

}