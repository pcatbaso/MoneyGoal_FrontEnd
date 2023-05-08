import { Component } from '@angular/core';
import { EquipoService } from 'src/app/services/Equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent {
  listaEquipos: any;
  checkedV = true;

  constructor (
    private _equipoService: EquipoService
  )
  {

  }

  ngOnInit(){
    this.obtenerListaEquipo();
  }

  obtenerListaEquipo(){
    this._equipoService.getEquipo()
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.listaEquipos = resp[1];
            console.log("listaEquipos", this.listaEquipos);
          }
        },
        error: err => {
          console.log(err.message)
        }
      });
  }
}
