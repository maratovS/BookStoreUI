import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../api/services';
import { TableViewComponent } from '../table-view/table-view.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: '../table-view/table-view.component.html',
  styleUrls: ['../table-view/table-view.component.scss']
})
export class UserComponent extends TableViewComponent implements OnInit, AfterViewInit {
  override header = "Пользователи";
  override objectName = "user";

  constructor (
    dialog: MatDialog,
    private routerLocal: Router,
    private service: UserService)
  {
    super(routerLocal, dialog);
    this.columns = [
      {field:"id",header:"ID"},
      {field:"firstName",header:"Имя"},
      {field:"lastName",header:"Фамилия"},
      {field:"patronymic",header:"Отчество"},
      {field:"email",header:"Эл. почта"},
      {field:"phoneNumber",header:"Тел .номер"},
      {field:"password",header:"Пароль"},
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

      this.service.getUserList(params)
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
      const dialogRef = this.dialog.open(UserEditComponent, {
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
      const dialogRef = this.dialog.open(UserEditComponent, {
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
    this.service.deleteUserById(param).subscribe(() =>
      {              
        this.ngOnInit();
      });
  }
}
