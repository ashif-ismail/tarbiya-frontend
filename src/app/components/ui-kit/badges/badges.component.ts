import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
    selector: 'app-badges',
    standalone: true,
    imports: [MatCardModule, MatIconModule, MatButtonModule, MatBadgeModule],
    templateUrl: './badges.component.html',
    styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {

    hidden = false;
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }

}