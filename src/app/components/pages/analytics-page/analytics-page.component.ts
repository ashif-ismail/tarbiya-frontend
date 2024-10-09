import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-analytics-page',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './analytics-page.component.html',
    styleUrl: './analytics-page.component.scss'
})
export class AnalyticsPageComponent {}