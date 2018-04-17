<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSkillsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('skills', function(Blueprint $table) {
			$table->increments('id');
			
			$table->integer('category_id')->nullable()->unsigned()->index();
			$table->foreign('category_id')->references('id')->on('category_skills')->onDelete('cascade');

			$table->string('title',\Config::get('migrations.lenght.title'))->nullable();
			$table->string('summary',\Config::get('migrations.lenght.summary'))->nullable();
			$table->string('description',\Config::get('migrations.lenght.description'))->nullable();
			$table->string('image',	\Config::get('migrations.image'))->nullable();

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
        Schema::drop('skills');
    }
}
