import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  btnParticipante = false;
  btnEquipo = false;
  btnQuiniela = false;
  btnPronostico = false;
  btnRol = false;
  btnApuesta = false;

  btnTab(opcion: string){
    switch (opcion) {
      case 'participante':
        this.btnParticipante = true;
        this.btnEquipo = false;
        this.btnQuiniela = false;
        this.btnPronostico = false;
        this.btnRol = false;
        this.btnApuesta = false;
        break;

      case 'equipo':
          this.btnParticipante = false;
          this.btnEquipo = true;
          this.btnQuiniela = false;
          this.btnPronostico = false;
          this.btnRol = false;
          this.btnApuesta = false;
          break;

      case 'quiniela':
        this.btnParticipante = false;
        this.btnEquipo = false;
        this.btnQuiniela = true;
        this.btnPronostico = false;
        this.btnRol = false;
        this.btnApuesta = false;
        break;
      case 'pronostico':
        this.btnParticipante = false;
        this.btnEquipo = false;
        this.btnQuiniela = false;
        this.btnPronostico = true;
        this.btnRol = false;
        this.btnApuesta = false;
        break;

      case 'rol':
        this.btnParticipante = false;
        this.btnEquipo = false;
        this.btnQuiniela = false;
        this.btnPronostico = false;
        this.btnRol = true;
        this.btnApuesta = false;
        break;

      case 'apuesta':
        this.btnParticipante = false;
        this.btnEquipo = false;
        this.btnQuiniela = false;
        this.btnPronostico = false;
        this.btnRol = false;
        this.btnApuesta = true;
        break;

      default:
        break;
    }
  }

}
