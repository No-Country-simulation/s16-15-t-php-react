<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\App\Models\User;
use App\Models\Offer;

class OfferFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Offer::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'presupuesto' => $this->faker->randomNumber(),
            'fecha_limite' => $this->faker->dateTime(),
            'detalles' => $this->faker->text(),
            'active' => $this->faker->boolean(),
            'user:client_id' => App\Models\User::factory(),
            'user:freelancer_id' => App\Models\User::factory(),
        ];
    }
}
