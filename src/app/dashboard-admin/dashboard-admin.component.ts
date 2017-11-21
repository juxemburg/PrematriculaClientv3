import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'app/services/matricula.service';
import { PrematriculaReporte, Coordinador, ReporteGroup } from 'app/models/matricula.models';
import { AdminService } from 'app/account/services/admin.service';
import { NotificationService } from 'app/shared/services/notification.service';
import { fail } from 'assert';

declare const $: any;

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  public reporte: PrematriculaReporte;
  public reporteMaterias: ReporteGroup[];
  public nombrePrograma: string;
  public numEstudiantes: number;
  public isLoading = true;
  private _user: Coordinador;
  private anio = '2017';
  private periodo = '2';

  constructor(private _dataService: MatriculaService,
    private _adminService: AdminService,
    private _notificationService: NotificationService) { }

  ngOnInit() {
    $.material.init();
    this.loadUser();
    this.loadData();
  }

  private loadUser(): void {
    this._user = this._adminService.GetUser();
  }
  private loadData(): void {
    this.isLoading = true;
    this._dataService.Get_PrematriculaReporte(this._user.idCoordinador,
      this._user.idPrograma, this.anio, this.periodo).subscribe(data => {
        this.reporte = data;
        this.reporteMaterias = this.reporte.reporteMaterias;
        this.nombrePrograma = this.reporte.nombrePrograma;
        this.numEstudiantes = this.reporte.numEstudiantes;
        // this.reporte.reporteMaterias = this.reporte.reporteMaterias
        //   .sort((e1, e2) => {
        //     return parseInt(e1.numSemestre) - parseInt(e2.numSemestre)
        //   });
        this.isLoading = false;
        console.log('data confirmada');
      },
      err => {
        this.isLoading = false;
        this._notificationService.showNotification('top', 'right',
          'No existen reportes para el periodo especificado', 'alert');
        console.log('error while getting the report');
      });
  }

  public onSelectChanged(event: any, type: string) {
    const value = event.target.value;
    switch (type) {
      case 'Anio':
        this.anio = '' + value;
        break;
      case 'Periodo':
        this.periodo = '' + value;
        break;
      default:
        break;
    }
    this.loadData();
  }

}
