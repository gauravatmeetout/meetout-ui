import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRoles(){
    return this.http.get<Role[]>('http://localhost:3000/acl/role/all').pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }

  getRole(id:number){
    return this.http.get<Role>(`http://localhost:3000/acl/role/get/${id}`).pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }

  addRole(role:Role){
    return this.http.post('http://localhost:3000/acl/role/add',role).pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }

  private handleError<T>() {
    return null;
  }
  private log() {

  }
}

export interface Role {
  _id: string;
  name: string;
  description: string;
  slug: string,
  users: Array<string>;
  permissions: Array<string>,
  created_date: string,
}