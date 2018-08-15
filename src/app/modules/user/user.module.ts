import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from '../../components/user/user-list/user-list.component';

import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/core/shared.module';
import { UserFormComponent } from '../../components/user/user-form/user-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule,MatIconModule,MatDatepickerModule,MatRadioModule,MatSelectModule, MatNativeDateModule } from '@angular/material';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
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
    MatNativeDateModule
  ],
  declarations: [
    UserListComponent,
    UserFormComponent
  ]
})
export class UserModule { }
