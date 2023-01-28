<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use App\Models\Jugador;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JugadorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $jugadores = DB::table('jugadors')
        ->join('equipos', 'equipos.id', '=', 'jugadors.equipo_id')
         ->select('jugadors.id as id','jugadors.nJugador as nombre_jugador','jugadors.posicion as posicion_jugador', 'jugadors.numCamisa as numero_camisa', 'equipos.nEquipo as nombre_equipo')
        ->get();
        return response()->json([
            'jugadores'=>$jugadores,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $equipo = Equipo::findOrFail($request->equipo_id);
        $equipo->jugadores()->create([
            "nJugador"=>$request->nJugador,
            "posicion"=>$request->posicion,
            "numCamisa"=>$request->numCamisa,
        ]);
        return response()->json([
            "smg"=>"creado correctamente"
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Jugador  $jugador
     * @return \Illuminate\Http\Response
     */
    public function show( $id)
    {
        $jugador=Jugador::find($id);
        return response()->json([
            'jugador'=>[$jugador,$jugador->equipo],
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Jugador  $jugador
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $equipo = Equipo::findOrFail($request->equipo_id);
        $jugador=Jugador::findOrFail($id);
        $jugador->update([
            "nJugador"=>$request->nJugador,
            "posicion"=>$request->posicion,
            "numCamisa"=>$request->numCamisa,
            "equipo_id"=>$equipo->id,
        ]);
        return response()->json([
            "smg"=>"actualizado correctamente"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Jugador  $jugador
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Jugador::find($id)->delete();
        return response()->json([
            "smg"=>"eliminado correctamente"
        ]);
    }
}
