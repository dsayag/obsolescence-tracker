import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ){}

  canActivate(): boolean {
    // Vérification de la valeur vrai du authenticationService
    if(this.authenticationService.isLoggedIn){
      return true;
    } 
      this.router.navigateByUrl('/login');
      console.log("You are not connected.");
      return false;
  }    
}

/* export class Authentication {  

  private logged = false;

  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }

  isAuthenticated(): boolean {
    return this.logged;
  } 
} 

export const AuthenticationGuard = () => {
  const auth = inject(Authentication);
  const router = inject(Router);

  if(!auth.isAuthenticated()) {
    router.navigateByUrl("/login")
    return false
  }
  return true
} */