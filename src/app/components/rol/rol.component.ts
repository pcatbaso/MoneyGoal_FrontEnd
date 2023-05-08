import { Component } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent {
  listaRoles: any;

  constructor (
    private _rolesService: RolesService
  )
  {

  }

  ngOnInit(){
    this.obtenerRoles();
  }

  obtenerRoles(){
    this._rolesService.getRoles()
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.listaRoles = resp[1];
            console.log("listaEquipos", this.listaRoles);
          }
        },
        error: err => {
          console.log(err.message)
        }
      });
  }
}
