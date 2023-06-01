import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ticketI } from '../interfaces/ticket.interface';

@Injectable ({
  providedIn: 'root'
})
export class ApuestaService {
  private apiURL: string = "http://localhost:6394/api/";
  private endPoint:string = this.apiURL + "apuestaUser/";

  constructor(private http: HttpClient){}

  addApuesta(apuesta: ticketI): Observable<any> {
    return this.http.post<ticketI>(this.endPoint + "registrarApuestaUsuario", apuesta);
  }
}
