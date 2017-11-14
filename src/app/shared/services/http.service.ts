import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  private _baseUrl = 'http://localhost:8080/unicacua-prematricula/api';
  // private _baseUrl = 'https://94953266-40c4-4521-a736-53ea63e12758.mock.pstmn.io/unicacua-prematricula/api';
  constructor(private _http: Http) { }

  public Get<T>(subUrl: string): Observable<T> {
    const url = this.getUrl(subUrl);
    return this._http.get(url)
      .map(res => res.json() as T);
  }

  public Post<T, U>(subUrl: string, data: U): Observable<T> {
    const url = this.getUrl(subUrl);
    return this._http.post(url, data)
      .map(res => res.json() as T);
  }
  private getUrl(subUrl: string): string {
    return `${this._baseUrl}/${subUrl}`;
  }

}
