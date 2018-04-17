<?php

use Illuminate\Database\Seeder;

class BiographyDatabaseSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		
		if (\App::environment('faker'))
		{
			$this->call(BiographyFakerSeeder::class);
		}
		else
		{
			$this->call(BiographyTableSeeder::class);
		}
		
    }
}


