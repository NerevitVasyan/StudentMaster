import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShowMarksModel } from '@core/models/showMarksModel';

@Component({
  selector: 'app-showMarks',
  templateUrl: './showMarks.component.html',
  styleUrls: ['./showMarks.component.scss'],
})
export class ShowMarksComponent {
  constructor(
    public dialogRef: MatDialogRef<ShowMarksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShowMarksModel
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
