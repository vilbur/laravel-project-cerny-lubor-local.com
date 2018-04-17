<?php

use Illuminate\Database\Seeder;

class SkillsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('skills')->delete();
        
        \DB::table('skills')->insert(array (
            0 => 
            array (
                'id' => 1,
                'category_id' => 1,
                'title' => 'Autodesk 3ds Max',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/3dsmax/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 01:59:33',
            ),
            1 => 
            array (
                'id' => 2,
                'category_id' => 1,
                'title' => 'Autodesk Maya',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/maya/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 02:04:30',
            ),
            2 => 
            array (
                'id' => 3,
                'category_id' => 1,
                'title' => 'Adobe Photoshop',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/photoshop/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 03:51:56',
            ),
            3 => 
            array (
                'id' => 4,
                'category_id' => 2,
                'title' => 'Php',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/php/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 02:04:07',
            ),
            4 => 
            array (
                'id' => 5,
                'category_id' => 2,
                'title' => 'JavaScript',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/javascript/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 11:31:54',
            ),
            5 => 
            array (
                'id' => 6,
                'category_id' => 2,
                'title' => 'Css',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/css/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 11:31:52',
            ),
            6 => 
            array (
                'id' => 7,
                'category_id' => 3,
                'title' => 'Autohotkey',
                'summary' => NULL,
                'description' => NULL,
                'image' => '/storage/skills/autohotkey/logo.svg',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-15 04:24:48',
            ),
        ));
        
        
    }
}