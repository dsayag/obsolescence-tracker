import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {  
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  confirmpassword: string = "";
  address: string = "";
  city: string = "";
  state: string = "";
  zip: string = "";
  country: string = "";

  loginForm: NgForm;

  // Methode 1
  onSubmit(loginForm: NgForm) {
    if(this.loginForm.invalid) {
      console.log("Erreur de saisie", loginForm.value)
    } else {
      console.log("Formulaire ok", loginForm.value);    
    }    
  }
}
