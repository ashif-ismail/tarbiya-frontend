import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-scatter-chartjs',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './scatter-chartjs.component.html',
  styleUrls: ['./scatter-chartjs.component.scss']
})
export class ScatterChartjsComponent {

    // scatter
    public scatterChartOptions: ChartConfiguration['options'] = {
        responsive: true,
    };
    public scatterChartLabels: string[] = [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running' ];

    public scatterChartData: ChartData<'scatter'> = {
        labels: this.scatterChartLabels,
        datasets: [
            {
                data: [
                { x: 1, y: 1 },
                { x: 2, y: 3 },
                { x: 3, y: -2 },
                { x: 4, y: 4 },
                { x: 5, y: -3 },
                ],
                label: 'Series A',
                pointRadius: 10,
            },
        ]
    };
    public scatterChartType: ChartType = 'scatter';

}