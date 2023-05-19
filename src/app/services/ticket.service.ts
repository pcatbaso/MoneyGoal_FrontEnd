import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ticketI } from '../interfaces/ticket.interface';

@Injectable ({
  providedIn: 'root'
})
export class TicketService {
  private apiURL: string = "http://localhost:6394/api/";
  private endPoint:string = this.apiURL + "ticket/";

  constructor(private http: HttpClient){}

  insertTicket(ticket: ticketI): Observable<any>{
    return this.http.post<ticketI>(this.endPoint + "regitrarTicket", ticket);
  }

  getTicketDisponibles(): Observable<any> {
    return this.http.get(this.endPoint + "ticketActivos");
  }
}
