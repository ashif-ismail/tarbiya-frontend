import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-email',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss']
})
export class EmailComponent {}