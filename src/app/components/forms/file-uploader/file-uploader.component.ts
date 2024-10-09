import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FileUploadModule } from '@iplab/ngx-file-upload';

@Component({
    selector: 'app-file-uploader',
    standalone: true,
    imports: [RouterLink, MatCardModule, MatButtonModule, MatMenuModule, FileUploadModule],
    templateUrl: './file-uploader.component.html',
    styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    // File Uploader
    public multiple: boolean = false;

}