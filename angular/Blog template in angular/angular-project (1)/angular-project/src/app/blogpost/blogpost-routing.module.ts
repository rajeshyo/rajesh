import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';

const routes: Routes = [
  {path: 'blog', component: BlogpostListComponent},
  //rest api call blog id
  {path: 'blog/:id', component: BlogpostDetailComponent}
 // {path: 'blogdetail', component: BlogpostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
