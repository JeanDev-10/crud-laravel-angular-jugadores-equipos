import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcreateEquipoComponent } from './components/formcreate-equipo/formcreate-equipo.component';
import { FormeditEquipoComponent } from './components/formedit-equipo/formedit-equipo.component';
import { TableEquipoComponent } from './components/table-equipo/table-equipo.component';

const routes: Routes = [
  {
    path: 'create',
    component: FormcreateEquipoComponent,
  },
  {
    path: 'edit/:id',
    component: FormeditEquipoComponent,
  },
  {
    path: '',
    component: TableEquipoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposRouting {}
