<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('year');
            $table->string('email');
            $table->string('number');
            $table->string('address');
            $table->string('logo')->nullable("");
            $table->string('facebook')->nullable("");
            $table->string('instagram')->nullable("");
            $table->string('twitter')->nullable("");
            $table->string('contact_email')->nullable("");
            $table->string('show_contact')->default(false);
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
        Schema::dropIfExists('settings');
    }

}
