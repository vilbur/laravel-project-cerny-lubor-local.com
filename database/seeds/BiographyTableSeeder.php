<?php

use Illuminate\Database\Seeder;

class BiographyTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('biography')->delete();
        
        \DB::table('biography')->insert(array (
            0 => 
            array (
                'id' => 1,
                'client' => 'SUPŠ Turnov',
                'project' => 'Goldsmith and silversmith',
                'project_type' => '',
                'job_title' => ' The secondary school of applied arts',
                'image' => '/storage/biography/Sups/logo.svg',
                'since' => '1999-09-01',
                'until' => '2003-06-30',
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:29:04',
                'link' => 'http://www.sups.info/index.php/sups/studijni-obor/zlatnictvi-a-design-sperku',
            ),
            1 => 
            array (
                'id' => 2,
                'client' => 'Glass stones Turnov',
                'project' => '',
                'project_type' => '',
                'job_title' => 'Shift manager, operator of vacuum chamber for metal coating',
                'image' => '/storage/biography/GlassStonesTurnov/logo.svg',
                'since' => '2003-08-01',
                'until' => '2007-07-31',
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:29:04',
                'link' => 'http://www.koralky-bizuterie.cz/cz_vakuovy-pokov,89.html',
            ),
            2 => 
            array (
                'id' => 3,
                'client' => '2K Czech',
                'project' => '<p><a href="https://www.2k.com/games/mafia-ii" target="_blank" rel="noopener noreferrer">Mafia ll,</a><a href="https://en.wikipedia.org/wiki/Top_Spin_4" target="_blank" rel="noopener noreferrer">Top Spin 4</a></p>',
                'project_type' => 'Game',
                'job_title' => '3D artist - fulltime',
                'image' => '/storage/biography/2KCzech/logo.svg',
                'since' => '2007-09-01',
                'until' => '2010-07-31',
                'created_at' => '2018-02-14 20:29:00',
                'updated_at' => '2018-02-24 07:31:05',
                'link' => 'http://www.2kczech.com/',
            ),
            3 => 
            array (
                'id' => 4,
                'client' => 'Tricks s.r.o',
                'project' => 'Autopohádky',
                'project_type' => 'CG Movie',
                'job_title' => '3D artist - freelance',
                'image' => '/storage/biography/Tricks/logo.svg',
                'since' => '2010-09-01',
                'until' => '2010-12-31',
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:29:04',
                'link' => 'http://www.tricks.cz/',
            ),
            4 => 
            array (
                'id' => 5,
                'client' => 'Bohemia Interactive Studio',
                'project' => '<p><a href="http://takeonthegame.com/take-on-helicopters" target="_blank" rel="noopener noreferrer">Take On Helicopters</a>',
                'project_type' => 'Game',
                'job_title' => '3D artist - freelance',
                'image' => '/storage/biography/BohemiaInteractiveStudio/logo.svg',
                'since' => '2011-01-01',
                'until' => '2011-04-30',
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:29:04',
                'link' => 'https://www.bohemia.net/',
            ),
            5 => 
            array (
                'id' => 6,
                'client' => 'Fanatic Games',
                'project' => '<p>various - outsourcing</p>',
                'project_type' => 'Games',
                'job_title' => '3D artist - freelance',
                'image' => '/storage/biography/FanaticGames/logo.svg',
                'since' => '2011-01-01',
                'until' => '2012-01-01',
                'created_at' => '2018-02-16 12:26:00',
                'updated_at' => '2018-03-10 07:34:42',
                'link' => 'http://www.fanaticgames.com/home',
            ),
            6 => 
            array (
                'id' => 7,
                'client' => 'Alkay animation Prague',
                'project' => 'Čtyřlístek ve službách krále',
                'project_type' => 'CG Movie',
                'job_title' => '3D artist - freelance',
                'image' => '/storage/biography/Alkay/logo.svg',
                'since' => '2011-05-01',
                'until' => '2012-06-30',
                'created_at' => '2018-02-16 12:29:30',
                'updated_at' => '2018-02-16 12:29:30',
                'link' => 'https://www.alkay.cz/content/text/cz/?projekty/celovecerni_filmy',
            ),
            7 => 
            array (
                'id' => 8,
                'client' => 'Bohemia Interactive Studio',
                'project' => '<p><a href="https://www.bohemia.net/games/dayz" target="_blank" rel="noopener noreferrer">DayZ</a>',
                'project_type' => 'Game',
                'job_title' => '3D artist - freelance',
                'image' => '/storage/biography/BohemiaInteractiveStudio/logo.svg',
                'since' => '2012-09-01',
                'until' => '2014-12-31',
                'created_at' => '2018-02-16 12:31:13',
                'updated_at' => '2018-02-16 12:31:13',
                'link' => 'https://www.bohemia.net/',
            ),
        ));
        
        
    }
}