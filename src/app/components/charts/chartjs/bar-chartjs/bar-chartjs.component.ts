import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-bar-chartjs',
    standalone: true,
    imports: [BaseChartDirective],
    templateUrl: './bar-chartjs.component.html',
    styleUrls: ['./bar-chartjs.component.scss']
})
export class BarChartjsComponent {

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    public barChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        scales: {
            x: {},
            y: {
                min: 10
            }
        },
        plugins: {
            legend: {
                display: true,
            }
        }
    };
    public barChartType: ChartType = 'bar';
    public barChartData: ChartData<'bar'> = {
        labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
        datasets: [
            { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
            { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
        ]
    };

}