import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { BasicAreaChartComponent } from './basic-area-chart/basic-area-chart.component';
import { BasicBoxplotChartComponent } from './basic-boxplot-chart/basic-boxplot-chart.component';
import { BasicBubbleChartComponent } from './basic-bubble-chart/basic-bubble-chart.component';
import { BasicCandlestickChartComponent } from './basic-candlestick-chart/basic-candlestick-chart.component';
import { BasicColumnChartComponent } from './basic-column-chart/basic-column-chart.component';
import { BasicHeatmapChartComponent } from './basic-heatmap-chart/basic-heatmap-chart.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { BasicPieChartComponent } from './basic-pie-chart/basic-pie-chart.component';
import { BasicPolarChartComponent } from './basic-polar-chart/basic-polar-chart.component';
import { BasicRadarChartComponent } from './basic-radar-chart/basic-radar-chart.component';
import { BasicRadialbarChartComponent } from './basic-radialbar-chart/basic-radialbar-chart.component';
import { BasicRangeAreaChartComponent } from './basic-range-area-chart/basic-range-area-chart.component';
import { BasicScatterChartComponent } from './basic-scatter-chart/basic-scatter-chart.component';
import { BasicTimelineChartComponent } from './basic-timeline-chart/basic-timeline-chart.component';
import { BasicTreemapChartComponent } from './basic-treemap-chart/basic-treemap-chart.component';
import { BrushLineChartComponent } from './brush-line-chart/brush-line-chart.component';
import { CircleRadialbarChartComponent } from './circle-radialbar-chart/circle-radialbar-chart.component';
import { CircularRadialbarChartComponent } from './circular-radialbar-chart/circular-radialbar-chart.component';
import { DashedLineChartComponent } from './dashed-line-chart/dashed-line-chart.component';
import { DatalabelsColumnChartComponent } from './datalabels-column-chart/datalabels-column-chart.component';
import { DatetimeAreaChartComponent } from './datetime-area-chart/datetime-area-chart.component';
import { DistributedColumnChartComponent } from './distributed-column-chart/distributed-column-chart.component';
import { GithubAreaChartComponent } from './github-area-chart/github-area-chart.component';
import { GradientLineChartComponent } from './gradient-line-chart/gradient-line-chart.component';
import { GradientRadialbarChartComponent } from './gradient-radialbar-chart/gradient-radialbar-chart.component';
import { LineAreaChartComponent } from './line-area-chart/line-area-chart.component';
import { LineColumnAreaChartComponent } from './line-column-area-chart/line-column-area-chart.component';
import { LineColumnChartComponent } from './line-column-chart/line-column-chart.component';
import { MissingAreaChartComponent } from './missing-area-chart/missing-area-chart.component';
import { MonochromePolarChartComponent } from './monochrome-polar-chart/monochrome-polar-chart.component';
import { MultipleRadarChartComponent } from './multiple-radar-chart/multiple-radar-chart.component';
import { MultipleRadialbarChartComponent } from './multiple-radialbar-chart/multiple-radialbar-chart.component';
import { MultipleYaxisChartComponent } from './multiple-yaxis-chart/multiple-yaxis-chart.component';
import { NegativeAreaChartComponent } from './negative-area-chart/negative-area-chart.component';
import { PieDonutChartComponent } from './pie-donut-chart/pie-donut-chart.component';
import { PieMonochromeChartComponent } from './pie-monochrome-chart/pie-monochrome-chart.component';
import { PolygonRadarChartComponent } from './polygon-radar-chart/polygon-radar-chart.component';
import { RangeColumnChartComponent } from './range-column-chart/range-column-chart.component';
import { RotatedLabelsColumnChartComponent } from './rotated-labels-column-chart/rotated-labels-column-chart.component';
import { SplineAreaChartComponent } from './spline-area-chart/spline-area-chart.component';
import { StackedAreaChartComponent } from './stacked-area-chart/stacked-area-chart.component';
import { StackedColumnChartComponent } from './stacked-column-chart/stacked-column-chart.component';
import { SteplineLineChartComponent } from './stepline-line-chart/stepline-line-chart.component';
import { StrokedRadialbarChartComponent } from './stroked-radialbar-chart/stroked-radialbar-chart.component';
import { SyncingLineChartComponent } from './syncing-line-chart/syncing-line-chart.component';
import { ZoomableLineChartComponent } from './zoomable-line-chart/zoomable-line-chart.component';

@Component({
    selector: 'app-apexcharts',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, BasicAreaChartComponent, BasicBoxplotChartComponent, BasicBubbleChartComponent, BasicCandlestickChartComponent, BasicColumnChartComponent, BasicHeatmapChartComponent, BasicLineChartComponent, BasicPieChartComponent, BasicPolarChartComponent, BasicRadarChartComponent, BasicRadialbarChartComponent, BasicRangeAreaChartComponent, BasicScatterChartComponent, BasicTimelineChartComponent, BasicTreemapChartComponent, BrushLineChartComponent, CircleRadialbarChartComponent, CircularRadialbarChartComponent, DashedLineChartComponent, DatalabelsColumnChartComponent, DatetimeAreaChartComponent, DistributedColumnChartComponent, GithubAreaChartComponent, GradientLineChartComponent, GradientRadialbarChartComponent, LineAreaChartComponent, LineColumnAreaChartComponent, LineColumnChartComponent, MissingAreaChartComponent, MonochromePolarChartComponent, MultipleRadarChartComponent, MultipleRadialbarChartComponent, MultipleYaxisChartComponent, NegativeAreaChartComponent, PieDonutChartComponent, PieMonochromeChartComponent, PolygonRadarChartComponent, RangeColumnChartComponent, RotatedLabelsColumnChartComponent, SplineAreaChartComponent, StackedAreaChartComponent, StackedColumnChartComponent, SteplineLineChartComponent, StrokedRadialbarChartComponent, SyncingLineChartComponent, ZoomableLineChartComponent],
    templateUrl: './apexcharts.component.html',
    styleUrls: ['./apexcharts.component.scss']
})
export class ApexchartsComponent {}