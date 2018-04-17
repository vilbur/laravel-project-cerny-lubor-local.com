<?php

use Illuminate\Database\Seeder;
use Vilbur\Biography\Models\Biography;

class BiographyFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		if(!Biography::all()->first())
			factory(Biography::class, 5)->create();
    }
}
