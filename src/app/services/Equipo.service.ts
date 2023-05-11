import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquipoI } from '../interfaces/Equipo.interface';

@Injectable ({
  providedIn: 'root'
})
export class EquipoService {
  private apiURL: string = "http://localhost:6394/api/";
  private endPoint:string = this.apiURL + "Equipo/";

  constructor(private http: HttpClient){}

  getEquipo(): Observable<any>{
    return this.http.get(this.endPoint + "obtenerEquipo")
  }

  updateEquipo(equipo: EquipoI): Observable<any> {
    return this.http.put<EquipoI>(this.endPoint + "actualizarEquipo", equipo);
  }

  addEquipo(equipo: EquipoI): Observable<any> {
    return this.http.post<EquipoI>(this.endPoint + "insertarEquipo", equipo);
  }
}
