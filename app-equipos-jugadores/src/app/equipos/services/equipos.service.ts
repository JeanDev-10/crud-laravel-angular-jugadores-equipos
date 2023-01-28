import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipoAllI, EquipoI } from '../interfaces/equipos.interface';

@Injectable()
export class EquiposService {
  private readonly api="http://127.0.0.1:8000/api"
  constructor(private readonly http:HttpClient) { }

  getEquipos():Observable<EquipoAllI>{
  return this.http.get<EquipoAllI>(`${this.api}/equipos`);
  }
  getEquipo(id:number):Observable<EquipoAllI>{
  return this.http.get<EquipoAllI>(`${this.api}/equipos/${id}`);
  }
  postEquipos(equipo:EquipoI):Observable<EquipoAllI>{
  return this.http.post<EquipoAllI>(`${this.api}/equipos`,equipo);
  }
  updateEquipos(equipo:EquipoI,id:number):Observable<EquipoAllI>{
  return this.http.put<EquipoAllI>(`${this.api}/equipos/${id}`,equipo);
  }
   deleteEquipos(id:number):Observable<EquipoAllI>{
  return this.http.delete<EquipoAllI>(`${this.api}/equipos/${id}`);
  }
   getEquiposWithJugadores():Observable<any>{
  return this.http.get<any>(`${this.api}/equipos/all`);
  }
}
