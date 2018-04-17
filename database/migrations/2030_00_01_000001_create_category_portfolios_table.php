<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryPortfoliosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_portfolios', function (Blueprint $table) {
            $table->increments('id');
			$table->string('slug')->nullable();
            $table->string('title',256);
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
        Schema::dropIfExists('category_portfolios');
    }
}
