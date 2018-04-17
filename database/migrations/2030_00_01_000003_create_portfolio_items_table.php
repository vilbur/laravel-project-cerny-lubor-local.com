<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePortfolioItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portfolio_items', function (Blueprint $table) {
            $table->increments('id');

			$table->integer('portfolio_id')->unsigned()->index();
			$table->foreign('portfolio_id')->references('id')->on('portfolios')->onDelete('cascade');

            $table->string('title',256)->nullable();
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
        Schema::dropIfExists('portfolio_items');
    }
}
