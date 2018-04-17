<?php

use Illuminate\Database\Seeder;

class CompanyTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('company')->delete();

        \DB::table('company')->insert(array (
            0 =>
            array (
                'id' => 1,
                'name' => 'Lubor Černý',
                'claim' => NULL,
                'about' => NULL,
                'logo' => NULL,
                'street' => NULL,
                'house_number' => NULL,
                'city' => 'Prague',
                'zip' => NULL,
                'email' => 'cerny.vil@gmail.com',
                'tel' => 792479254,
                'created_at' => '2018-02-21 10:46:33',
                'updated_at' => '2018-02-21 10:46:33',
            ),
        ));


    }
}