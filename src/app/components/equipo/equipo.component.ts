import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipoService } from 'src/app/services/Equipo.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EquipoI } from 'src/app/interfaces/Equipo.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class EquipoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listaEquipos: any;
  dtTrigger: Subject<any> = new Subject<any>();
  isCollapsed = true;
  isCollapsed1 = false;
  formTeam : any;
  formTeamRegister: any;

  constructor (
    private _equipoService: EquipoService,
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder
  )
  {
    this.formTeamRegister = new FormGroup({
      name: new FormControl()
    });
  }

  ngOnInit(){

    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      pagingType: 'full_numbers'
    };

    this.obtenerListaEquipo();
  }

  obtenerListaEquipo(){
    this._equipoService.getEquipo()
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.listaEquipos = resp[1];
            this.dtTrigger.next(this.listaEquipos);
            //this.dtTrigger.next({});
            console.log("listaEquipos", this.listaEquipos);
          }
        },
        error: err => {
          console.log(err.message)
        }
      });
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  editarEquipo(content: any, event: any){
		this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true });
    console.log("event",event)
    this.formTeam = this.fb.group({
      id: [event.id],
      name: [event.name],
      active: [event.activo]
    })
  }

  registrarEquipo(equipoNew: any){
    console.log("equipoNew", equipoNew)
    this._equipoService.addEquipo(equipoNew)
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            window.location.reload();
          }
        },
        error: err => {
          console.log(err.message)
        }
      });
  }

  actualizarEquipo(equipo: EquipoI){
    this._equipoService.updateEquipo(equipo)
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.modalService.dismissAll();
            window.location.reload();
          }

        },
        error: err => {
          console.log(err.message)
        }
      });
  }
}
