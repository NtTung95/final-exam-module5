import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListBookComponent} from './list-book/list-book.component';
import {DetailBookComponent} from './detail-book/detail-book.component';
import {CreateBookComponent} from './create-book/create-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: 'books',
    component: ListBookComponent,
  },
  {
    path: 'detail-book',
    component: DetailBookComponent,
  },
  {
    path: 'create-book',
    component: CreateBookComponent,
  },
  {
    path: 'edit-book',
    component: EditBookComponent,
  },
  {
    path: 'delete-book',
    component: DeleteBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
