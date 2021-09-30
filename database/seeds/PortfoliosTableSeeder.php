<?php

use Illuminate\Database\Seeder;

class PortfoliosTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('portfolios')->delete();
        
        \DB::table('portfolios')->insert(array (
            0 => 
            array (
                'id' => 1,
                'order' => 1,
                'slug' => 'cg-movie',
                'category_id' => 1,
                'title' => 'CG movie',
                'image' => 'portfolio-files/cg-movie/header.jpg',
                'summary' => '',
                'description' => NULL,
                'created_at' => '2018-02-27 11:24:00',
                'updated_at' => '2018-02-27 15:25:56',
            ),
            1 => 
            array (
                'id' => 2,
                'order' => 3,
                'slug' => 'visualization',
                'category_id' => 1,
                'title' => 'visualization',
                'image' => 'portfolio-files/realtime-visualization/header.jpg',
                'summary' => 'Fibix Studio',
                'description' => '<p>These works has been created as volunteer support for friends, coders of program.</p>
<p>In early years of program development for&nbsp;<strong>realtime visualisations.</strong></p>',
                'created_at' => '2018-02-25 12:21:00',
                'updated_at' => '2018-03-02 15:09:15',
            ),
            2 => 
            array (
                'id' => 3,
                'order' => 6,
                'slug' => 'games',
                'category_id' => 1,
                'title' => 'Games',
                'image' => 'portfolio-files/games/header.jpg',
                'summary' => NULL,
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-04-17 13:50:57',
            ),
            3 => 
            array (
                'id' => 4,
                'order' => 3,
                'slug' => '3d-print',
                'category_id' => 2,
                'title' => '3D print',
                'image' => 'portfolio-files/3d-print/header.jpg',
                'summary' => 'Stop motion TV commercial for radio Impuls',
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-04-17 13:53:32',
            ),
            4 => 
            array (
                'id' => 5,
                'order' => 4,
                'slug' => 'low-poly',
                'category_id' => 1,
                'title' => 'Low poly',
                'image' => 'portfolio-files/low-poly/header.jpg',
                'summary' => 'Visualisations of various products.',
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-04-17 13:51:31',
            ),
            5 => 
            array (
                'id' => 6,
                'order' => 5,
                'slug' => 'high-poly',
                'category_id' => 2,
                'title' => 'High poly',
                'image' => 'portfolio-files/high-poly/header.jpg',
                'summary' => NULL,
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-04-17 13:52:43',
            ),
            6 => 
            array (
                'id' => 7,
                'order' => 7,
                'slug' => 'rendering',
                'category_id' => 1,
                'title' => 'Rendering',
                'image' => 'portfolio-files/rendering/header.jpg',
                'summary' => NULL,
                'description' => NULL,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-04-17 13:50:13',
            ),
        ));
        
        
    }
}