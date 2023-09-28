import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublisherComponent } from './publisher/publisher.component';
import { AuthorComponent } from './author/author.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'publisher' },
  { path: 'author', component: AuthorComponent },
  { path: 'publisher', component: PublisherComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'condition', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
