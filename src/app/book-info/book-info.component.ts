import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDto } from '../api/models';

export interface DialogData {
  item: BookDto,
  action: string
};

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {

    }
  ngOnInit(): void {
    
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
