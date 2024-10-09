import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { EventsEchartComponent } from './events-echart/events-echart.component';
import { InitOptsEchartComponent } from './init-opts-echart/init-opts-echart.component';
import { InstanceEchartComponent } from './instance-echart/instance-echart.component';
import { LoadingEchartComponent } from './loading-echart/loading-echart.component';
import { MergeEchartComponent } from './merge-echart/merge-echart.component';
import { SimpleEchartComponent } from './simple-echart/simple-echart.component';
import { ThemeEchartComponent } from './theme-echart/theme-echart.component';

@Component({
    selector: 'app-echarts',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, EventsEchartComponent, InitOptsEchartComponent, InstanceEchartComponent, LoadingEchartComponent, MergeEchartComponent, SimpleEchartComponent, ThemeEchartComponent],
    templateUrl: './echarts.component.html',
    styleUrls: ['./echarts.component.scss']
})
export class EchartsComponent {}