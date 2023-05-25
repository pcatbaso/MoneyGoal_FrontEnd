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
  tableGen: any;
  inputTable: any;

  totalDobles: any;
  totalTriples: any;
  totalSencillas: any;

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

  selectCheck(event: any){
    this.tableGen = (<HTMLScriptElement[]><any>document.getElementById("tableSeleccionada")?.getElementsByTagName("tbody")[0].rows);
    var quinielaDoble = 0;
    var quinielaTriple = 0;
    var quinielaSencilla = 0;

    for(var i = 0; i < this.tableGen.length; i++){

      var arrayTrue = 0;
      var arrayFalse = 0;

      this.inputTable = (<HTMLScriptElement[]><any>this.tableGen[i].getElementsByTagName("input"))
      for(var j = 0; j < this.inputTable.length; j++){

        if(this.inputTable[j].checked)
          arrayTrue = arrayTrue + 1;
        else
          arrayFalse = arrayFalse + 1 ;
      }

      if(arrayTrue == 1 && arrayFalse == 2){
        quinielaSencilla = quinielaSencilla + 1;
        this.totalSencillas = quinielaSencilla;
      }
      else{
        if(arrayTrue == 3){
          if(quinielaTriple == 2){
            console.log("limite de quinielas triples")
           // event.target.checked = false;
          }
          else{
            quinielaTriple = quinielaTriple + 1;
            this.totalTriples = quinielaTriple;
          }
        }

        if(arrayTrue == 2){
          if(quinielaDoble == 4){
            console.log("limite de quinielas dobles")
            //event.target.checked = false;
          }
          else{
            quinielaDoble = quinielaDoble + 1;
            this.totalDobles = quinielaDoble;
          }
        }
      }

    }
  }
}
