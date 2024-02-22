import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {  
  username: string;
  password: string; 
  message: string = "You are not connected.";
  auth: AuthenticationService;
  loginForm: NgForm;
  
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    ){}

  ngOnInit(){
    this.auth = this.authenticationService;
  }

  setMessage() {
    if(this.auth.isLoggedIn){
      this.message = "You are connected.";      
    } else {
      this.message = "Incorrect login or password.";
    }
  }

  login() {
    this.message = 'Connection in progress...';
    this.auth.login(this.username, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn){
          this.router.navigate(['/research-app']);
        } else {
          this.password = "";
          this.router.navigate(['/login']);
        }        
      })
  }

  logout() {
    this.auth.logout();
    this.message = "You are not connected."
  }

  // Vérification que tous les champs requis sont rempli
  /* onSubmit() {
    if(this.loginForm.invalid) {
      console.log("Erreur de saisie", this.loginForm.value)
    } else {
      console.log("Formulaire ok", this.loginForm.value);    
    }    
  } */

}
