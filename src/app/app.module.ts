import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MoneyGoalComponent } from './components/money-goal/money-goal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ApuestaComponent } from './components/apuesta/apuesta.component';
import { QuinielaComponent } from './components/quiniela/quiniela.component';
import { EquipoComponent } from './components/equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    MoneyGoalComponent,
    ApuestaComponent,
    InicioComponent,
    QuinielaComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
