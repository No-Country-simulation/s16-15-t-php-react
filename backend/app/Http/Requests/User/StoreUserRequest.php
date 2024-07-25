<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'nombre' => 'required|string',
            'email' => 'required|unique:users,email',
            'password' => 'required|string|confirmed',
            'telefono' => 'required|string|unique:users,telefono',
            'ubicacion' => 'required|string',
            'certificados' => 'nullable|json'
        ];
    }
}
