<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DatabaseTest extends TestCase
{
	use RefreshDatabase;

   /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest(){

		$users = factory(\App\User::class, 1)->create();
		$this->assertEquals($users->first()->id, 1);

    }
}
