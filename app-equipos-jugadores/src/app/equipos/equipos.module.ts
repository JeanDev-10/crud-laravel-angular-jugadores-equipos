import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposRouting } from './equipos.routing';
import { TableEquipoComponent } from './components/table-equipo/table-equipo.component';
import { FormcreateEquipoComponent } from './components/formcreate-equipo/formcreate-equipo.component';
import { FormeditEquipoComponent } from './components/formedit-equipo/formedit-equipo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EquiposService } from './services/equipos.service';

@NgModule({
  declarations: [
    TableEquipoComponent,
    FormcreateEquipoComponent,
    FormeditEquipoComponent,
  ],
  imports: [
    CommonModule,
    EquiposRouting,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[EquiposService]
})
export class EquiposModule { }
