import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-p-kanban-board',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatCheckboxModule],
    templateUrl: './p-kanban-board.component.html',
    styleUrls: ['./p-kanban-board.component.scss']
})
export class PKanbanBoardComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}