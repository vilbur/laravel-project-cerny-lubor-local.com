<?php

use Illuminate\Database\Seeder;

class CategoryPortfoliosTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('category_portfolios')->delete();
        
        \DB::table('category_portfolios')->insert(array (
            0 => 
            array (
                'id' => 1,
                'slug' => '3d',
                'title' => '3D',
                'summary' => NULL,
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-16 04:45:55',
            ),
            1 => 
            array (
                'id' => 2,
                'slug' => 'webdesign',
                'title' => 'webdesign',
                'summary' => NULL,
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-16 04:46:17',
            ),
        ));
        
        
    }
}