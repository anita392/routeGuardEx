import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginservService } from './loginserv.service';

@Injectable({
  providedIn: 'root',
})
export class CActivateGuard implements CanActivate {
  constructor(
    public rtr: Router,
    private auth: AuthService,
    private gn: LoginservService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.auth.isLoggedIn;
    // if (
    //   localStorage.getItem('uname') == null &&
    //   localStorage.getItem('pwd') == null
    // ) {
    //   alert('please enter credentials to login');
    //   this.rtr.navigate(['login']);
    //   return false;
    // } else {
    //   return true;
    // }
  }
}
