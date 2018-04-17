<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePortfoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('order')->nullable();
			$table->string('slug')->nullable();

            $table->integer('category_id')->unsigned()->index();
			$table->foreign('category_id')->references('id')->on('category_portfolios')->onDelete('cascade');

            $table->string('title',256);
			$table->string('image', 512)->nullable();
			$table->string('summary', 256)->nullable();
			$table->string('description', 2048)->nullable();
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
        Schema::dropIfExists('portfolios');
    }
}
