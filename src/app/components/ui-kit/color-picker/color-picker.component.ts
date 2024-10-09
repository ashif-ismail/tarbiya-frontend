import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
    selector: 'app-color-picker',
    standalone: true,
    imports: [MatCardModule, ColorPickerModule],
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    color: any;
    color2: any;
    color3: any;
    color4: any;
    color5: any;
    color6: any;
    color7: any;
    color8: any;
    color9: any;
    color10: any;
    color11: any;

}