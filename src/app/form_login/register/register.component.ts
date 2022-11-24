import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {SignUpForm} from "../../model/SignUpForm";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
form: any = {};
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  hide = true;
  signUpForm: SignUpForm;
  status = 'Please fill in the form to create account !!!';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.signUpForm = new SignUpForm(
        this.form.name,
        this.form.username,
        this.form.email,
        this.form.password
    );
    this.authService.signup(this.signUpForm).subscribe(data =>{
      console.log("data --->",data);
      if (data.message[0] === 'username-existed'){
        this.status = 'username is existed!!!'
        return;
      }
      if (data.message[0] === 'email-existed'){
        this.status = 'email is existed!!!'
        return;
      }
      if (data.message[0]==='email-invalid'){
        console.log('vao day khong')
        this.status = 'email invalid! Ex: chinh@gmail.com';
        return;
      }
      if (data.message[0] === 'signup-success'){
        this.status = 'create account success!!!'
      }
    });
  }
}
