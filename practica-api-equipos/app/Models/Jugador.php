<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jugador extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'nJugador',
        'posicion',
        'numCamisa',
        'equipo_id'
    ];

    public function equipo(){
        return $this->belongsTo(Equipo::class);
    }
}
