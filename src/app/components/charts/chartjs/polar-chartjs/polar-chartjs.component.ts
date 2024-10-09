import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
    selector: 'app-polar-chartjs',
    standalone: true,
    imports: [BaseChartDirective],
    templateUrl: './polar-chartjs.component.html',
    styleUrls: ['./polar-chartjs.component.scss']
})
export class PolarChartjsComponent {

    // PolarArea
    public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
    public polarAreaChartData: ChartData<'polarArea'> = {
        labels: this.polarAreaChartLabels,
        datasets: [ {
            data: [ 300, 500, 100, 40, 120 ],
            label: 'Series 1'
        }]
    };
    public polarAreaLegend = true;

    public polarAreaChartType: ChartType = 'polarArea';

    // events
    public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
        console.log(event, active);
    }

    public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
        console.log(event, active);
    }

}