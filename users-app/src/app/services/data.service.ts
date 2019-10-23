import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService{

  counter : number = 0;

  constructor(private httpClient : HttpClient){}

  getRemoteData(){
    return this.httpClient.get("./assets/model/user-data.json")
  }

  getData(){
    return USER_DATA;
  }

}
