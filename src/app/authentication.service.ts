import { Injectable } from "@angular/core";
import { Observable, delay, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = (name == "admin" && password == "admin");
    console.log("isLoggedIn :", isLoggedIn);    
    if(isLoggedIn === true){
      console.log("Authentication correct");
    } else{
      console.log("Authentication incorrect");
    }
    return of(isLoggedIn).pipe(
      delay(1000),
      tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))      
    );    
  }

  logout() {
    this.isLoggedIn = false;
    console.log("Authentication error");
  }
}