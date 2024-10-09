import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';
import { EditorChangeContent, EditorChangeSelection, QuillModule } from 'ngx-quill';
import Quill from 'quill';

@Component({
    selector: 'app-editors',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, NgxEditorModule, QuillModule],
    templateUrl: './editors.component.html',
    styleUrls: ['./editors.component.scss']
})
export class EditorsComponent {

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

    blurred = false
    focused = false

    created(event: Quill) {}

    changedEditor(event: EditorChangeContent | EditorChangeSelection) {}

    focus($event:any) {
        this.focused = true
        this.blurred = false
    }

    blur($event:any) {
        this.focused = false
        this.blurred = true
    }

}