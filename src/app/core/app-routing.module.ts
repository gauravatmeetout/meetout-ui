import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';


const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    canActivate: [AuthService],
    loadChildren: "../modules/home/home.module#HomeModule"
  },
  {
    path: "user",
    loadChildren: "../modules/user/user.module#UserModule"
  },
  {
    path: "acl/role",
    loadChildren: "../modules/acl/role/role.module#RoleModule"
  },
  {
    path: "acl/permission",
    loadChildren: "../modules/acl/permission/permission.module#PermissionModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
