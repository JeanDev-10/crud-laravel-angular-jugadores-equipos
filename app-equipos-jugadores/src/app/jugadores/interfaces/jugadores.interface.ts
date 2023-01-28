export interface JugadorAllI{
  "jugadores":JugadorI[]
}
export interface JugadorI{
    "id":string,
    "nombre_jugador": string,
    "posicion_jugador": string,
    "numero_camisa": string,
    "nombre_equipo": string
}
export interface JugadorPostI{
  "nJugador": string,
  "posicion": string,
  "numCamisa": string,
  "equipo_id":string,
}
export interface JugadorGetI{
    "id": string,
    "nJugador": string,
    "posicion": string,
    "numCamisa": string,
    "equipo_id":string,
    "equipo": {
      "id": string,
      "nEquipo": string,
      "nDT": string
}
}
