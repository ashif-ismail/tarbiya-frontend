import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [MatCardModule, MatPaginatorModule],
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {}