import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb : FormBuilder) {
    this.registerForm = this.fb.group({
      username : this.username,
      password : this.password,
      cnfPassword : this.cnfPassword
    })
  }

  duplicatePassword(input : FormControl){
    console.log(input)
    if(input.root && input.root['controls']){
      return input.value === input.root['controls'].password.value ? null : {duplicatePassword : true}
    }
  }

  hasExclamationMark(input : FormControl){
    const hasExclamation = input.value.indexOf("!") >= 0;
    return hasExclamation ? null : {needExclamation : true}
  }

  onRegister(){
    console.log(this.registerForm);
  }
  ngOnInit() {
  }

}
