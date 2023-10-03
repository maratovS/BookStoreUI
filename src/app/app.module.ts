import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from './api/api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TableViewComponent } from './table-view/table-view.component';
import { MatSortModule } from '@angular/material/sort';
import { environment } from 'src/environments/environment';
import { PublisherComponent } from './publisher/publisher.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMatPaginatorIntl } from './common/customPaginator';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PublisherEditComponent } from './publisher-edit/publisher-edit.component';
import { DeleteComponent } from './common/delete/delete.component';
import { AuthorComponent } from './author/author.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { ConditionComponent } from './condition/condition.component';
import { ConditionEditComponent } from './condition-edit/condition-edit.component';
import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { OrderComponent } from './order/order.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OrderEditBookComponent } from './order-edit-book/order-edit-book.component';
import { BookInfoComponent } from './book-info/book-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    PublisherComponent,
    PublisherEditComponent,
    DeleteComponent,
    AuthorComponent,
    AuthorEditComponent,
    CategoryComponent,
    CategoryEditComponent,
    ConditionComponent,
    ConditionEditComponent,
    BookComponent,
    BookEditComponent,
    UserComponent,
    UserEditComponent,
    OrderComponent,
    OrderEditComponent,
    SignInComponent,
    OrderEditBookComponent,
    BookInfoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    ApiModule.forRoot({ rootUrl: environment.apiURL }),
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }, {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }, { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
