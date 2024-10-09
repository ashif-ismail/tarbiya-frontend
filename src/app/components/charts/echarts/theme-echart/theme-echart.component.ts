import { Component } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts, ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cool-theme';

@Component({
    selector: 'app-theme-echart',
    standalone: true,
    imports: [NgxEchartsDirective],
    templateUrl: './theme-echart.component.html',
    styleUrls: ['./theme-echart.component.scss'],
    providers: [
        provideEcharts(),
    ]
})
export class ThemeEchartComponent {

    theme: string | ThemeOption;
    coolTheme = CoolTheme;
    options: EChartsOption = {
        title: {
            left: '50%',
            text: 'Nightingale Rose Diagram',
            subtext: 'Mocking Data',
            textAlign: 'center',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            align: 'auto',
            bottom: 10,
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        calculable: true,
        series: [
            {
                name: 'area',
                type: 'pie',
                radius: [30, 110],
                roseType: 'area',
                data: [
                    { value: 10, name: 'rose1' },
                    { value: 5, name: 'rose2' },
                    { value: 15, name: 'rose3' },
                    { value: 25, name: 'rose4' },
                    { value: 20, name: 'rose5' },
                    { value: 35, name: 'rose6' },
                    { value: 30, name: 'rose7' },
                    { value: 40, name: 'rose8' }
                ]
            }
        ]
    };

}