import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { OrderDto } from '../api/models';
import { OrderService } from '../api/services';
import { lastValueFrom } from 'rxjs';
import { OrderEditBookComponent } from '../order-edit-book/order-edit-book.component';
import { TableViewComponent } from '../table-view/table-view.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['../table-view/table-view.component.scss']
})
export class OrderEditComponent extends TableViewComponent implements OnInit, AfterViewInit {
  override header = "Редактирование/ Создание заказа";
  override objectName = "order";
  form: FormGroup;

  allData: any[] = [];
  action = '';
  orderDto!: OrderDto;

  constructor(
    dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: OrderService,
    private route: ActivatedRoute) {
    super(dialog);
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
      { field: "action", header: "Действие" }];
    this.headers = this.columns.map(x => x.field);
    this.headersFilters = [];
    this.actions = ['edit', 'delete'];
    this.form = this.formBuilder.group({
      user: [],
      date: []
    });
  }


  override ngOnInit(): void {
    super.ngOnInit();
    this.allData = [];
    this.route.queryParams.subscribe(async params => {
      if (params['id'] != null) {
        this.action = params['action'];
        this.orderDto = await lastValueFrom(this.service.getOrderId({ id: Number(params['id']) }));
        console.log(this.orderDto);
        this.dataSource = this.orderDto.books!;
        this.allData = this.dataSource;
        this.form.patchValue({
          user: this.orderDto.user?.firstName,
          date: new Date().toISOString()
        })
      }
      else {
        this.form.patchValue({
          user: this.user?.firstName,
          date: new Date().toLocaleDateString()
        })
      }
    });
  }

  override getParams(filter: string, sortBy: string, pageNumber: number, pageSize: number, sortDir: string) {
    return {
      filter: filter,
      sortBy: sortBy,
      pageNumber: 0,
      pageSize: 10000,
      sortDir: sortDir
    }
  }

  override edit(row: any) {
    console.log(row);
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(OrderEditBookComponent, {
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        width: '650px',
        maxHeight: '550px',
        data: { item: row, action: 'edit' },
      });

      // @ts-ignore
      dialogRef.afterClosed().subscribe(async result => {
        console.log(result);
        this.dataSource.forEach(item => {
          if (result != null && item.article.id == result.data.article.id) {
            item.qty = result.data.qty;
          }
        });

      });
    }
  }

  override deleteRow(row: any) {
    let array: any[] = this.allData;
    array.forEach((element, index) => {
      if (element === row) array.splice(index, 1);
    });

    this.allData = [];
    this.allData = JSON.parse(JSON.stringify(array));
    this.dataSource = this.allData;
    this.allRowsCount = this.dataSource.length;
  }

  addBook() {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(OrderEditBookComponent, {
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        maxWidth: '90vw',
        maxHeight: '90vh',
        data: {
          name: 'unitAddOrder',
          type: 'unit'
        },
      });
      console.log(this.allData);

      dialogRef.afterClosed().subscribe(async result => {
        if (result === undefined) {
          return;
        }
        let array: any[] = this.allData;
        if (array.length == 0 ||
          array.filter(item => item.id == result.data.id).length == 0) {
          array.push(result.data);
        }
        this.allData = [];
        this.allData = JSON.parse(JSON.stringify(array));
        this.dataSource = this.allData;
        this.allRowsCount = this.dataSource.length;
      });
    }

  }

  cancel() {
    console.log("order");
    this.router.navigate(['order']);
  }

  async save() {
    if (this.action == 'edit') {
      this.orderDto.books = this.dataSource;
      console.log(this.orderDto);
      let param = {
        id: this.orderDto.id == undefined ? 0 : this.orderDto.id,
        body: this.orderDto
      };
      this.service.updateOrder(param).subscribe(result => {
        this.router.navigate(['order']);
      });
    } else {
      this.orderDto = {
        "id": undefined,
        "date": new Date().toISOString(),
        "user": this.user!,
        "books": this.dataSource
      };
      let param = {
        body: this.orderDto
      };
      this.service.postOrder(param).subscribe(result => {
        this.router.navigate(['order']);
      });
    }
  }

  get f() {
    return this.form.controls;
  }
}
