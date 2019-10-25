import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  title = 'My Awesome App';
  showUsers : boolean = true;

  showAlert : string = "Template - <script>alert('Hello World')</script>"

  constructor(public dataService : DataService,
              public authService : AuthService,
              private sanitizer : DomSanitizer,
              private cdRef : ChangeDetectorRef){
                // this.sanitizer.
                
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
