import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from '../../../components/acl/role/role-list/role-list.component';
import { RoleFormComponent } from '../../../components/acl/role/role-form/role-form.component';
import { RoleViewComponent } from '../../../components/acl/role/role-view/role-view.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatCardModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatInputModule, MatGridListModule, MatSortModule, MatDatepickerModule, MatRadioModule, MatSelectModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
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
    RoleRoutingModule
  ],
  declarations: [
    RoleListComponent,
    RoleFormComponent,
    RoleViewComponent
  ]
})
export class RoleModule { }
