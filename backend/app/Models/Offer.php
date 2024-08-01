<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Offer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'presupuesto',
        'fecha_limite',
        'detalles',
        'active',
        'user:client_id',
        'user:freelancer_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'presupuesto' => 'integer',
        'fecha_limite' => 'timestamp',
        'active' => 'boolean',
        'user:client_id' => 'integer',
        'user:freelancer_id' => 'integer',
    ];

    public function client(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user:client_id');
    }

    public function freelancer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user:freelancer_id');
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    public function finished(): HasOne
    {
        return $this->hasOne(Finished::class);
    }
}
