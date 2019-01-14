import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { PermissionService, Permission } from '../../../../services/acl/permission.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {

  permission:any=null;
  displayedColumns: string[] = ['slug', 'name', 'description', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private permissionService:PermissionService) {
    this.permissionService.getAllPermission().subscribe(permissions => { this.permission = new MatTableDataSource<Permission>(permissions); this.permission.sort = this.sort;console.log(this.permission.sort); });
   }

  ngOnInit() {
  }

}
