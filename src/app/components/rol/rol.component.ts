import { Component } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class RolComponent {
  listaRoles: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor (
    private _rolesService: RolesService,
    config: NgbModalConfig,
    private modalService: NgbModal
  )
  {
    config.backdrop = 'static';
		config.keyboard = false;
  }

  ngOnInit(){
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      pagingType: 'full_numbers'
    };

    this.obtenerRoles();
  }

  obtenerRoles(){
    this._rolesService.getRoles()
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.listaRoles = resp[1];
            this.dtTrigger.next(this.listaRoles);
            console.log("listaEquipos", this.listaRoles);
          }
        },
        error: err => {
          console.log(err.message)
        }
      });
  }

  detalleRol(rol: any){

  }

  ngOnDestroy(): void{

    this.dtTrigger.unsubscribe();
  }

  editarRol(content: any) {
		this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true });
	}


}
