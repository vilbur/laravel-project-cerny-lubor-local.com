<?php

use Illuminate\Database\Seeder;

class SkillDetailsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('skill_details')->delete();
        
        \DB::table('skill_details')->insert(array (
            0 => 
            array (
                'id' => 1,
                'skill_id' => 1,
                'title' => 'Next-Gen Game CG',
                'summary' => 'High poly baked textures on low poly models',
                'description' => NULL,
                'created_at' => '2018-02-15 03:39:12',
                'updated_at' => '2018-02-15 03:39:12',
            ),
            1 => 
            array (
                'id' => 2,
                'skill_id' => 1,
                'title' => 'V-Ray render',
                'summary' => 'Photoreal renders',
                'description' => NULL,
                'created_at' => '2018-02-15 03:40:00',
                'updated_at' => '2018-02-15 03:40:29',
            ),
            2 => 
            array (
                'id' => 3,
                'skill_id' => 1,
                'title' => 'Maxscript',
                'summary' => 'Tools, exporters etc.',
                'description' => NULL,
                'created_at' => '2018-02-15 03:41:44',
                'updated_at' => '2018-02-15 03:41:44',
            ),
            3 => 
            array (
                'id' => 4,
                'skill_id' => 2,
                'title' => NULL,
                'summary' => 'Modeling, mapping',
                'description' => NULL,
                'created_at' => '2018-02-15 03:52:48',
                'updated_at' => '2018-02-15 03:52:48',
            ),
            4 => 
            array (
                'id' => 5,
                'skill_id' => 2,
                'title' => 'MelScript',
                'summary' => 'Tools',
                'description' => NULL,
                'created_at' => '2018-02-15 03:53:00',
                'updated_at' => '2018-02-15 03:53:25',
            ),
            5 => 
            array (
                'id' => 6,
                'skill_id' => 3,
                'title' => NULL,
                'summary' => 'Common usage',
                'description' => NULL,
                'created_at' => '2018-02-15 11:22:32',
                'updated_at' => '2018-02-15 11:22:32',
            ),
            6 => 
            array (
                'id' => 7,
                'skill_id' => 4,
                'title' => 'Laravel framework',
                'summary' => 'TDD',
                'description' => NULL,
                'created_at' => '2018-02-15 11:24:00',
                'updated_at' => '2018-02-15 11:29:28',
            ),
            7 => 
            array (
                'id' => 8,
                'skill_id' => 5,
                'title' => 'Frameworks',
                'summary' => 'Vue.js, jQUery',
                'description' => NULL,
                'created_at' => '2018-02-15 11:44:00',
                'updated_at' => '2018-02-15 11:44:23',
            ),
            8 => 
            array (
                'id' => 9,
                'skill_id' => 6,
                'title' => 'Preprocessors',
                'summary' => 'Sass, Less',
                'description' => NULL,
                'created_at' => '2018-02-15 11:47:00',
                'updated_at' => '2018-02-15 11:53:17',
            ),
            9 => 
            array (
                'id' => 10,
                'skill_id' => 6,
                'title' => 'Frameworks',
                'summary' => 'Bulma, Bootstrap',
                'description' => NULL,
                'created_at' => '2018-02-15 11:52:00',
                'updated_at' => '2018-02-15 11:53:13',
            ),
        ));
        
        
    }
}