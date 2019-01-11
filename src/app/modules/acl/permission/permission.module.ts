import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionListComponent } from '../../../components/acl/permission/permission-list/permission-list.component';
import { PermissionFormComponent } from '../../../components/acl/permission/permission-form/permission-form.component';
import { PermissionViewComponent } from '../../../components/acl/permission/permission-view/permission-view.component';

@NgModule({
  imports: [
    CommonModule,
    PermissionRoutingModule
  ],
  declarations: [
    PermissionListComponent,
    PermissionFormComponent,
    PermissionViewComponent
  ]
})
export class PermissionModule { }
