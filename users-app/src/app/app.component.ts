import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'My Awesome App';
  showUsers : boolean = true;

  constructor(public dataService : DataService,
              public authService : AuthService){

  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCdvobytUhRiqxfqA_QAE4SfjzvGni90Vw",
      authDomain: "new-cnx.firebaseapp.com"
    })
  }
  onIncrease(){
    this.dataService.counter++;
  }
}
