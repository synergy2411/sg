import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onLogin(f : NgForm){
    console.log("Email : " + f.value.email,
                "Password : " + f.value.password);
    this.authService.login(
      f.value.email,
      f.value.password
    )
  }
}
