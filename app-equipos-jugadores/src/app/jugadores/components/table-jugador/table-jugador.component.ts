import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorAllI, JugadorI } from '../../interfaces/jugadores.interface';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-table-jugador',
  templateUrl: './table-jugador.component.html',
  styleUrls: ['./table-jugador.component.scss']
})
export class TableJugadorComponent implements OnInit {
  jugadores!:any
  constructor(private readonly jugadorService:JugadorService,
    private route:Router){}
  ngOnInit(): void {
    this.jugadorService.getJugadores().subscribe((res:JugadorAllI)=>{
      console.log(res.jugadores)
      this.jugadores=res.jugadores
    })
  }
  onDelete(id:number):void{
    this.jugadorService.deleteJugadores(id).subscribe(data =>{
      alert('el jugador fue eliminado')
    this.ngOnInit()
    })
  }
  onUpdate(id:number):void{
    console.log("navegar")
    console.log(id)
    this.route.navigate(['/jugadores/edit/',id]);
  }

}
