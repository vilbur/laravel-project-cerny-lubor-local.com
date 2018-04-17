<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategorySkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('category_skills', function(Blueprint $table) {
			$table->increments('id');
			$table->string('slug')->nullable();
			$table->string('title',\Config::get('migrations.lenght.title'))->nullable();
			$table->timestamps();
		});

    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('category_skills');
    }
}
