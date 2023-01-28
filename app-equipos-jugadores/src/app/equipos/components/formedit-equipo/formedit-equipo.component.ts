import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EquipoI } from '../../interfaces/equipos.interface';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-formedit-equipo',
  templateUrl: './formedit-equipo.component.html',
  styleUrls: ['./formedit-equipo.component.scss']
})
export class FormeditEquipoComponent implements OnInit {
  id!:number
  formCreateEquipo!:FormGroup
  constructor(private fb: FormBuilder,private equipoServicio:EquiposService
    , private route:ActivatedRoute,
    private router:Router){}
  ngOnInit(): void {
    this.formCreateEquipo=this.fb.group({
      nEquipo:['',[Validators.required,Validators.minLength(5)]],
      nDT:['',[Validators.required,Validators.minLength(8)]]
    })
    this.route.params.subscribe(
      (params: any) => {
        console.log(params.id)
        this.equipoServicio.getEquipo(params.id).subscribe((data:any)=>{
          console.log(data.equipo)
          this.id=data.equipo.id
           this.formCreateEquipo.setValue({
            "nEquipo":data.equipo.nEquipo,
            "nDT":data.equipo.nDT
          })
        })
      }
    );
  }
  enviarData():void{
    if(this.formCreateEquipo.valid){
      console.log(this.formCreateEquipo.value)
      this.equipoServicio.updateEquipos(this.formCreateEquipo.value,this.id).subscribe(res=>{
        alert("fue actualizado")
        this.router.navigate(['/equipos'])
        this.formCreateEquipo.reset();

      })
    }else{
      alert('llena en los datos')
    }
  }
}
