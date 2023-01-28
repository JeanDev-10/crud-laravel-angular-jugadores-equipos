import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoAllI, EquipoI } from '../../interfaces/equipos.interface';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-table-equipo',
  templateUrl: './table-equipo.component.html',
  styleUrls: ['./table-equipo.component.scss']
})
export class TableEquipoComponent implements OnInit {
  equipos!:any
  constructor(private  equipoService:EquiposService,
    private route:Router){}
  ngOnInit(): void {
    this.equipoService.getEquipos().subscribe((res:EquipoAllI)=>{
      console.log(res.equipo)
       this.equipos=res.equipo
       console.log(this.equipos)
    })
  }
  onDelete(id:number):void{
    this.equipoService.deleteEquipos(id).subscribe(data =>{
      alert('el equipo fue eliminado')
    this.ngOnInit()

    })
  }
  onUpdate(id:number):void{
    console.log("navegar")
    console.log(id)
    this.route.navigate(['/equipos/edit/',id]);
  }

}
