import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-accordion',
    standalone: true,
    imports: [MatCardModule, CdkAccordionModule, NgIf, NgFor],
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
    expandedIndex = 0;

}