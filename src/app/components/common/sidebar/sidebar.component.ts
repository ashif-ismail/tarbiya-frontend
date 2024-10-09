import { Component } from '@angular/core';
import { ToggleService } from '../header/toggle.service';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [RouterLink, NgClass, NgScrollbarModule, MatExpansionModule, RouterLinkActive,CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    panelOpenState = false;

    isToggled = false;

    constructor(
        private toggleService: ToggleService,
        public themeService: CustomizerSettingsService
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggle() {
        this.toggleService.toggle();
    }

    toggleSidebarTheme() {
        this.themeService.toggleSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.themeService.toggleHideSidebarTheme();
    }

    isPrivilegedUser(): boolean {
        const role = localStorage.getItem('role');
        return role === 'privileged';
    }

}