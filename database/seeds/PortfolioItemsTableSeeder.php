<?php

use Illuminate\Database\Seeder;

class PortfolioItemsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('portfolio_items')->delete();
        
        \DB::table('portfolio_items')->insert(array (
            0 => 
            array (
                'id' => 1,
                'portfolio_id' => 1,
                'title' => 'Čtyřlístek ve službách krále',
                'summary' => 'CG movie',
                'description' => '<p>My contribution for movie was modeling of:</p>
<p>exteriors, interiors,</p>
<p>all vegetation in movie,&nbsp;</p>
<p>chracters.</p>',
                'created_at' => '2018-02-27 12:03:00',
                'updated_at' => '2018-03-12 09:13:40',
            ),
            1 => 
            array (
                'id' => 2,
                'portfolio_id' => 5,
                'title' => 'Yacht',
                'summary' => 'Polycount - 8000 tri',
                'description' => NULL,
                'created_at' => '2018-02-27 12:04:00',
                'updated_at' => '2018-03-04 20:33:22',
            ),
            2 => 
            array (
                'id' => 3,
                'portfolio_id' => 2,
                'title' => 'Gallery Edison',
                'summary' => 'First real project of Fibix studio',
                'description' => '<p>Reconstruction of transformer station to cafe with gallery in Mari&aacute;nsk&eacute; L&aacute;zně.</p>',
                'created_at' => '2018-02-27 12:05:00',
                'updated_at' => '2018-03-02 15:38:54',
            ),
            3 => 
            array (
                'id' => 4,
                'portfolio_id' => 2,
                'title' => 'Vila Lignum',
                'summary' => 'Test scene for development',
                'description' => '<p>This scene has been made for tests of rendering and workflow during development of editor.</p>',
                'created_at' => '2018-02-27 12:05:00',
                'updated_at' => '2018-03-02 15:39:25',
            ),
            4 => 
            array (
                'id' => 5,
                'portfolio_id' => 2,
                'title' => 'Log house',
                'summary' => 'Test scene for development',
                'description' => '<p><span style="font-family: BlinkMacSystemFont, -apple-system, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', Helvetica, Arial, sans-serif; font-size: 16px;">This scene has been made for tests of rendering and workflow during development of editor.</span></p>',
                'created_at' => '2018-02-27 12:04:00',
                'updated_at' => '2018-03-12 09:07:55',
            ),
            5 => 
            array (
                'id' => 6,
                'portfolio_id' => 3,
                'title' => 'Mafia II',
                'summary' => '2K Czech',
                'description' => '<p>Flat of main character.</p>
<p><strong>This flat and car was my lucky opportunity to have my own piece in game.</strong></p>
<p>Because of Mafia II was long term project,</p>
<p>and most of environments has been upgraded multiple times.</p>
<p>&nbsp;</p>',
                'created_at' => '2018-02-27 12:08:00',
                'updated_at' => '2018-03-02 23:52:04',
            ),
            6 => 
            array (
                'id' => 7,
                'portfolio_id' => 3,
                'title' => 'Environments',
                'summary' => 'Improving of graphics',
                'description' => '<p>Textures, materials &amp; lighting have to be improved, while game has been evolving through development.</p>',
                'created_at' => '2018-02-28 18:34:00',
                'updated_at' => '2018-03-02 15:52:05',
            ),
            7 => 
            array (
                'id' => 8,
                'portfolio_id' => 3,
                'title' => 'Take on helicopters',
                'summary' => 'Bohemia Interactive',
                'description' => '<p>Model of Space Needle in Seattle.</p>
<p>... one of dozens models for this game.</p>
<p>This model appears on the cover of game.</p>',
                'created_at' => '2018-02-27 12:07:00',
                'updated_at' => '2018-03-02 23:50:50',
            ),
            8 => 
            array (
                'id' => 9,
                'portfolio_id' => 3,
                'title' => 'DayZ',
                'summary' => 'Bohemia Interactive',
                'description' => '<p>Models of ship and apartment building with fully accessible interiors.</p>
<p>These complex models consists of thousands objects.</p>
<p>Wrote <strong>custom 3dsMax to engine&nbsp;exporter</strong> was required.</p>',
                'created_at' => '2018-02-27 12:07:00',
                'updated_at' => '2018-03-02 23:50:59',
            ),
            9 => 
            array (
                'id' => 10,
                'portfolio_id' => 4,
                'title' => 'Models of characeters',
                'summary' => NULL,
                'description' => '<p><strong>16 models</strong> of characters</p>
<p><strong>16 rigs</strong></p>
<p><strong>160 poses</strong> for 3D print - models are 4 cm height</p>
<p><strong>2 months</strong>&nbsp;<strong>deadline&nbsp;</strong>-&nbsp;really deadly</p>
<p>... it was very interesting task</p>',
                'created_at' => '2018-02-27 12:08:00',
                'updated_at' => '2018-03-02 15:49:42',
            ),
            10 => 
            array (
                'id' => 11,
                'portfolio_id' => 4,
                'title' => 'Animation & Final',
                'summary' => 'Animated by Kreus film',
                'description' => '<p>Showcase of animation process and final result.</p>',
                'created_at' => '2018-02-28 07:38:00',
                'updated_at' => '2018-03-02 15:32:52',
            ),
            11 => 
            array (
                'id' => 12,
                'portfolio_id' => 7,
                'title' => 'Alfa Romeo 8C Spider',
                'summary' => 'High poly model',
                'description' => '<p>3Ds max + Vray</p>',
                'created_at' => '2018-02-27 12:11:00',
                'updated_at' => '2018-03-09 16:00:02',
            ),
            12 => 
            array (
                'id' => 13,
                'portfolio_id' => 7,
                'title' => 'Clone of Earth',
                'summary' => 'Picture for fun',
                'description' => '<p>3Ds max + Vray</p>',
                'created_at' => '2018-02-27 12:10:00',
                'updated_at' => '2018-03-09 15:59:55',
            ),
            13 => 
            array (
                'id' => 14,
                'portfolio_id' => 7,
                'title' => 'Mp3 player',
                'summary' => 'Visualisation of product',
                'description' => '<p>3Ds Max + Vray</p>',
                'created_at' => '2018-02-27 12:09:00',
                'updated_at' => '2018-03-02 15:06:11',
            ),
            14 => 
            array (
                'id' => 15,
                'portfolio_id' => 7,
                'title' => 'Shelves',
                'summary' => 'Visualisation of product design',
                'description' => '<p>Design of shelves by Michal Kub&iacute;ček</p>
<p>3Ds Max + Vray render</p>',
                'created_at' => '2018-02-27 12:09:00',
                'updated_at' => '2018-03-02 15:06:07',
            ),
            15 => 
            array (
                'id' => 16,
                'portfolio_id' => 6,
                'title' => 'Ferrari 550 Maranello',
                'summary' => 'Highpoly model',
                'description' => NULL,
                'created_at' => '2018-03-04 20:47:00',
                'updated_at' => '2018-03-12 09:09:06',
            ),
            16 => 
            array (
                'id' => 17,
                'portfolio_id' => 6,
                'title' => 'Air race plane',
                'summary' => 'Highpoly model',
                'description' => NULL,
                'created_at' => '2018-03-02 15:11:00',
                'updated_at' => '2018-03-12 09:09:09',
            ),
            17 => 
            array (
                'id' => 18,
                'portfolio_id' => 5,
                'title' => 'Porsche 959',
                'summary' => 'Polycount - 3000 tri',
                'description' => NULL,
                'created_at' => '2018-03-04 20:54:00',
                'updated_at' => '2018-03-12 09:08:58',
            ),
        ));
        
        
    }
}