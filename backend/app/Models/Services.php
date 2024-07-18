<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    use HasFactory;

    protected $fillable=[
        'descripcion',
        'external_portfolio_url',
        'user_id',
        'experiencia',
        'categoria_id',
        'precio_por_hora'
    ];

    public function freelancer(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function categories(){
        return $this->belongsTo(Category::class);
    }
}
