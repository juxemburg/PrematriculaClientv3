import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'app/models/login.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'app/account/services/login.service';
import { Router } from '@angular/router';
import { NotificationService } from 'app/shared/services/notification.service';


declare const $: any;

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  public model: LoginModel;
  public loginForm: FormGroup;
  public isLoading = false;

  constructor(private _loginService: LoginService,
    private _formBuilder: FormBuilder, private _router: Router,
    private _notificationService: NotificationService) { }

  ngOnInit() {
    $.material.init();
    this.model = new LoginModel('', '');
    this.loginForm = this._formBuilder.group({
      'user': [null, Validators.compose([Validators.required])],
      'password': [null, Validators
        .compose([Validators.required,
        Validators.minLength(5)])],
      'validate': ''
    });
  }

  do_login(data: any) {
    this.model.usuario = data.user.toLowerCase();
    this.model.contrasena = data.password;
    this.isLoading = true;
    this._loginService.LoginAdmin(this.model)
      .subscribe(data => {
        this._router.navigate(['/dashboard/admin']);
        this.isLoading = false;
      },
      error => {
        this.loginForm.reset();
        this._notificationService.showNotification('top', 'right',
          `${error.statusText} Nombre de usario y/o contraseña erroneos`);
        this.isLoading = false;
      });
  }

}
