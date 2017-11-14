import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Materia } from 'app/models/matricula.models';

@Component({
  selector: 'app-matricula-materia',
  templateUrl: './matricula-materia.component.html',
  styleUrls: ['./matricula-materia.component.css']
})
export class MatriculaMateriaComponent implements OnInit {

  @Input()
  public materia: Materia;

  @Output()
  public onMateriaSelected = new EventEmitter<any>();


  private _active: boolean;
  public btn_class: string;
  private baseClass = ' ';
  constructor() {
  }

  ngOnInit() {
    this._active = false;
    this.btn_class = 'btn btn-round btn-raised btn-white';
  }

  onClickEvent() {
    this._active = !this._active;
    this.setClass();
    const res = {
      value: this._active,
      result: this.materia,
      callback: () => {
        console.log(this._active);
        this._active = false;
        this.setClass();
      }
    };
    this.onMateriaSelected.emit(res);
  }
  setClass() {
    this.btn_class = (this._active) ? 'btn btn-round btn-raised btn-info' : 'btn btn-round btn-raised btn-white';
  }

}
