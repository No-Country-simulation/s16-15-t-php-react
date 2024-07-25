<?php

namespace App\Http\Requests\Finished;

use Illuminate\Foundation\Http\FormRequest;

class FinishedStoreRequest extends FormRequest
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
            'employer_score' => ['required', 'string'],
            'freelancer_score' => ['required', 'string'],
            'was_completed' => ['required'],
            'offer_id' => ['required', 'integer', 'exists:offers,id'],
        ];
    }
}
