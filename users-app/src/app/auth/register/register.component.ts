import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username  = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl("", [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationMark
  ]);

  cnfPassword = new FormControl("", [
    Validators.required,
    this.duplicatePassword
  ])


  registerForm : FormGroup;

  constructor(private fb : FormBuilder,
              private authService : AuthService) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password,
      cnfPassword : this.cnfPassword
    })
  }

  duplicatePassword(input : FormControl){
    // console.log(input)
    if(input.root && input.root['controls']){
      return input.value === input.root['controls'].password.value ? null : {duplicatePassword : true}
    }
  }

  hasExclamationMark(input : FormControl){
    const hasExclamation = input.value.indexOf("!") >= 0;
    return hasExclamation ? null : {needExclamation : true}
  }

  onRegister(){
    this.authService.register(
      this.registerForm.value.username,
      this.registerForm.value.password
      )
    // console.log(this.registerForm.value.email);
  }
  ngOnInit() {
  }

}
