import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from 'app/account/services/user.service';
import { AdminService } from 'app/account/services/admin.service';

@Injectable()
export class DashboardGuardService {

  constructor(private _router: Router,
    private _usrService: UserService,
    private _adminService: AdminService) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // const value = true;
    return this._usrService.IsUserActive()
    || this._adminService.IsUserActive();
  }

}
