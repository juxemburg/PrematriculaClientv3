import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { Estudiante } from 'app/models/matricula.models';

import { LoginModel } from 'app/models/login.models';
import { HttpService } from 'app/shared/services/http.service';
import { UserService } from 'app/account/services/user.service';

@Injectable()
export class LoginService {

  constructor(private _service: HttpService,
    private _usrService: UserService) { }

  public Login(model: LoginModel): Observable<Estudiante> {
    return this._service
      .Post<Estudiante, LoginModel>('account/login', model)
      .do(res => {
        console.log('recieved login:');
        console.log(res);
        this._usrService.SetUser(res);
      });
  }

}
