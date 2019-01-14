import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionListComponent } from '../../../components/acl/permission/permission-list/permission-list.component';
import { PermissionFormComponent } from '../../../components/acl/permission/permission-form/permission-form.component';
import { PermissionViewComponent } from '../../../components/acl/permission/permission-view/permission-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatCardModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatSortModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatNativeDateModule } from '@angular/material';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatSortModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    PermissionRoutingModule
  ],
  declarations: [
    PermissionListComponent,
    PermissionFormComponent,
    PermissionViewComponent
  ]
})
export class PermissionModule { }
