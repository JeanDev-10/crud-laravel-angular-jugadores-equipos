import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcreateJugadorComponent } from './components/formcreate-jugador/formcreate-jugador.component';
import { FormeditJugadorComponent } from './components/formedit-jugador/formedit-jugador.component';
import { TableJugadorComponent } from './components/table-jugador/table-jugador.component';

const routes: Routes = [
  {
    path: 'create',
    component: FormcreateJugadorComponent,
  },
  {
    path: 'edit/:id',
    component: FormeditJugadorComponent,
  },
  {
    path: '',
    component: TableJugadorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadoresRouting { }
