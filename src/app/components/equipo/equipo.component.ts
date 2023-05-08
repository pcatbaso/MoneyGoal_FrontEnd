import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipoService } from 'src/app/services/Equipo.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listaEquipos: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor (
    private _equipoService: EquipoService,
    private httpClient: HttpClient
  )
  {

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
}
