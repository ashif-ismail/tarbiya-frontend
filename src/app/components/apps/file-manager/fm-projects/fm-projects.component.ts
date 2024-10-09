import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { FmSidebarComponent } from '../fm-sidebar/fm-sidebar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
    selector: 'app-fm-projects',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, FmSidebarComponent, MatCheckboxModule],
    templateUrl: './fm-projects.component.html',
    styleUrls: ['./fm-projects.component.scss']
})
export class FmProjectsComponent {}