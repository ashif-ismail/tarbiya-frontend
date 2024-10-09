import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-pie-chartjs',
    standalone: true,
    imports: [BaseChartDirective],
    templateUrl: './pie-chartjs.component.html',
    styleUrls: ['./pie-chartjs.component.scss']
})
export class PieChartjsComponent {

    @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

    // Pie
    public pieChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    };
    public pieChartData: ChartData<'pie', number[], string | string[]> = {
        labels: [[ 'Download Sales' ], [ 'In Store Sales' ], 'Mail Sales' ],
        datasets: [{
            data: [ 300, 500, 100 ]
        }]
    };
    public pieChartType: ChartType = 'pie';

}