import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';

import { MoneyGoalComponent } from './components/money-goal/money-goal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ApuestaComponent } from './components/apuesta/apuesta.component';
import { QuinielaComponent } from './components/quiniela/quiniela.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { RolComponent } from './components/rol/rol.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyGoalComponent,
    ApuestaComponent,
    InicioComponent,
    QuinielaComponent,
    EquipoComponent,
    RolComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
