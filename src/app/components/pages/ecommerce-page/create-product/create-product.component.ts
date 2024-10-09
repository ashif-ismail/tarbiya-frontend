import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-create-product',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, NgxEditorModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, ReactiveFormsModule, NgFor],
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

    categories = new FormControl('');
    categoriesList: string[] = [
        'Design', 'UI/UX Design', 'Development', 'App', 'Develop', 'Angular'
    ];

    members = new FormControl('');
    membersList: string[] = [
        'Alvarado Turner', 'Evangelina Mcclain', 'Candice Munoz', 'Bernard Langley', 'Kristie Hall', 'Bolton Obrien'
    ];

    editor: Editor;
    html: '';
    toolbar: Toolbar = [
        // default value
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
        ['horizontal_rule', 'format_clear'],
    ];

    ngOnInit(): void {
        this.editor = new Editor();
    }

    // make sure to destory the editor
    ngOnDestroy(): void {
        this.editor.destroy();
    }

}