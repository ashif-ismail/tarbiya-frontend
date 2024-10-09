import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { map, startWith } from 'rxjs/operators';
import { AutocompleteOverviewComponent } from './autocomplete-overview/autocomplete-overview.component';
import { DsAutocompleteComponent } from './ds-autocomplete/ds-autocomplete.component';
import { FilterAutocompleteComponent } from './filter-autocomplete/filter-autocomplete.component';
import { OgAutocompleteComponent } from './og-autocomplete/og-autocomplete.component';
import { PiAutocompleteComponent } from './pi-autocomplete/pi-autocomplete.component';
import { SimpleAutocompleteComponent } from './simple-autocomplete/simple-autocomplete.component';

@Component({
    selector: 'app-autocomplete',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, AsyncPipe, NgFor, MatAutocompleteModule, AutocompleteOverviewComponent, DsAutocompleteComponent, FilterAutocompleteComponent, OgAutocompleteComponent, PiAutocompleteComponent, SimpleAutocompleteComponent],
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

}