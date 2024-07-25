<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Language_User;
use App\Models\User;

class LanguageUserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LanguageUser::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'level' => $this->faker->randomElement(["B\u00e1sico","Intermedio","Avanzado","Nativo"]),
            'user_id' => User::factory(),
        ];
    }
}
