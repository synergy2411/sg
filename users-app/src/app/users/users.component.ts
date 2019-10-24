import {
  Component, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, Input, SimpleChanges
} from '@angular/core';
import { IUser } from '../model/user';
import { DataService } from '../services/data.service';
// import { USER_DATA } from '../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: `./users.component.html`,
  styleUrls : [`./users.component.css`],
  // providers : [DataService]
})
export class UsersComponent
  // implements OnChanges,
  // OnInit,
  // DoCheck,
  // AfterContentInit,
  // AfterContentChecked,
  // AfterViewInit,
  // AfterViewChecked,
  // OnDestroy
  {

  @Input("title") title: string;

  users: IUser[];

  constructor(public dataService : DataService){}

  onIncrease(){
    this.dataService.counter++;
  }

  ngOnInit() {
    // this.users = USER_DATA;
    // this.users = this.dataService.getData();
    this.dataService.getRemoteData()
      .subscribe(response => {
        // this.users = <IUser[]>response['userdata'];
        this.users = <IUser[]>response;
      },
      err => console.log(err),
      () => console.log("Completion"),);
   }

  onMoreInfo(user: IUser) {
    alert(`${user.firstName} is working with ${user.company}!!`);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // console.log("ngOnChanges", changes);
  // }
  // ngOnInit() {
  //   // console.log("ngOnInit");
  //   this.users = USER_DATA;
  //  }
  // constructor(){
  //   console.log("constructor");
  // }
  // ngDoCheck() { console.log("ngDoCheck") }
  // ngAfterContentInit() { console.log("ngAfterContentInit") }
  // ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  // ngAfterViewInit() { console.log("ngAfterViewInit") }
  // ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  // ngOnDestroy() { console.log("ngOnDestroy") }

}
