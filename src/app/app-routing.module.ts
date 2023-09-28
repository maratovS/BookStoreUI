import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublisherComponent } from './publisher/publisher.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';
import { BookComponent } from './book/book.component';
import { ConditionComponent } from './condition/condition.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'publisher' },
  { path: 'author', component: AuthorComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'condition', component: ConditionComponent },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
