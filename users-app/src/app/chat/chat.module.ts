import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const CHAT_ROUTES : Routes = [{
  path : "",
  component : ChatComponent
}]

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CHAT_ROUTES)
  ]
})
export class ChatModule { }
