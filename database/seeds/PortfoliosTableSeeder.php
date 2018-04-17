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
                'slug' => 'cg-movie',
                'title' => 'CG movie',
                'image' => 'portfolio-files/cg-movie/header.jpg',
                'summary' => '',
                'description' => NULL,
                'category_id' => 1,
                'created_at' => '2018-02-27 11:24:00',
                'updated_at' => '2018-02-27 15:25:56',
                'order' => 1,
            ),
            1 =>
            array (
                'id' => 2,
                'slug' => 'visualization',
                'title' => 'visualization',
                'image' => 'portfolio-files/realtime-visualization/header.jpg',
                'summary' => 'Fibix Studio',
                'description' => '<p>These works has been created as volunteer support for friends, coders of program.</p>
<p>In early years of program development for&nbsp;<strong>realtime visualisations.</strong></p>',
                'category_id' => 1,
                'created_at' => '2018-02-25 12:21:00',
                'updated_at' => '2018-03-02 15:09:15',
                'order' => 3,
            ),
            2 =>
            array (
                'id' => 3,
                'slug' => 'games',
                'title' => 'Games',
                'image' => 'portfolio-files/games/header.jpg',
                'summary' => NULL,
                'description' => NULL,
                'category_id' => 1,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-03-02 15:01:24',
                'order' => 5,
            ),
            3 =>
            array (
                'id' => 4,
                'slug' => '3d-print',
                'title' => '3D print',
                'image' => 'portfolio-files/3d-print/header.jpg',
                'summary' => 'Stop motion TV commercial for radio Impuls',
                'description' => '',
                'category_id' => 2,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-16 07:26:25',
                'order' => 6,
            ),
            4 =>
            array (
                'id' => 5,
                'slug' => 'low-poly',
                'title' => 'Low poly',
                'image' => 'portfolio-files/low-poly/header.jpg',
                'summary' => 'Visualisations of various products.',
                'description' => NULL,
                'category_id' => 1,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-03-02 15:01:11',
                'order' => 7,
            ),
            5 =>
            array (
                'id' => 6,
                'slug' => 'high-poly',
                'title' => 'High poly',
                'image' => 'portfolio-files/high-poly/header.jpg',
                'summary' => NULL,
                'description' => NULL,
                'category_id' => 2,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-03-02 15:00:52',
                'order' => 8,
            ),
            6 =>
            array (
                'id' => 7,
                'slug' => 'rendering',
                'title' => 'Rendering',
                'image' => 'portfolio-files/rendering/header.jpg',
                'summary' => NULL,
                'description' => NULL,
                'category_id' => 1,
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-03-02 15:00:25',
                'order' => 9,
            ),
        ));


    }
}