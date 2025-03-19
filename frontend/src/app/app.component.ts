import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppViewService } from './app-view.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  providers: [AppViewService],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('urlInputShorten') urlInputShorten!: ElementRef;
  @ViewChild('urlInputExpand') urlInputExpand!: ElementRef;

  protected shortenErrorMessage = '';
  protected expandErrorMessage = '';

  public constructor(private viewService: AppViewService) { }

  public onSubmitShorten() {
    this.shortenErrorMessage = '';

    const inputValue = this.urlInputShorten.nativeElement.value;

    try {
      // check if the input is a valid URL
      const url = new URL(inputValue);
      if (!url.protocol || !url.host) {
        throw new Error('Invalid URL');
      }

      // call viewService to shorten the URL
      this.viewService
        .shortenUrl(inputValue)
        .then((shortenedURL) => {
          const shortURLResponse = JSON.stringify(shortenedURL, null, 2);
          this.viewService.openModal('Shortened URL', shortURLResponse);
        });
    } catch (error) {
      // just doing a try catch for basic error handling for now
      this.shortenErrorMessage = String(error);
    }
  }

  public onSubmitExpand() {
    this.expandErrorMessage = '';

    const inputValue = this.urlInputExpand.nativeElement.value;

    try {
      // test for alphanumeric characters only
      if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
        throw new Error('Invalid input, only alphanumeric characters allowed');
      }

      // call viewService to expand the URL
      this.viewService
        .expandUrl(inputValue)
        .then((expandedURL) => {
          const expandedURLString = JSON.stringify(expandedURL, null, 2);
          this.viewService.openModal('Expanded URL', expandedURLString);
        });
    } catch (error) {
      // just doing a try catch for basic error handling for now
      this.expandErrorMessage = String(error);
    }
  }

}
