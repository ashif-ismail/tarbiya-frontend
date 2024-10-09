import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-ui-kit',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './ui-kit.component.html',
    styleUrl: './ui-kit.component.scss'
})
export class UiKitComponent {}