import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionListComponent } from '../../../components/acl/permission/permission-list/permission-list.component';
import { PermissionFormComponent } from '../../../components/acl/permission/permission-form/permission-form.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionListComponent,
  },
  {
    path: "add",
    component: PermissionFormComponent
  },
  {
    path: "edit/:slug",
    component: PermissionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
