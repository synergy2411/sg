import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    HighlightDirective,
    BetterHighlightDirective,
    PipeDemoComponent,
    NationalCodePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
