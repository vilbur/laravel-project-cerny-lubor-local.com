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
                'title' => 'Game CG',
                'summary' => 'Next-Gen CG - highpoly to lowpoly baking wotrkflow',
                'description' => NULL,
                'created_at' => '2018-02-15 03:39:00',
                'updated_at' => '2018-04-18 08:43:04',
            ),
            1 => 
            array (
                'id' => 2,
                'skill_id' => 1,
                'title' => 'Render',
                'summary' => 'V-Ray',
                'description' => NULL,
                'created_at' => '2018-02-15 03:40:00',
                'updated_at' => '2018-04-18 08:41:57',
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
                'title' => 'Common use',
                'summary' => 'Modeling, mapping',
                'description' => NULL,
                'created_at' => '2018-02-15 03:52:00',
                'updated_at' => '2018-04-18 08:44:24',
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
                'title' => 'Common use',
                'summary' => 'Texturing, post processing',
                'description' => NULL,
                'created_at' => '2018-02-15 11:22:00',
                'updated_at' => '2018-04-18 08:44:01',
            ),
            6 => 
            array (
                'id' => 7,
                'skill_id' => 4,
                'title' => 'Framework',
                'summary' => 'Laravel',
                'description' => NULL,
                'created_at' => '2018-02-15 11:24:00',
                'updated_at' => '2018-04-18 08:07:21',
            ),
            7 => 
            array (
                'id' => 8,
                'skill_id' => 5,
                'title' => 'Frameworks',
                'summary' => 'plain JavaScript, VueJS, jQuery',
                'description' => NULL,
                'created_at' => '2018-02-15 11:44:00',
                'updated_at' => '2018-04-18 08:12:01',
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
            10 => 
            array (
                'id' => 11,
                'skill_id' => 5,
                'title' => 'Scripts for',
                'summary' => 'Web, Komodo IDE, Google Apps',
                'description' => NULL,
                'created_at' => '2018-04-18 08:06:27',
                'updated_at' => '2018-04-18 08:06:27',
            ),
            11 => 
            array (
                'id' => 12,
                'skill_id' => 4,
                'title' => 'Workflows',
                'summary' => 'OOP, TDD, Composer',
                'description' => NULL,
                'created_at' => '2018-04-18 08:12:00',
                'updated_at' => '2018-04-18 08:39:28',
            ),
            12 => 
            array (
                'id' => 13,
                'skill_id' => 8,
                'title' => NULL,
                'summary' => 'Regular expressions',
                'description' => NULL,
                'created_at' => '2018-04-18 08:29:00',
                'updated_at' => '2018-04-18 08:30:08',
            ),
            13 => 
            array (
                'id' => 14,
                'skill_id' => 7,
                'title' => NULL,
                'summary' => 'OOP, Workflow automation tools, Gui',
                'description' => NULL,
                'created_at' => '2018-04-18 08:37:00',
                'updated_at' => '2018-04-18 08:46:34',
            ),
        ));
        
        
    }
}