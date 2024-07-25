<?php

namespace App\Http\Requests\Service;

use Illuminate\Foundation\Http\FormRequest;

class ServiceUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'description' => ['required', 'string'],
            'external_portfolio' => ['nullable', 'string'],
            'experiencia' => ['required', 'string'],
            'precio_por_hora' => ['required', 'integer', 'gt:0'],
            'user_id' => ['required', 'integer', 'exists:users,id'],
        ];
    }
}
