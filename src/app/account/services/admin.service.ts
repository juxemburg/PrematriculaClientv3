import { Injectable } from '@angular/core';
import { Coordinador } from 'app/models/matricula.models';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'app/account/services/user.service';
import { useAnimation } from '@angular/core/src/animation/dsl';

@Injectable()
export class AdminService {

  private static _user: Coordinador;
  constructor(private _cookieService: CookieService) {
    this.loadUser();
  }
  loadUser(): void {
    if (this._cookieService.check('pm-admin')) {
      AdminService._user =
        JSON.parse(this._cookieService.get('pm-admin')) as Coordinador;
    }
  }
  

  public IsUserActive():boolean {
    return AdminService._user !== null;
  }

  public SetUser(user: Coordinador): void {
    AdminService._user = user;
    this._cookieService.set('pm-admin', JSON.stringify(user));
  }

  public RemoveUser(): void {
    AdminService._user = null;
    this._cookieService.deleteAll('pm');
  }

  public GetUser(): Coordinador {
    return AdminService._user;
  }

}
