import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Shared {
  constructor(private _http: HttpClient) {}

  getAll(endpoint: string) {
    return this._http.get(`${environment.baseUrl}/${endpoint}`);
  }

  getByName(endpoint: string, name: string) {
    return this._http.get(`${environment.baseUrl}/${endpoint}/${name}`);
  }
}
