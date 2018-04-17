<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBiographyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('biography', function(Blueprint $table) {
			$table->increments('id');

			$table->string('project', 255	)->nullable();
			$table->string('project_type'	)->nullable();			
			$table->string('client'	)->nullable();			
			$table->string('link'	)->nullable();			
			$table->string('summary'	)->nullable();
			$table->text('description'	)->nullable();
			$table->string('job_title'	)->nullable();
			$table->string('image'	)->nullable();

			$table->date('since')->nullable();
			$table->date('until')->nullable();

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
        Schema::drop('biography');
    }
}
