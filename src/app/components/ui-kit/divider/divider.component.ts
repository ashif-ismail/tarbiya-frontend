import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'app-divider',
    standalone: true,
    imports: [MatCardModule, MatDividerModule, MatListModule],
    templateUrl: './divider.component.html',
    styleUrls: ['./divider.component.scss']
})
export class DividerComponent {}