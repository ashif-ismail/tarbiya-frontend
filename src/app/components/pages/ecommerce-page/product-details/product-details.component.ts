import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'app-product-details',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, CarouselModule, MatTabsModule],
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

	constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    imageSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>"
		]
    }

}