import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TableViewComponent } from '../table-view/table-view.component';
import { MatDialog } from '@angular/material/dialog';
import { PublisherService } from '../api/services';
import { PublisherEditComponent } from '../publisher-edit/publisher-edit.component';

@Component({
  selector: 'app-publisher',
  templateUrl: '../table-view/table-view.component.html',
  styleUrls: ['../table-view/table-view.component.scss']
})
export class PublisherComponent extends TableViewComponent implements OnInit, AfterViewInit{

  override header = "Публикации";
  override objectName = "publisher";

  constructor (
    dialog: MatDialog,
    private service: PublisherService)
  {
    super(dialog);
    this.columns = [
      {field:"id",header:"ID"},
      {field:"name",header:"Название публикации"},
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

      this.service.getPublisherList(params)
      .subscribe(items => 
          {
            //@ts-ignore
            this.dataSource = items.records;
            //@ts-ignore
            this.allRowsCount = items.totalRows;
            console.log("dataSource",this.dataSource)
          })      
  }

  override create(): void {
    if(this.dialog.openDialogs.length==0) {
      const dialogRef = this.dialog.open(PublisherEditComponent, {
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
      const dialogRef = this.dialog.open(PublisherEditComponent, {
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
    this.service.deletePublisherById(param).subscribe(() =>
      {              
        this.ngOnInit();
      });
  }

}
