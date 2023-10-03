import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from '../api/services';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { TableViewComponent } from '../table-view/table-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: '../table-view/table-view.component.html',
  styleUrls: ['../table-view/table-view.component.scss']
})
export class BookComponent extends TableViewComponent implements OnInit, AfterViewInit {
  override header = "Книги";
  override objectName = "book";

  constructor (
    dialog: MatDialog,
    private routerLocal: Router,
    private service: BookService)
  {
    super(routerLocal, dialog);
    this.columns = [
      {field:"id",header:"ID"},
      {field:"title",header:"Название книги"},
      {field:"description",header:"Описание книги"},
      {field:"publicationYear",header:"Год публикации"},
      {field:"price",header:"Цена"},
      {field:"author.firstName",header:"Автор"},
      {field:"publisher.name",header:"Публикация"},
      {field:"condition.name",header:"Состояние"},
      {field:"category.name",header:"Категория"},
      {field:"actions",header:"Действия"}];
    this.headers = this.columns.map(x => x.field);
    this.headersFilters = this.headers.map((x, i) => x+'_'+i);
    this.actions = ['edit', 'delete']
  }  

  override getParams(filter: string, sortBy: string, pageNumber: number, pageSize: number, sortDir: string){
    return {
      sortBy: sortBy,
      filter: filter,
      pageNumber: pageNumber,
      pageSize: pageSize,
      sortDir: sortDir       
    }
  }

  override getData(params: any){

      console.log("params",params)

      this.service.getBookList(params)
      .subscribe(items => 
          {
            //@ts-ignore
            this.dataSource = items.records;
            // this.dataSource.map(element => console.log(element['author']['firstName'] + ' ' + element['author']['secondName']));
            this.dataSource.map(element => element['author.firstName'] += ' ' + element['author']['secondName']);
            //@ts-ignore
            this.allRowsCount = items.totalRows;
            console.log("dataSource",this.dataSource)
          })      
  }

  override create(): void {
    if(this.dialog.openDialogs.length==0) {
      const dialogRef = this.dialog.open(BookEditComponent, {
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        width: '450px',
        maxHeight: '550px',
        data: {
          name: ''
        },
      });

      dialogRef.afterClosed().subscribe(async result => {
        this.ngOnInit();
      });
    }
  }

  override edit(row: any){
    if(this.dialog.openDialogs.length==0) {
      const dialogRef = this.dialog.open(BookEditComponent, {
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        width: '450px',
        maxHeight: '550px',
        data: {item: row, action: 'edit'},
      });

      // @ts-ignore
      dialogRef.afterClosed().subscribe(async result => {
        this.ngOnInit();
      });
    }
  }

  override deleteRow(param: any){
    this.service.deleteBookById(param).subscribe(() =>
      {              
        this.ngOnInit();
      });
  }
}
