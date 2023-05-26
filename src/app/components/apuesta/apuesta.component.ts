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

  costoMxNSencilla: any;
  costoMxNDoble: any;
  costoMxNTriple: any;
  costoUSDSencilla: any;
  costoUSDDoble: any;
  costoUSDTriple: any;

  totalPagarMXN: any;
  totalPagarUSD: any;

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

    this.totalPagarMXN = 0;

    this.costoMxNSencilla = 0;
    this.costoMxNDoble = 0;
    this.costoMxNTriple = 0;

    this.totalPagarUSD = 0;
    this.costoUSDSencilla = 0;
    this.costoUSDDoble = 0;
    this.costoUSDTriple = 0;

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
        this.costoMxNSencilla = this.totalSencillas * 2 * 20;
        this.costoUSDSencilla = this.totalSencillas * 2;
      }
      else if(arrayTrue == 2 && arrayFalse == 1){
        if(quinielaDoble == 4){
          console.log("limite de quinielas doble")
         // event.target.checked = false;
        }
        else{
          quinielaDoble = quinielaDoble + 1;
          this.totalDobles = quinielaDoble;
          this.costoMxNDoble = this.totalDobles * 4 * 20;
          this.costoUSDDoble = this.totalDobles * 4;
        }
      }
      else if(arrayTrue == 3 && arrayFalse == 0){
        if(quinielaTriple == 2){
          console.log("limite de quinielas triples")
         // event.target.checked = false;
        }
        else{
          quinielaTriple = quinielaTriple + 1;
          this.totalTriples = quinielaTriple;
          this.costoMxNTriple = this.totalTriples * 6 * 20;
          this.costoUSDTriple = this.totalTriples * 6 ;
        }
      }


      if(quinielaDoble <= 4 && quinielaTriple <= 3){
        this.totalPagarMXN = this.costoMxNSencilla + this.costoMxNDoble + this.costoMxNTriple;
        this.totalPagarUSD = this.costoUSDSencilla + this.costoUSDDoble + this.costoUSDTriple;
      }
    }
  }

}
