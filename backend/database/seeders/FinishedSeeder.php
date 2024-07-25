<?php

namespace Database\Seeders;

use App\Models\Finished;
use Illuminate\Database\Seeder;

class FinishedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Finished::factory()->count(5)->create();
    }
}
