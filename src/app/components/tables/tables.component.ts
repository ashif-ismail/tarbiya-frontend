import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-tables',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './tables.component.html',
    styleUrl: './tables.component.scss'
})
export class TablesComponent {}