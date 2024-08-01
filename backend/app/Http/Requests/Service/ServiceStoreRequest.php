<?php

namespace App\Http\Requests\Service;

use Illuminate\Foundation\Http\FormRequest;

class ServiceStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        //dd(auth()->check());
        return auth()->check();
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
            'precio_por_hora' => ['required'],
            'user_id' => ['required', 'integer', 'exists:users,id'],
            'category_id' => ['integer']
        ];
    }
}
