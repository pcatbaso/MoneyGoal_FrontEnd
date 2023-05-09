import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  listaUsuarios: any;
  dtTrigger: Subject<any> = new Subject<any>();

  constructor (
    private _usuarioService: UsuarioService,
    private httpClient: HttpClient
  )
  {

  }

  ngOnInit(){

    this.dtOptions = {
      columnDefs:[{ "targets": 0}],
      language: {
        "lengthMenu": "Mostrar MENU resultados",
        "zeroRecords": "No se encontraron resultados",
        "info": "Mostrando resultados START-END de  TOTAL",
        "infoEmpty": "Mostrando resultados del 0 al 0 de un total de 0 registros",
        "search": "Buscar",
        "loadingRecords": "Cargando...",
        "paginate": {
          "first": "Primero",
          "last": "Último",
          "next": "Siguiente",
          "previous": "Anterior"
        }
      },
      responsive: true,
    };

    this.obtenerListaUsuario();
  }

  obtenerListaUsuario(){
    this._usuarioService.getUsers()
      .subscribe({
        next: resp => {
          if(resp[0] === "OK"){
            this.listaUsuarios = resp[1];
            this.dtTrigger.next(this.listaUsuarios);
            //this.dtTrigger.next({});
            console.log("listaEquipos", this.listaUsuarios);
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
