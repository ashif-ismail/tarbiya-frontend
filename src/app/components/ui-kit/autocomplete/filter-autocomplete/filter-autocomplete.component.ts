import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-filter-autocomplete',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, FormsModule, AsyncPipe, NgFor],
    templateUrl: './filter-autocomplete.component.html',
    styleUrls: ['./filter-autocomplete.component.scss']
})
export class FilterAutocompleteComponent implements OnInit {

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