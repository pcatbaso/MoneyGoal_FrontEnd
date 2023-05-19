import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.component.html',
  styleUrls: ['./apuesta.component.scss']
})
export class ApuestaComponent {

  listaTickets: any;
  local = "local_";
  empate = "empate_";
  visita = "visita_";
  check = "check_";

  constructor(
    private _ticketService: TicketService,
  ){}

  ngOnInit(){
    this.ticketDisponibles();
  }

  ticketDisponibles(){
    this._ticketService.getTicketDisponibles()
    .subscribe({
      next: resp => {
        if(resp[0] === "OK"){
          this.listaTickets = resp[1];
          console.log("listaTickets",this.listaTickets);
        }
      },
      error: err => {
        console.log(err.message)
      }
    });
  }
}
