import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EditorChangeContent, EditorChangeSelection, QuillModule } from 'ngx-quill';
import Quill from 'quill';
import { EmailSidebarComponent } from '../email-sidebar/email-sidebar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-compose-email',
    standalone: true,
    imports: [RouterLink, EmailSidebarComponent, MatCardModule, MatButtonModule, MatMenuModule, MatFormFieldModule, MatInputModule, QuillModule],
    templateUrl: './compose-email.component.html',
    styleUrls: ['./compose-email.component.scss']
})
export class ComposeEmailComponent {

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