import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { map, startWith } from 'rxjs/operators';

export interface User {
    name: string;
}

@Component({
    selector: 'app-ds-autocomplete',
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, FormsModule, AsyncPipe, NgFor],
    templateUrl: './ds-autocomplete.component.html',
    styleUrls: ['./ds-autocomplete.component.scss']
})
export class DsAutocompleteComponent implements OnInit {

    myControl = new FormControl<string | User>('');
    options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
    filteredOptions: Observable<User[]>;

    ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
            const name = typeof value === 'string' ? value : value?.name;
            return name ? this._filter(name as string) : this.options.slice();
        }),
        );
    }

    displayFn(user: User): string {
        return user && user.name ? user.name : '';
    }

    private _filter(name: string): User[] {
        const filterValue = name.toLowerCase();

        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

}