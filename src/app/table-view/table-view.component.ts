import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, tap } from 'rxjs';
import { DeleteComponent } from '../common/delete/delete.component';
import { SignInComponent } from '../sign-in/sign-in.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserDto } from '../api/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  columns = [
    { field: "id", header: "ID" },
    { field: "parentArticleType", header: "Родительский класс", parentField: "name" },
    { field: "action", header: "Действия" }];
  headers: string[] = this.columns.map(x => x.field);
  headersFilters = this.headers.map((x, i) => x + '_' + i);
  filtersModel: any[] = [];
  filterKeys: any = {};
  toggleFilters = false;
  dataSource: any[] = [];
  allRowsCount: number = 0;
  pageSize: number = 0;
  sortBy: string = "id";
  sortDir: string = "ASC";
  pageNumber: number = 0;
  header: string = "";
  actions: string[] = [];
  objectName: string = "";
  disableDownload: boolean = false;
  disableInfo: boolean = false;
  disableEdit: boolean = false;
  user: UserDto | undefined = undefined;

  constructor(
    public router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.calcPageSize();
    console.log(this.actions);
    if (localStorage.hasOwnProperty('user') && localStorage.getItem('user') != 'undefined') {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    console.log(this.user);
    console.log(this.user == undefined);
    this.getData(this.getParams('', this.sortBy, this.pageNumber, this.pageSize, this.sortDir));
  }

  getParams(filter: string, sortBy: string, pageNumber: number, pageSize: number, sortDir: string) {
    return {
    }
  }

  ngAfterViewInit() {
    if (this.paginator != undefined) {
      this.paginator.pageSize = this.pageSize;

      // reset the paginator after sorting
      this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

      // on sort or paginate events, load a new page
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          tap(() => {
            this.getData(this.getParams(JSON.stringify(this.filterKeys), this.sort.active, this.paginator.pageIndex, this.paginator.pageSize, this.sort.direction.toUpperCase()));
          }
          ))
        .subscribe();
    }
  }

  calcPageSize() {
    this.pageSize = Math.floor((window.innerHeight - 350) / 52);
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex;
  }

  getData(params: any) {
  }

  getText(element: any, column: any) {
    if (element[column.field] != null && column.parentField != null && column.field.toString().indexOf('.') == 0) {
      return element[column.field][column.parentField];
    }
    if (column.field.toString().split('.').length == 3) {
      if (column.parentField != null && element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]] != null
        && element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]][column.field.toString().split('.')[2]] != null) {
        return element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]][column.field.toString().split('.')[2]][column.parentField];
      } else {
        if (element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]] != null)
          return element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]][column.field.toString().split('.')[2]];
      }
    } else
      if (column.field.toString().indexOf('.') > 0) {
        if (column.parentField != null && element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]] != null) {
          return element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]][column.parentField];
        } else {
          if (element[column.field.toString().split('.')[0]] != null)
            return element[column.field.toString().split('.')[0]][column.field.toString().split('.')[1]];
        }
      } else {
        return element[column.field];
      }
    return '';
  }
  showCreate() {
    return true;
  }

  showAction(actionName: string, row: any) {
    if (actionName != 'info' && this.user == undefined) {
      return false;
    }
    if (actionName != 'info' && this.user != undefined && this.user.email != 'admin') {
      return false;
    }
    return this.actions.filter(item => item == actionName).length > 0;
  }

  columnWidth() {
    return (window.innerWidth - 350) / (this.columns.length - 2) - 30
  }

  create(): void {
    console.log("create");
  }

  refresh() {
    this.getData(this.getParams(JSON.stringify(this.filterKeys), this.sortBy, this.pageNumber, this.pageSize, this.sortDir));
    console.log(this.user);
  }

  searchColumns() {
    this.filtersModel.forEach((each, ind) => {
      if (each != null) {
        this.filterKeys[this.objectName + '.' + this.columns[ind].field] = each || "";
      }
    });
    console.log("filterKeys", this.filterKeys);
    this.filterData(this.filterKeys);
  }

  filterData(filterKeys: any[]) {
    this.getData(this.getParams(JSON.stringify(filterKeys), this.sortBy, this.pageNumber, this.pageSize, this.sortDir));
  }

  clearFilters() {
    this.filtersModel = [];
    this.filterKeys = {};
    //Call API without filters
  }

  edit(row: any) {
    console.log("edit", row);
  }

  info(row: any) {
    console.log('info', row);
  }

  delete(row: any) {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(DeleteComponent, {
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        width: '400px',
        maxHeight: '300px',
        data: {
          id: row.id
        },
      });

      // @ts-ignore
      dialogRef.afterClosed().subscribe(async result => {
        if (result != null) {
          console.log("result", result);
          if (result.event == "Delete" && result.id != 0) {
            let param = {
              id: Number(result.id)
            };
            this.deleteRow(param);
          }
        }
      });
    }
  }

  deleteRow(param: any) {
  }

  signIn() {
    const dialogRef = this.dialog.open(SignInComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
      width: '450px',
      maxHeight: '550px',
      data: {
      },
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.user = result;
      localStorage.setItem('user', JSON.stringify(result));
    });
  }

  signUp() {
    const dialogRef = this.dialog.open(UserEditComponent, {
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
      width: '450px',
      maxHeight: '550px',
      data: {
      },
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.user = result;
      localStorage.setItem('user', JSON.stringify(result));
      this.router.navigate([this.router.url]);
    });
  }

  signOut() {
    this.user = undefined;
    localStorage.removeItem('user');
    this.router.navigate(['book']);
  }
}