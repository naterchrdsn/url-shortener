import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule],
  template: `
  <h1 mat-dialog-title>{{data.title}}</h1>
  <div mat-dialog-content>
    <p>{{data.content}}</p> 
  </div>
  <div mat-dialog-actions>
    <button mat-button [mat-dialog-close]="data">OK</button>
  </div>




  `
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  // On close dialog, call the afterClosed event
  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}