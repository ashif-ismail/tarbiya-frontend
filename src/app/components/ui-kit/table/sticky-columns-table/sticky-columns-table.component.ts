import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-sticky-columns-table',
    standalone: true,
    imports: [MatTableModule, MatIconModule],
    templateUrl: './sticky-columns-table.component.html',
    styleUrls: ['./sticky-columns-table.component.scss']
})
export class StickyColumnsTableComponent {

    displayedColumns = [
        'name',
        'position',
        'weight',
        'symbol',
        'position',
        'weight',
        'symbol',
        'action',
        'star',
    ];
    dataSource = ELEMENT_DATA;

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: 'Action'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: 'Action'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: 'Action'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: 'Action'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: 'Action'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: 'Action'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: 'Action'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: 'Action'},
];