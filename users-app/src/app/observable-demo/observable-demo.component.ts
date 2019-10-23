import { Component, OnInit } from '@angular/core';
import { interval, Subscription, } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  unSub: Subscription;
  obsSub: Subscription;

  obs = Observable.create(observer => {
    setTimeout( () => {
      observer.next("First Package.")
    }, 1000);
    setTimeout( () => {
      observer.next("Second Package.")
    }, 2000);
    setTimeout( () => {
      observer.next("Third Package.")
    }, 4000);
    setTimeout( () => {
      // observer.error(new Error("Something Bad Happened"));
    }, 5000);
    setTimeout( () => {
      observer.complete();
    }, 6000);
  })

  onSubscribe(){
    this.obsSub = this.obs.subscribe(
      response=> console.log(response),
      err => console.log(err),
      () => console.log("COMPLETED")
      )
  }
  onUnsubscribe(){
    this.obsSub.unsubscribe();
  }

  constructor() {
    // let source = interval(1000)
    // this.unSub = source.subscribe(value => console.log(value));
  }

  onStop() {
    this.unSub.unsubscribe();
  }

  ngOnInit() {
  }

}
