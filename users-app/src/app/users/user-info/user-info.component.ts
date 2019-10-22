import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class UserInfoComponent {

  @Input('user') user: IUser;

  dynamicClasses = { 'myborder': true, 'feature': false }

  onToggle(){
    this.dynamicClasses.myborder = !this.dynamicClasses.myborder;
    this.dynamicClasses.feature = !this.dynamicClasses.feature;
  }

}
