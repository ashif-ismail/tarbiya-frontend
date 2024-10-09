import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { AddRemoveArrayBasedDatasourceTableComponent } from './add-remove-array-based-datasource-table/add-remove-array-based-datasource-table.component';
import { AddRemoveObservableBasedDatasourceTableComponent } from './add-remove-observable-based-datasource-table/add-remove-observable-based-datasource-table.component';
import { ExpandableRowsTableComponent } from './expandable-rows-table/expandable-rows-table.component';
import { FilteringTableComponent } from './filtering-table/filtering-table.component';
import { FooterRowTableComponent } from './footer-row-table/footer-row-table.component';
import { MultipleHeaderFooterTableComponent } from './multiple-header-footer-table/multiple-header-footer-table.component';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { RippleTableComponent } from './ripple-table/ripple-table.component';
import { SelectionTableComponent } from './selection-table/selection-table.component';
import { SortingPaginationFilteringTableComponent } from './sorting-pagination-filtering-table/sorting-pagination-filtering-table.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component';
import { StickyColumnsTableComponent } from './sticky-columns-table/sticky-columns-table.component';
import { StickyFooterTableComponent } from './sticky-footer-table/sticky-footer-table.component';
import { StickyHeaderTableComponent } from './sticky-header-table/sticky-header-table.component';
import { StylingColumnsTableComponent } from './styling-columns-table/styling-columns-table.component';
import { TableDynamicallyColumnsDisplayedComponent } from './table-dynamically-columns-displayed/table-dynamically-columns-displayed.component';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [MatCardModule, MatTableModule, AddRemoveArrayBasedDatasourceTableComponent, AddRemoveObservableBasedDatasourceTableComponent, ExpandableRowsTableComponent, FilteringTableComponent, FooterRowTableComponent, MultipleHeaderFooterTableComponent, PaginationTableComponent, RippleTableComponent, SelectionTableComponent, SortingPaginationFilteringTableComponent, SortingTableComponent, StickyColumnsTableComponent, StickyFooterTableComponent, StickyHeaderTableComponent, StylingColumnsTableComponent, TableDynamicallyColumnsDisplayedComponent],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;

}