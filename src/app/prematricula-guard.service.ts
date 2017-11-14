import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserService } from 'app/account/services/user.service';

@Injectable()
export class PrematriculaGuardService {

  constructor(private _router: Router,
    private _usrService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1 && !this._usrService.IsUserActive()) {
      this._router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }

}
