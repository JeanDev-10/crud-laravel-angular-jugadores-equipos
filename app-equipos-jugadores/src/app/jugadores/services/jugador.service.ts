import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JugadorAllI, JugadorPostI } from '../interfaces/jugadores.interface';

@Injectable()
export class JugadorService {
  private readonly api="http://127.0.0.1:8000/api"
  constructor(private readonly http:HttpClient) { }

  getJugadores():Observable<JugadorAllI>{
  return this.http.get<JugadorAllI>(`${this.api}/jugadores`);
  }
  getJugador(id:number):Observable<JugadorAllI>{
  return this.http.get<JugadorAllI>(`${this.api}/jugadores/${id}`);
  }
  postJugadores(jugador:JugadorPostI):Observable<any>{
  return this.http.post<any>(`${this.api}/jugadores`,jugador);
  }
  updateJugadores(jugador:JugadorPostI,id:number):Observable<any>{
  return this.http.put<any>(`${this.api}/jugadores/${id}`,jugador);
  }
  deleteJugadores(id:number):Observable<any>{
  return this.http.delete<any>(`${this.api}/jugadores/${id}`);
  }
}
