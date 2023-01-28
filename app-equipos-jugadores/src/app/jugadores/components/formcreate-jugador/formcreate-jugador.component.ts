import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from 'src/app/equipos/services/equipos.service';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-formcreate-jugador',
  templateUrl: './formcreate-jugador.component.html',
  styleUrls: ['./formcreate-jugador.component.scss']
})
export class FormcreateJugadorComponent implements OnInit {
  equipos!:any
  formCreateJugador!:FormGroup
  constructor(private fb: FormBuilder,
    private jugadorService:JugadorService,
    private equipoService:EquiposService,
  private router:Router){}
  ngOnInit(): void {
    this.formCreateJugador=this.fb.group({
      nJugador:['',[Validators.required,Validators.minLength(5)]],
      numCamisa:['',[Validators.required]],
      posicion:['',[Validators.required]],
      equipo_id:['',[Validators.required]],
    })
    this.equipoService.getEquipos().subscribe(res=>{
      this.equipos=res.equipo
      console.log(this.equipos)
    })
  }
  enviarData():void{
    if(this.formCreateJugador.valid){
      console.log(this.formCreateJugador.value)
      this.jugadorService.postJugadores(this.formCreateJugador.value).subscribe((data:any)=>{
        alert('jugador creado exitosamente')
        this.router.navigate(['/jugadores'])
        this.formCreateJugador.reset();
      })
    }else{
      alert('llena en los datos')
    }
  }
}
