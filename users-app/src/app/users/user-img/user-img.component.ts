import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from 'src/app/model/user';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{
  @Input('user') user :IUser;
  @Output('childEvent') childEvent = new EventEmitter<IUser>();

  onBtnClick(user : IUser){
    this.childEvent.emit(user);
  }
}
