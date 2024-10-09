import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule } from '@angular/material/tooltip';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};

@Component({
    selector: 'app-tooltip-show-hide-delay',
    standalone: true,
    imports: [MatButtonModule, MatTooltipModule],
    templateUrl: './tooltip-show-hide-delay.component.html',
    styleUrls: ['./tooltip-show-hide-delay.component.scss'],
    providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}]
})
export class TooltipShowHideDelayComponent {}