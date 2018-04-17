<?php

use Illuminate\Database\Seeder;
use Vilbur\Portfolio\Models\Portfolio;

class PorfoliosFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		if(!Portfolio::all()->first())
			factory(Portfolio::class, 7)->create();
    }
}

