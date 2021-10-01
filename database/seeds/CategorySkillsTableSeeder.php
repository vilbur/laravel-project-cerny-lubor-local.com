<?php

use Illuminate\Database\Seeder;

class CategorySkillsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('category_skills')->delete();
        
        \DB::table('category_skills')->insert(array (
            0 => 
            array (
                'id' => 1,
                'slug' => 'cg',
                'title' => 'CG',
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:31:12',
            ),
            1 => 
            array (
                'id' => 2,
                'slug' => 'webdesign',
                'title' => 'WEBDESIGN',
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:31:35',
            ),
            2 => 
            array (
                'id' => 3,
                'slug' => 'others',
                'title' => 'OTHERS',
                'created_at' => '2018-02-15 02:06:01',
                'updated_at' => '2018-02-15 02:06:18',
            ),
        ));
        
        
    }
}