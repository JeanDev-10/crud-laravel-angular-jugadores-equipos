import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquiposService } from 'src/app/equipos/services/equipos.service';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-formedit-jugador',
  templateUrl: './formedit-jugador.component.html',
  styleUrls: ['./formedit-jugador.component.scss'],
})
export class FormeditJugadorComponent implements OnInit {
  id!: number;
  equipos!: any;

  formCreateJugador!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private jugadorService: JugadorService,
    private route: ActivatedRoute,
    private router: Router,
    private equipoService: EquiposService
  ) {}
  ngOnInit(): void {
    this.formCreateJugador = this.fb.group({
      nJugador: ['', [Validators.required, Validators.minLength(5)]],
      numCamisa: ['', [Validators.required]],
      posicion: ['', [Validators.required]],
      equipo_id: ['', [Validators.required]],
    });
    this.route.params.subscribe((params: any) => {
      console.log(params.id);
      this.jugadorService.getJugador(params.id).subscribe((data: any) => {
        console.log(data);
        this.formCreateJugador.setValue({
          nJugador: data.jugador[0].nJugador,
          numCamisa: data.jugador[0].numCamisa,
          posicion: data.jugador[0].posicion,
          equipo_id: data.jugador[1].id,
        });
        this.id = data.jugador[0].id;
      });
    });
    this.equipoService.getEquipos().subscribe((res) => {
      this.equipos = res.equipo;
      console.log(this.equipos);
    });
  }
  enviarData(): void {
    if (this.formCreateJugador.valid) {
      console.log(this.formCreateJugador.value);
      this.jugadorService
        .updateJugadores(this.formCreateJugador.value, this.id)
        .subscribe((res) => {
          alert('fue actualizado');
          this.router.navigate(['/jugadores']);
          this.formCreateJugador.reset();
        });
    } else {
      alert('llena en los datos');
    }
  }
}
