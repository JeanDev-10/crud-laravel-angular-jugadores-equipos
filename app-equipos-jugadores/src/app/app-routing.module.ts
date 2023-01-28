import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardCategoriaComponent } from './shared/card-categoria/card-categoria.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'equipos',
    loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule)
  },
  {
    path:'jugadores',
    loadChildren: () => import('./jugadores/jugadores.module').then(m => m.JugadoresModule)
  },
  {
    path:'resultado',
    component:CardCategoriaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
