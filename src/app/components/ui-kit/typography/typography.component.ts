import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-typography',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './typography.component.html',
    styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {}