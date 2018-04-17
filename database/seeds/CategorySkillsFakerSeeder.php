<?php

use Illuminate\Database\Seeder;
use Vilbur\Skills\Models\CategorySkill;

class CategorySkillsFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		if(!CategorySkill::all()->first())
			factory(CategorySkill::class, 2)->create();
    }
}