import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-menus',
    standalone: true,
    imports: [MatCardModule, MatMenuModule, MatIconModule, MatButtonModule],
    templateUrl: './menus.component.html',
    styleUrls: ['./menus.component.scss']
})
export class MenusComponent {}