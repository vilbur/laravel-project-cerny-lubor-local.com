<?php

use Illuminate\Database\Seeder;

class SkillsDatabaseSeeder extends Seeder
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
			$this->call(CategorySkillsFakerSeeder::class);
			$this->call(SkillsFakerSeeder::class);
			$this->call(SkillDetailsFakerSeeder::class);
		}
		else
		{
			$this->call(CategorySkillsTableSeeder::class);
			$this->call(SkillsTableSeeder::class);
			$this->call(SkillDetailsTableSeeder::class);
		}
    }
}


