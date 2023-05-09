import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from 'src/app/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //private apiUrl:string = "https://www.apipruebasmoneygoal.somee.com/api/"
  private apiUrl:string = "http://localhost:6394/api/"
  private endPoint:string = this.apiUrl + "users/";

  constructor(private http: HttpClient) {}

  addUser(usuario: UsuarioI): Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.endPoint + "insertarUsuario", usuario);
  }

  login_get(usuario: any): Observable<any>{
    return this.http.get(this.endPoint + "consultarUsuario" + `?email=${usuario.email_usuario}&contrasenia=${usuario.contrasenia_usuario}`)
  }

  ValidarExistenciaCorreo(correo: string, password: string, validar: boolean): Observable<any>{
    return this.http.get(this.endPoint + "ValidarExistenciaCorreo" + `?email=${correo}&contrasenia=${password}&validar=${validar}`)
  }

  getUsers(): Observable<any>{
    return this.http.get(this.endPoint + "obtenerUsuarios")
  }

  //?nombres=${name}&tipoper=${tipo}&estado=${status}
}
