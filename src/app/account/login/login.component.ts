import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginModel } from 'app/models/login.models';

import { Router } from '@angular/router';
import { LoginService } from 'app/account/services/login.service';

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
    constructor(private _loginService: LoginService,
      private _fb: FormBuilder, private _router: Router) { }
    ngOnInit() {
      $.material.init();
      this._model = new LoginModel('', '');
      this._loginForm = this._fb.group({
        'user': [null, Validators.compose([Validators.required])],
        'password': [null, Validators
          .compose([Validators.required,
            Validators.minLength(5)])],
        'validate' : ''
      });
    }
    do_login(data: any) {
      this._model.usuario = data.user;
      this._model.contrasena = data.password;
      this._loginService.Login(this._model)
        .subscribe(data => {
          this._router.navigate(['/dashboard']);
         },
        error => {
          alert('Datos incorrectos!');
         });
    }
  }