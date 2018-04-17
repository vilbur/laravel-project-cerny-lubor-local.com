<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePortfolioFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('portfolio_files', function(Blueprint $table) {
			$table->increments('id');

			$table->integer('portfolio_item_id')->unsigned()->index();
			$table->foreign('portfolio_item_id')->references('id')->on('portfolio_items')->onDelete('cascade');

			$table->string('image',  \Config::get('migrations.lenght.image'))->nullable();
			$table->string('url',   \Config::get('migrations.lenght.url'))->nullable();
			$table->string('title', \Config::get('migrations.lenght.title'))->nullable();
			$table->string('author',\Config::get('migrations.lenght.author'))->nullable();
			$table->string('summary', \Config::get('migrations.lenght.summary'))->nullable();
			$table->string('description',\Config::get('migrations.lenght.description'))->nullable();

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
        Schema::drop('portfolio_files');
    }
}

