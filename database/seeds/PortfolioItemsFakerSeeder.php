<?php

use Illuminate\Database\Seeder;
use Vilbur\Portfolio\Models\PortfolioItem;

class PortfolioItemsFakerSeeder extends Seeder {

	/**
	 * Auto generated seed file
	 *
	 * @return void
	 */
	public function run()
	{
		if(!PortfolioItem::all()->first())
			factory(PortfolioItem::class, 20)->create();
	}

}
