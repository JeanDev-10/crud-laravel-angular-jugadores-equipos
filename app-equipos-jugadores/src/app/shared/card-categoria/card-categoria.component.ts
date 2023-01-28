import { Component, OnInit } from '@angular/core';
import { EquiposService } from 'src/app/equipos/services/equipos.service';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.scss']
})
export class CardCategoriaComponent implements OnInit {
  equipos!:any
  constructor(private equipoService:EquiposService){}
  ngOnInit(): void {
    this.equipoService.getEquiposWithJugadores().subscribe(data=>{
      console.log(data.equipos)
      this.equipos=data.equipos;
    })
  }

}
