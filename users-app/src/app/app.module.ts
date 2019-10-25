import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatService } from './chat/chat.service';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { EmployeeModule } from './employee/employee.module';
import { HeaderComponent } from './header/header.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NationalCodePipe } from './pipes/national-code.pipe';
import { OverviewComponent } from './product/overview/overview.component';
import { ProductComponent } from './product/product.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { LoginGaurdService } from './services/login-gaurd.service';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { counterReducer } from './store/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { environment } from 'src/environments/environment';



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
    SpecificationComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({rootReducer : counterReducer}),
    StoreDevtoolsModule.instrument({
      logOnly : environment.production}),
    RouterModule.forRoot(APP_ROUTES),
    EmployeeModule
  ],
  providers: [DataService, AuthService, LoginGaurdService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
