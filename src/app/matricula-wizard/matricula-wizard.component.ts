import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations';
import { Prematricula, Materia, MateriaGroup } from 'app/models/matricula.models';
import { ActivatedRoute } from '@angular/router';
import { MatriculaService } from 'app/services/matricula.service';
import { MateriaService } from 'app/services/materia.service';
import { MatriculaUtil } from 'app/util/matricula-util';
import { NotificationService } from 'app/shared/services/notification.service';

declare const $: any;

@Component({
  selector: 'app-matricula-wizard',
  templateUrl: './matricula-wizard.component.html',
  styleUrls: ['./matricula-wizard.component.css'],
  animations: [
    trigger('startAnimation', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-20%)'
        }),
        animate('150ms ease-in')
      ]),
      transition('* => void', [
        animate('160ms 0.1s ease-out', style({
          opacity: 0,
          transform: 'translateX(60%)'
        }))
      ])
    ])
  ]
})
export class MatriculaWizardComponent implements OnInit, AfterViewInit {
  private _estudianteId: string;
  private _programaId: string;
  public _materias: MateriaGroup[];
  public _selectedMaterias: any;
  private _callbacks: any;
  public getKeys = Object.keys;
  public _isLoading = true;
  public sendingData = false;
  public datafull = false;

  public _prematricula: Prematricula;

  public numElectivas = 0;
  public numFish = 0;
  public etica = false;
  public aff = false;

  constructor(private _route: ActivatedRoute,
    private _service: MatriculaService,
    private _materiaService: MateriaService,
    private _notificationService: NotificationService) {

  }

  ngOnInit() {
    this._isLoading = true;
    this._estudianteId = this._route.snapshot.paramMap.get('idEst');
    this._programaId = this._route.snapshot.paramMap.get('idProg');
    this.loadData();
    this._selectedMaterias = {};
    this._callbacks = {};
  }

  ngAfterViewInit() {
    $.wizardInit();
  }



  onMateriaSelected(info: any) {
    this.selectMateria(info.result as Materia, info.value,
      info.callback);
  }

  onMateriaUnselected(materia: Materia) {
    this.selectMateria(materia, false);
  }

  onSelectChanged(event: any, type: string) {
    const value = event.target.value;
    switch (type) {
      case 'numElectivas':
        this.numElectivas = parseInt(value);
        break;
      case 'numFish':
        this.numFish = parseInt(value);
        break;
      case 'etica':
        this.etica = value === 'true';
        break;
      case 'aff':
        this.aff = value === 'true';
        break;
      default:
        break;
    }
  }

  private async loadData() {
    await this.loadPrematricula();
    await this.loadMaterias();
  }

  private async loadMaterias() {

    this._materiaService.getMaterias(this._estudianteId)
      .subscribe(data => {
        this._materias = data;
        console.log('wizard Loaded');
        this._isLoading = false;
      }, err => {
        console.log('error loading data: ' + err);
      });
  }
  private async loadPrematricula() {
    this._service.Get_Prematricula(this._estudianteId,
      this._programaId)
      .subscribe(data => {
        this._prematricula = data;
        this._prematricula.fecha = new Date(data.fecha);
        this.datafull = this._prematricula.diligenciada;
        console.log('Prematricula loaded');
        console.log(data);
        console.log('date: ');
        console.log(this._prematricula.fecha);
      }, err => {
        console.log('error loading data: ' + err);
      });
  }

  private selectMateria(materia: Materia, value: boolean,
    callback: any = null) {
    if (value) {
      this._selectedMaterias[materia.id] = materia;
      this._callbacks[materia.id] = callback;
    } else {
      this._callbacks[materia.id]();
      delete this._callbacks[materia.id];
      delete this._selectedMaterias[materia.id];
    }
  }

  public ValidMatricula(): boolean {
    return Object.keys(this._selectedMaterias).length > 0;
  }

  public redoMatricula(): void {
    this.datafull = false;
    setTimeout(() => $.wizardInit(), 150);
  }

  public Next(): void {
    window.scrollTo(0, 0);
  }

  public SendMatricula(): void {
    this.sendingData = true;
    const datosPrematricula =
      new Prematricula(this._estudianteId, this._programaId,
        '', MatriculaUtil.ToArray<string>(this._selectedMaterias,
          item => item.id), this.numElectivas,
        this.numFish, this.etica, this.aff, true);
    console.log(datosPrematricula);

    this._materiaService.postPrematricula(datosPrematricula)
      .subscribe(data => {
        this.sendingData = false;
        this.datafull = true;
      }, err => {
        this.sendingData = false;
        this.datafull = false;
        this._notificationService.showNotification('top', 'right',
          `Error al enviar información. Intenta nuevamente :)`);
      });
  }

}
