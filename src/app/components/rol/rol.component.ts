import { Component } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { rolesI } from 'src/app/interfaces/roles.interface';

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
  formRol : any;
  formRegisterRol: any;
  isCollapsed = true;
  isCollapsed1 = false;

  constructor (
    private _rolesService: RolesService,
    config: NgbModalConfig,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private fb: FormBuilder
  )
  {
    config.backdrop = 'static';
		config.keyboard = false;

    this.formRegisterRol = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }

  ngOnInit(){
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      pagingType: 'full_numbers'
    };

    this.obtenerRoles();
    this.isCollapsed = true;

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

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }

  actualizarRol(rol: rolesI){
    this._rolesService.updateRol(rol)
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

  editarRol(content: any, event: any) {
		this.modalService.open(content, { size: 'lg', backdrop: 'static', centered: true });

    this.formRol = this.fb.group({
      id: [event.id],
      name: [event.name],
      description: [event.description],
      active: [event.active]
    })
	}

  registrarRol(rolNew: any){
    console.log("rol", rolNew)
    this._rolesService.addRol(rolNew)
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.formRegisterRol = this.fb.group({
              id: "",
              name: "",
            })
          }
          window.location.reload();
        },
        error: err => {
          console.log(err.message)
        }
      });
  }
}
