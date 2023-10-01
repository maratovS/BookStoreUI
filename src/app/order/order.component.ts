import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from '../api/services';
import { OrderEditComponent } from '../order-edit/order-edit.component';
import { TableViewComponent } from '../table-view/table-view.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: '../table-view/table-view.component.html',
  styleUrls: ['../table-view/table-view.component.scss']
})
export class OrderComponent extends TableViewComponent implements OnInit, AfterViewInit {
  override header = "Заказы";
  override objectName = "order";

  constructor(
    dialog: MatDialog,
    private router: Router,
    private service: OrderService) {
    super(dialog);
    this.columns = [
      { field: "id", header: "ID" },
      { field: "date", header: "Дата" },
      { field: "user.firstName", header: "Имя клиента" },
      { field: "actions", header: "Действия" }];
    this.headers = this.columns.map(x => x.field);
    this.headersFilters = this.headers.map((x, i) => x + '_' + i);
    this.actions = ['edit', 'delete']
  }

  override getParams(filter: string, sortBy: string, pageNumber: number, pageSize: number, sortDir: string) {
    return {
      sortBy: sortBy,
      filter: filter,
      pageNumber: pageNumber,
      pageSize: pageSize,
      sortDir: sortDir
    }
  }

  override getData(params: any) {
    if (localStorage.hasOwnProperty('user') && JSON.parse(localStorage.getItem('user')!).email != 'admin') {
      this.filterKeys['userId'] = JSON.parse(localStorage.getItem('user')!).id;
      //params.filter['userId'] = JSON.parse(localStorage.getItem('user')!).id;
    }
    params.filter = JSON.stringify(this.filterKeys);
    console.log("params", params)

    this.service.getOrderList(params)
      .subscribe(items => {
        //@ts-ignore
        this.dataSource = items.records;
        //@ts-ignore
        this.allRowsCount = items.totalRows;
        console.log("dataSource", this.dataSource)
      })
  }

  override create(): void {
    this.router.navigate(['orderEdit']);
  }

  override edit(row: any) {
    this.router.navigate(['orderEdit'],{ queryParams: {['id']: row.id}});
  }

  override deleteRow(param: any) {
    this.service.deleteOrderById(param).subscribe(() => {
      this.ngOnInit();
    });
  }
}
