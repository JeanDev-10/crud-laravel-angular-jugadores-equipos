import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresRouting } from './jugadores.routing';
import { TableJugadorComponent } from './components/table-jugador/table-jugador.component';
import { FormcreateJugadorComponent } from './components/formcreate-jugador/formcreate-jugador.component';
import { FormeditJugadorComponent } from './components/formedit-jugador/formedit-jugador.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JugadorService } from './services/jugador.service';
import { HttpClientModule } from '@angular/common/http';
import { EquiposService } from '../equipos/services/equipos.service';



@NgModule({
  declarations: [
    TableJugadorComponent,
    FormcreateJugadorComponent,
    FormeditJugadorComponent
  ],
  imports: [
    CommonModule,
    JugadoresRouting,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[JugadorService,EquiposService]
})
export class JugadoresModule { }
