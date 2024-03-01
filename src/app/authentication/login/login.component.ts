import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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
  //loginForm: NgForm;

  loginform: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  
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
    const { username, password } = this.loginform.value;
    this.auth.login(username, password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn){
          this.router.navigate(['/research-tracker']);
        } else {
          this.loginform.reset();
          this.router.navigate(['/login']);
        }        
      })
  }

  logout() {
    this.auth.logout();
    this.message = "You are not connected."
  }

  onSubmit() {
    const formData = this.loginform.value;
    console.log(formData);
    if(this.loginform.valid){
      this.login();
    }
  }
}
