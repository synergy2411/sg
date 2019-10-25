import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  myMsg : string = "";
  constructor(private chatService : ChatService) { }
  messageStack : any []= [];
  allMessages : string = "";
  chatterName : string = "";
  ngOnInit() {
    this.chatterName = prompt("Name Please...");
   this.chatService.getMessage()
    .subscribe(response => {
      // this.messageStack.push(message);
      this.allMessages += response.chatterName + " : "
                          + response.message + "\n";
    })
  }

  onSend(){
    this.chatService.sendMessage(this.chatterName,this.myMsg)
    this.myMsg = "";
  }

}
