import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) {

  }

  getAllPermission() {
    return this.http.get<Permission[]>('http://localhost:3000/acl/permission/all').pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }

  getPermission(id: number) {
    return this.http.get<Permission>(`http://localhost:3000/acl/permission/get/${id}`).pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }

  addPermission(permission: Permission) {
    return this.http.post('http://localhost:3000/acl/permission/add', permission).pipe(
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

export interface Permission {
  _id: string;
  name: string;
  description: string;
  slug: string,
  created_date: string,
}
