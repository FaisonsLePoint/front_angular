import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UAddComponent } from './u-add/u-add.component';
import { UDeleteComponent } from './u-delete/u-delete.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UIndexComponent } from './u-index/u-index.component';

const routes: Routes = [

  { path: '', component: UIndexComponent },
  { path: 'edit/:uid', component: UEditComponent },
  { path: 'add', component: UAddComponent },
  { path: 'delete/:uid', component: UDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
