import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class DataService{

  counter : number = 0;

  constructor(private httpClient : HttpClient,
              private authService : AuthService){}

  getRemoteData(){
    return this.httpClient.get("https://new-cnx.firebaseio.com/userdata.json?auth=" + this.authService.getToken())
  }

  getData(){
    return USER_DATA;
  }

}
