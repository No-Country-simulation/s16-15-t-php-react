<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Finished;
use App\Models\Offer;

class FinishedFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Finished::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'employer_score' => $this->faker->word(),
            'freelancer_score' => $this->faker->word(),
            'was_completed' => $this->faker->boolean(),
            'offer_id' => Offer::factory(),
        ];
    }
}
