import { Injectable } from '@angular/core';
import { HttpService } from 'app/shared/services/http.service';
import { Observable } from 'rxjs/Observable';
import { MateriaGroup, Prematricula } from 'app/models/matricula.models';

@Injectable()
export class MateriaService {

  constructor(private _httpService: HttpService) { }

  public getMaterias(idEst): Observable<MateriaGroup[]> {
    return this._httpService
      .Get<MateriaGroup[]>(`materias/${idEst}`);
  }

  public getPensum(idEst): Observable<MateriaGroup[]> {
    return this._httpService
      .Get<MateriaGroup[]>(`materias/historial/${idEst}`);
  }

  public postPrematricula(data: Prematricula): Observable<any> {
    return this._httpService
      .Post<any, Prematricula>(`prematricula/`, data);
  }

}
