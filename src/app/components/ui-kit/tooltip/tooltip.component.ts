import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TooltipShowHideDelayComponent } from './tooltip-show-hide-delay/tooltip-show-hide-delay.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-tooltip',
    standalone: true,
    imports: [MatCardModule, TooltipShowHideDelayComponent, MatButtonModule, MatTooltipModule],
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {}