import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { UsersComponent } from './users/users.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';

export const APP_ROUTES: Routes = [{
  path : "",                        //http://localhost:4200
  redirectTo : "login",
  pathMatch : "full"
},{
  path : "login",                   //http://localhost:4200/login
  component : LoginComponent
}, {
  path : "register",                //http://localhost:4200/register
  component : RegisterComponent
}, {
  path : "users",
  component : UsersComponent,
  canActivate : [LoginGaurdService]
}, {
  path : "observable",
  component : ObservableDemoComponent
}, {
  path : "pipe",
  component : PipeDemoComponent
},{
  path : "product",
  component : ProductComponent,
  children : [{
    path : "overview/:id/:category",
    component : OverviewComponent
  }, {
    path : "spec",
    component : SpecificationComponent
  }]
},{
  path : "employee",
  component : NewEmployeeComponent
},{
  path : "lazy",
  loadChildren : "./lazy/lazy.module#LazyModule"               // "path/to/module/file/ModuleFileName#ModuleClassName"
},{
  path : "chat",
  loadChildren : "./chat/chat.module#ChatModule"
},{
  path : "**",                      //http://localhost:4200/doesnotexist
  redirectTo : "login",
  pathMatch : "full"
}]
