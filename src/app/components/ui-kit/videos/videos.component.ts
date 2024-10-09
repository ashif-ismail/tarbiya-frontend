import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { YoutubePopupComponent } from './youtube-popup/youtube-popup.component';
import { VimeoPopupComponent } from './vimeo-popup/vimeo-popup.component';

@Component({
    selector: 'app-videos',
    standalone: true,
    imports: [MatCardModule, YoutubePopupComponent, VimeoPopupComponent],
    templateUrl: './videos.component.html',
    styleUrls: ['./videos.component.scss']
})
export class VideosComponent {}