<?php

use Illuminate\Database\Seeder;

class UserAdminTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        if (\App\User::count() == 0) {
	
			if(\Schema::hasTable('roles'))
			{
				$role = \TCG\Voyager\Models\Role::where('name', 'admin')->firstOrFail();

				\TCG\Voyager\Models\User::create([
					'name'           => 'vilbur',
					'email'          => 'cerny.vil@gmail.com',
					'password'       => '$2y$10$IIsqO8nHHw3KG0lBK.Fj5.roC4uVxH4ShJGJluJ0nggw2hSnD896.',
					'remember_token' => str_random(60),
					'role_id'        => $role->id,
				]);

			} else
			{
				\App\User::create([
					'name'           => 'vilbur',
					'email'          => 'cerny.vil@gmail.com',
					'password'       => '$2y$10$IIsqO8nHHw3KG0lBK.Fj5.roC4uVxH4ShJGJluJ0nggw2hSnD896.',
					'remember_token' => str_random(60),
				]);	
			}

        }
    }
}
