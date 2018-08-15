import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string,
  phoneNumber: string;
  password: string,
  address: string,
  dob: string,
  role: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<User[]>('http://localhost:3000/user/get-all').pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }
  getUser(id:number){
    return this.http.get<User>(`http://localhost:3000/user/get/${id}`).pipe(
      tap(_ => this.log()),
      catchError(this.handleError<any>())
    );
  }

  addUser(user:User){
    return this.http.post('http://localhost:3000/user/add',user).pipe(
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

