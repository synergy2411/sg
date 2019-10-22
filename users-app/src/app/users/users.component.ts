import {
  Component, OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, Input, SimpleChanges
} from '@angular/core';
import { IUser } from '../model/user';
import { USER_DATA } from '../model/mocks';

@Component({
  selector: 'app-users',
  templateUrl: `./users.component.html`,
  styleUrls : [`./users.component.css`]
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

  ngOnInit() {
    this.users = USER_DATA;
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
