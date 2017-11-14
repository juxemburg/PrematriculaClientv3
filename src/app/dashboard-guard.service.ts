import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'app/account/services/user.service';

@Injectable()
export class DashboardGuardService {

  constructor(private _router: Router,
    private _usrService: UserService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // const value = true;
    return this._usrService.IsUserActive();
  }

}
