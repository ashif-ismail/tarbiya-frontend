import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-internal-error',
    standalone: true,
    imports: [RouterLink, MatButtonModule],
    templateUrl: './internal-error.component.html',
    styleUrls: ['./internal-error.component.scss']
})
export class InternalErrorComponent {}