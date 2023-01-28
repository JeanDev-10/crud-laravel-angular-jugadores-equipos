<?php

namespace App\Http\Controllers;

use App\Models\Equipo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EquipoController extends Controller
{

    public function index()
    {
        $equipos = Equipo::all();
        return response()->json([
            "equipo" => $equipos
        ]);
    }
    public function store(Request $request)
    {
        $equipo = Equipo::create($request->all());
        return response()->json([
            'equipo' => $equipo
        ]);
    }
    public function show($id)
    {
        $equipo = Equipo::find($id);
        return response()->json([
            "equipo" => $equipo
        ]);
    }
    public function update(Request $request, $id)
    {
        $equipo = Equipo::find($id)->update($request->all());
        return response()->json([
            'equipo' => $equipo
        ]);
    }
    public function destroy($id)
    {
        Equipo::find($id)->delete();
        return response()->json([
            'msg' => "equipo eliminado"
        ]);
    }
    public function allEquipos()
    {
        $equipos = Equipo::with('jugadores')->get();
        return response()->json([
            'equipos' => $equipos,
        ]);
    }
}
