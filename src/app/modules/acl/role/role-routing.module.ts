import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleListComponent } from '../../../components/acl/role/role-list/role-list.component';
import { RoleFormComponent } from '../../../components/acl/role/role-form/role-form.component';


const routes: Routes = [
  {
    path: '',
    component: RoleListComponent,
  },
  {
    path: "add",
    component: RoleFormComponent
  },
  {
    path: "edit/:slug",
    component: RoleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
