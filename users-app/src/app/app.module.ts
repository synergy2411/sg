import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UserImgComponent } from './users/user-img/user-img.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthService } from './services/auth.service';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { ChatService } from './chat/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserInfoComponent,
    UserImgComponent,
    HighlightDirective,
    BetterHighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule
  ],
  providers: [DataService, AuthService, LoginGaurdService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
