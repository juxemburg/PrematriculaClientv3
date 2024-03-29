import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginService } from 'app/account/services/login.service';
import { UserService } from 'app/account/services/user.service';
import { SharedModule } from 'app/shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from 'app/account/login/login.component';
import { AdminService } from 'app/account/services/admin.service';
import { LoginAdminComponent } from './login-admin/login-admin.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LoginAdminComponent
  ],
  exports: [],
  providers: [
    LoginService,
    UserService,
    AdminService,
    CookieService
  ]
})
export class AccountModule { }
