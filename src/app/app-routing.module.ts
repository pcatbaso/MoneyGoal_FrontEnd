import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoneyGoalComponent } from './components/money-goal/money-goal.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ApuestaComponent } from './components/apuesta/apuesta.component';
import { QuinielaComponent } from './components/quiniela/quiniela.component';
import { EquipoComponent } from './components/equipo/equipo.component';

const routes: Routes = [
  {path: '', redirectTo: '/MoneyGoal', pathMatch: 'full'},
  {path: 'MoneyGoal', component: MoneyGoalComponent},
  {path: 'Inicio', component: InicioComponent},
  {path: '', component: InicioComponent, children: [
    {path: 'Apuesta', component: ApuestaComponent},
    {path: 'Quiniela', component: QuinielaComponent},
    {path: 'Equipo', component: EquipoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
