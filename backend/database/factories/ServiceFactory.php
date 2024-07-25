<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Service;
use App\Models\User;

class ServiceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Service::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'description' => $this->faker->text(),
            'external_portfolio' => $this->faker->word(),
            'experiencia' => $this->faker->word(),
            'precio_por_hora' => $this->faker->randomNumber(),
            'user_id' => User::factory(),
        ];
    }
}
