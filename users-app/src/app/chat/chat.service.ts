import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class ChatService {

  private socket  :any;

  constructor() {
   this.socket =  io("http://localhost:3030");
  }

  sendMessage(chatterName : string, msg : string){
    this.socket.emit("msgToServer",chatterName, msg)
  }

  getMessage(){
    return Observable.create(observer => {
      this.socket.on("msgToClient", (chatterName, message) => {
        observer.next({chatterName, message});
      })
    })
  }
}
