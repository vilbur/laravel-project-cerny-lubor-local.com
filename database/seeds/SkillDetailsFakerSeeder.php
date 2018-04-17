<?php

use Illuminate\Database\Seeder;
use Vilbur\Skills\Models\SkillDetail;

class SkillDetailsFakerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		if(!SkillDetail::all()->first())
			factory(SkillDetail::class, 20)->create();
    }
}
