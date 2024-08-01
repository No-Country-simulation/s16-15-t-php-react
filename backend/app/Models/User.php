<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'id_typeuser',
        'telefono',
        'email',
        'password',
        'ubicacion',
        'certificados',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function tools(){
        return $this->belongsToMany(Tool::class, 'tool_user', 'user_id', 'tool_id');
    }

    public function services(){
        return $this->hasMany(Service::class);
    }

    public function typeuser(){
        return [
            'administrador',
            'empleador',
            'freelancer'
        ][$this->id_typeuser];
    }
    public function offers(){
        return $this->hasMany(Offer::class);
    }

    public function messages(){
        return $this->hasMany(Message::class);
    }

    public function languages(){
        return $this->hasMany(Language_User::class, 'user_id');
    }
}
