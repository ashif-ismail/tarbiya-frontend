import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
	selector: 'app-sales-by-locations',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatMenuModule, MatButtonModule, MatProgressBarModule],
	templateUrl: './sales-by-locations.component.html',
	styleUrls: ['./sales-by-locations.component.scss']
})
export class SalesByLocationsComponent {}