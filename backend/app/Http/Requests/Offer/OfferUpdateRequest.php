<?php

namespace App\Http\Requests\Offer;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Offer;
class OfferUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if(auth()->check())
            return auth()->user() &&  Offer::where('user:_cliente_id',auth()->id())->orWhere('user:_freelancer_id', auth()->id())->count();
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'presupuesto' => ['required', 'integer', 'gt:0'],
            'fecha_limite' => ['required'],
            'detalles' => ['required', 'string'],
            'user:_cliente_id' => ['required', 'integer', 'exists:users,id'],
            'user:_freelancer_id' => ['required', 'integer', 'exists:users,id'],
        ];
    }
}
