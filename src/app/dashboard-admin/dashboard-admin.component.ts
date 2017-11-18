import { Component, OnInit } from '@angular/core';
import { MatriculaService } from 'app/services/matricula.service';
import { PrematriculaReporte, Coordinador } from 'app/models/matricula.models';
import { AdminService } from 'app/account/services/admin.service';
import { NotificationService } from 'app/shared/services/notification.service';

declare const $: any;

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  public reporte: PrematriculaReporte;
  public isLoading = true;
  private _user: Coordinador;

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
    this._dataService.Get_PrematriculaReporte(this._user.id,
      this._user.idPrograma, '2017', '2').subscribe(data => {
        this.reporte = data;
        this.reporte.reporteMaterias = this.reporte.reporteMaterias
          .sort((e1, e2) =>
            parseInt(e1.numSemestre) - parseInt(e2.numSemestre));
        console.log('data confirmada');
      },
      err => {
        this._notificationService.showNotification('top', 'right',
          'No existen reportes para el periodo especificado', 'alert');
        console.log('error while getting the report');
      });
  }

}
