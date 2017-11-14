import { Component, OnInit } from '@angular/core';
import { Estudiante, Programa } from 'app/models/matricula.models';
import { UserService } from 'app/account/services/user.service';
import { ProgramaService } from 'app/services/programa.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public _programas: Programa[];
  public est: Estudiante;

  constructor(private _service: ProgramaService,
    private _usrService: UserService) { }

  ngOnInit() {
    this.loadInfo();
  }

  private loadInfo() {
    this.est = this._usrService.GetUser();
    console.log('loaded user:');
    console.log(this.est.programas);
    this._programas = this.est.programas;
  }

}
