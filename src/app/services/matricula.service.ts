import { Injectable, animate } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Prematricula, Programa, PrematriculaReporte } from 'app/models/matricula.models';
import { HttpService } from 'app/shared/services/http.service';

@Injectable()
export class MatriculaService {

  constructor(private _httpService: HttpService) { }

  public Get_Programas(idEstudiante: string):
    Observable<Programa[]> {
    return this._httpService
      .Get<Programa[]>(`programas?idEst=${idEstudiante}`);
  }

  public Get_Prematricula(idEstudiante: string,
    idPrograma: string):
    Observable<Prematricula> {
    return this._httpService
      .Get<Prematricula>(
      `prematricula/${idEstudiante}/${idPrograma}`);
  }

  public Get_PrematriculaReporte(usuarioDocente: string,
    idProg: string, anio: string, semestre: string):
    Observable<PrematriculaReporte> {
      return this._httpService
      .Get<PrematriculaReporte>(`prematricula/report
      /${usuarioDocente}/${idProg}/${anio}/${semestre}`);
  }

  public Get_Programa(id: string): Observable<Programa> {
    return this._httpService
      .Get<Programa>(`{programa?id=${id}`);
  }

}
