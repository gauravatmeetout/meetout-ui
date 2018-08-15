import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService,User } from '../../../services/user.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any = null;
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'email', 'action'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(users => { this.users = new MatTableDataSource<User>(users); this.users.sort = this.sort;console.log(this.users.sort); });
  }

  ngOnInit(){
    
  }

  applyFilter(filterValue: string) {
    this.users.filter = filterValue.trim().toLowerCase();
  }
}