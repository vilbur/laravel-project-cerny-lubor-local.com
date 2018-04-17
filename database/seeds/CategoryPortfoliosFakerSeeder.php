<?php

use Illuminate\Database\Seeder;
use Vilbur\Portfolio\Models\CategoryPortfolio;

class CategoryPortfoliosFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		if(!CategoryPortfolio::all()->first())
			factory(CategoryPortfolio::class, 2)->create();
    }
}
