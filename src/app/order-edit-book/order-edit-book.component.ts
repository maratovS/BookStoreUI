import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BookDto } from '../api/models';
import { BookService } from '../api/services';
import { TableViewComponent } from '../table-view/table-view.component';
import { Router } from '@angular/router';

export interface DialogData {
  name: string,
  type: string
};

@Component({
  selector: 'app-order-edit-book',
  templateUrl: './order-edit-book.component.html',
  styleUrls: ['../table-view/table-view.component.scss']
})
export class OrderEditBookComponent extends TableViewComponent implements OnInit, AfterViewInit {
  override header = 'Добавить книгу';
  override objectName = 'book';
  selectedRow: any;

  constructor(public dialogRef: MatDialogRef<OrderEditBookComponent>,
    dialog: MatDialog,
    private service: BookService,
    private routerLocal: Router,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    super(routerLocal, dialog);
    this.columns = [
      { field: "id", header: "ID" },
      { field: "title", header: "Название книги" },
      { field: "description", header: "Описание книги" },
      { field: "publicationYear", header: "Год публикации" },
      { field: "price", header: "Цена" },
      { field: "author.firstName", header: "Автор" },
      { field: "publisher.name", header: "Публикация" },
      { field: "condition.name", header: "Состояние" },
      { field: "category.name", header: "Категория" }];
    this.headers = this.columns.map(x => x.field);
    this.headersFilters = this.headers.map((x, i) => x + '_' + i);
  }

  override getParams(filter: string, sortBy: string, pageNumber: number, pageSize: number, sortDir: string) {
    return {
      filter: filter,
      sortBy: sortBy,
      pageNumber: pageNumber,
      pageSize: pageSize,
      sortDir: sortDir
    }
  }

  override getData(params: any) {
    this.service.getBookList(params)
      .subscribe(items => {
        //@ts-ignore
        this.dataSource = items.records
        //@ts-ignore
        this.allRowsCount = items.totalRows
      })
  }



  add() {
    let book: BookDto = this.selectedRow;
    this.dialogRef.close({ data: book });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  select(item: any) {
    this.selectedRow = item;
  }
}
