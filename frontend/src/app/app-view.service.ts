import { Injectable } from "@angular/core";
import { ExpandResponse, ShortenResponse } from "./app.models";
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from "./dialog.component";

@Injectable()
export class AppViewService {

    constructor(private readonly dialog: MatDialog) {

    }

    shortenUrl(originalUrl: string): Promise<ShortenResponse> {
        return fetch('/api/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ original_url: originalUrl }),
        })
        .then(response => response.json());
    }

    expandUrl(shortCode: string): Promise<ExpandResponse> {
        return fetch(`/api/${shortCode}`)
        .then(response => response.json());
    }

    openModal(title: string, content: string) {
        this.dialog.open(DialogComponent, {
            data: { title, content }
        });
    }
}