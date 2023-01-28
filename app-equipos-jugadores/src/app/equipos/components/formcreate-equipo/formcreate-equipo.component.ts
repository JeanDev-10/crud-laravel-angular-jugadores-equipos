import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-formcreate-equipo',
  templateUrl: './formcreate-equipo.component.html',
  styleUrls: ['./formcreate-equipo.component.scss']
})
export class FormcreateEquipoComponent implements OnInit {
  formCreateEquipo!:FormGroup
  constructor(private fb: FormBuilder,
  private equipoServicio:EquiposService,
  private router:Router){}
  ngOnInit(): void {
    this.formCreateEquipo=this.fb.group({
      nEquipo:['',[Validators.required,Validators.minLength(5)]],
      nDT:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  enviarData():void{
    if(this.formCreateEquipo.valid){
      console.log(this.formCreateEquipo.value)
      this.equipoServicio.postEquipos(this.formCreateEquipo.value).subscribe((data:any)=>{
        alert('equipo creado exitosamente')
        this.router.navigate(['/equipos'])
        this.formCreateEquipo.reset();
      })
    }else{
      alert('llena en los datos')
    }
  }
}
