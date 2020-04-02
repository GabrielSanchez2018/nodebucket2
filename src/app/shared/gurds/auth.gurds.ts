/*
*============================
*Author: Richard Krasso
*Edited by: Gabriel Sanchez
*Date: 3/10/2020
*=============================
*/

import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class AuthGurd implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sessionUser = this.cookieService.get('session_user');
    const sessionName = this.cookieService.get('name_user');

    // is the cookie is present, allow the user to access the app.
    if(sessionUser){
      return true;
    }
    if (sessionName){
      return true;
    }
    else{
      //otherwise, the user is not signed into the system and should be redirected to the sign-in componnet
      this.router.navigate(['/session/login']);
      return false;
    }
  }
}
