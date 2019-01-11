import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router) {

  }

  canActivate():boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      alert();
      this.router.navigate(['auth']);
      return false;
    }
  }
}
