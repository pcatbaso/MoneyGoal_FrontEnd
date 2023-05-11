import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup, FormControl} from '@angular/forms';
import { EquipoService } from 'src/app/services/Equipo.service';
import { TicketService } from 'src/app/services/ticket.service';
import { ticketI } from 'src/app/interfaces/ticket.interface';
import { ticketDetailI } from 'src/app/interfaces/ticketDetail.interface';

@Component({
  selector: 'app-quiniela',
  templateUrl: './quiniela.component.html',
  styleUrls: ['./quiniela.component.scss']
})
export class QuinielaComponent {
  listaEquipos: any;
  listaLocal: any;
  listaVisitante: any;

  ticketInsert = { } as ticketI;
  ticketInsertDetail= { } as ticketDetailI;

  createQuiniela = new FormGroup({
    numConcurso: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnd: new FormControl(''),
  });

  constructor (
    private _equipoService: EquipoService,
    private _ticketService: TicketService
  )
  {

  }

  ngOnInit(){
    this.obtenerListaEquipo();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log("L1", this.listaLocal);
      console.log("V1", this.listaVisitante);
    } else {
      console.log("L2", this.listaLocal);
      console.log("V2", this.listaVisitante);
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  obtenerListaEquipo(){
    this._equipoService.getEquipo()
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.listaEquipos = resp[1];
            this.listaLocal = [];
            this.listaVisitante = [];
          }
        },
        error: err => {
          console.log(err.message)
        }
      });
  }

  saveQuiniela(quiniela: any){

    this.ticketInsert.idTicketBet = quiniela.numConcurso;
    this.ticketInsert.active = 1;
    this.ticketInsert.dateActive = quiniela.dateStart.toString();
    this.ticketInsert.dateDeactive = quiniela.dateEnd.toString();
    this.ticketInsert.listTicketDetail = [];

    for(let l = 0; l < this.listaLocal.length; l++){
      this.ticketInsertDetail = {
        idTicketBet: quiniela.numConcurso,
        numGame: l+1,
        idLocalTeam: this.listaLocal[l].id,
        idVisitingTeam: this.listaVisitante[l].id,
        result: ""
      }

      this.ticketInsert.listTicketDetail.push(this.ticketInsertDetail);
    }

    console.log(this.ticketInsert);

    this._ticketService.insertTicket(this.ticketInsert)
    .subscribe({
      next: resp => {
        window.location.reload();
      },
      error: err => {
        console.log(err.message);
      }
    });


  }

}
