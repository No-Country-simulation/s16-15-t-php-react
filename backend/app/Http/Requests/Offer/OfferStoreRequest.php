<?php

namespace App\Http\Requests\Offer;

use Illuminate\Foundation\Http\FormRequest;

class OfferStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'presupuesto' => ['required', 'integer'],
            'fecha_limite' => ['required'],
            'detalles' => ['required', 'string'],
            'user:_cliente_id' => ['required', 'integer', 'exists:users,id'],
            'user:_freelancer_id' => ['required', 'integer', 'exists:users,id'],
        ];
    }
}
