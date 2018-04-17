<?php

use Illuminate\Database\Seeder;
use Vilbur\Skills\Models\Skill;

class SkillsFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		if(!Skill::all()->first())
			factory(Skill::class, 7)->create();
    }
}
