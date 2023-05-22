import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apuesta',
  templateUrl: './apuesta.component.html',
  styleUrls: ['./apuesta.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ApuestaComponent {

  listaTickets: any;
  listaDiv: any;
  local = "local_";
  empate = "empate_";
  visita = "visita_";
  check = "check_";

  ticketSelect: any;

  constructor(
    private _ticketService: TicketService,
    private modalService: NgbModal
  ){}

  ngOnInit(){
    this.ticketDisponibles(0);


  }

  ticketDisponibles(idTicket: number){
    this._ticketService.getTicketDisponibles(idTicket)
    .subscribe({
      next: resp => {
        if(resp[0] === "OK"){
          this.listaTickets = resp[1];
          //this.listaDiv = [];

          // const LONGITUD_PEDAZOS = 3;
          //  // Partir en arreglo de 3
          // for (let i = 0; i < this.listaTickets?.length; i += LONGITUD_PEDAZOS) {
          //   let pedazo = this.listaTickets.slice(i, i + LONGITUD_PEDAZOS);
          //   this.listaDiv.push(pedazo);
          // }
           console.log("listaTickets",this.listaTickets);
        }
      },
      error: err => {
        console.log(err.message)
      }
    });
  }

  seleccionarTicket(content: any, event: any){
    this.ticketSelect = [];
    this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true });
    console.log("event",event)
    this.ticketSelect = event;

    console.log("this.ticket", this.ticketSelect)

  }

}
