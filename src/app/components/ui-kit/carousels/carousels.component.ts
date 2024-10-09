import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-carousels',
    standalone: true,
    imports: [MatCardModule, CarouselModule],
    templateUrl: './carousels.component.html',
    styleUrls: ['./carousels.component.scss']
})
export class CarouselsComponent {

    imageSlides: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		dots: false,
		margin: 25,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>"
		]
    }
    imageSlides2: OwlOptions = {
        items: 1,
		nav: false,
		loop: true,
		margin: 25,
		dots: true,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>"
		]
    }
    imageSlides3: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		margin: 25,
		dots: false,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>"
		]
    }
    imageSlides4: OwlOptions = {
		nav: true,
		loop: true,
		dots: true,
		margin: 25,
		autoplay: false,
		smartSpeed: 1000,
		autoplayHoverPause: true,
        navText: [
			"<i class='flaticon-chevron-1'></i>",
			"<i class='flaticon-chevron'></i>"
		],
        responsive: {
            0: {
                items: 1
            },
            515: {
                items: 2
            },
            695: {
                items: 2
            },
            935: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    }

	constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}