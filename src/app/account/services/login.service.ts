import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { Estudiante, Coordinador } from 'app/models/matricula.models';

import { LoginModel } from 'app/models/login.models';
import { HttpService } from 'app/shared/services/http.service';
import { UserService } from 'app/account/services/user.service';
import { AdminService } from 'app/account/services/admin.service';

@Injectable()
export class LoginService {

  constructor(private _service: HttpService,
    private _usrService: UserService,
    private _adminService: AdminService) { }

  public Login(model: LoginModel): Observable<Estudiante> {
    return this._service
      .Post<Estudiante, LoginModel>('account/login', model)
      .do(res => {
        this._usrService.SetUser(res);
      });
  }

  public LoginAdmin(model: LoginModel): Observable<Coordinador> {
    return this._service
      .Post<Coordinador, LoginModel>('account/login/admin', model)
      .do(res => {
        this._adminService.SetUser(res);
      });
  }

}
