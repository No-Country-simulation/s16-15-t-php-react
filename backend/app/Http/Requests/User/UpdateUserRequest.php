<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'nullable|string',
            'email' => 'nullable|email',
            'password' => 'nullable|string|confirmed',
            'telefono' => 'nullable|string',
            'ubicacion' => 'nullable|string',
            'certificados' => 'nullable|json'
        ];
    }
}
