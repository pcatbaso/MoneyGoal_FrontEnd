import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { rolesI } from '../interfaces/roles.interface';

@Injectable ({
  providedIn: 'root'
})
export class RolesService {
  private apiURL: string = "http://localhost:6394/api/";
  private endPoint:string = this.apiURL + "roles/";

  constructor(private http: HttpClient){}

  getRoles(): Observable<any>{
    return this.http.get(this.endPoint + "obtenerRoles");
  }

  updateRol(rol: rolesI): Observable<any> {
    return this.http.put<rolesI>(this.endPoint + "actualizarRol", rol);
  }

  addRol(rol: rolesI): Observable<any> {
    return this.http.post<rolesI>(this.endPoint + "registrarRoles", rol);
  }
}
