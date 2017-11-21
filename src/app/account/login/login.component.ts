import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from 'app/models/login.models';

import { Router } from '@angular/router';
import { LoginService } from 'app/account/services/login.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { UserService } from 'app/account/services/user.service';
import { AdminService } from 'app/account/services/admin.service';

declare const $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _model: LoginModel;
  public _loginForm: FormGroup;
  private _post: any;
  public isLoading = false;
  constructor(private _loginService: LoginService,
    private _fb: FormBuilder, private _router: Router,
    private _notificationService: NotificationService,
    private _usrService: UserService,
    private _adminService: AdminService) { }
  ngOnInit() {
    $.material.init();
    this._usrService.RemoveUser();
    this._adminService.RemoveUser();
    this._model = new LoginModel('', '');
    this._loginForm = this._fb.group({
      'user': [null, Validators.compose([Validators.required])],
      'password': [null, Validators
        .compose([Validators.required,
        Validators.minLength(5)])],
      'validate': ''
    });
  }
  do_login(data: any) {
    this._model.usuario = data.user.toLowerCase();
    this._model.contrasena = data.password;
    this.isLoading = true;
    this._loginService.Login(this._model)
      .subscribe(data => {
        this._router.navigate(['/dashboard']);
        this.isLoading = false;
      },
      error => {
        this._loginForm.reset();
        this._notificationService.showNotification('top', 'right'
          , `${error.statusText} 
          Nombre de usario y/o contraseña erroneos`);
        this.isLoading = false;
      });
  }
}
