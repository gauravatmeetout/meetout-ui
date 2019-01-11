import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { RoleService, Role } from '../../../../services/acl/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles:any=null;
  displayedColumns: string[] = ['slug', 'name', 'description', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private roleService:RoleService) {
    this.roleService.getAllRoles().subscribe(users => { this.roles = new MatTableDataSource<Role>(users); this.roles.sort = this.sort;console.log(this.roles.sort); });
   }

  ngOnInit() {
  }

}
