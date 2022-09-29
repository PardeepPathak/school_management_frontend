import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: TokenStorageService,private router:Router){

  }
  canActivate() {
    if(this.auth.IsLoggedIn()){
    return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}
