<?php

use Illuminate\Database\Seeder;
use App\Citation;

class CitationsTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {


		DB::table( 'citations' )->insert( [

			[
				'citation'   => 'Barrez-vous, cons de mimes !.',
				'title'      => 'La Cité de la peur ',
				'created_at' => date( 'Y-m-d H:i:s' ),
				'updated_at' => date( 'Y-m-d H:i:s' ),
			],
			[
				'citation'   => 'On m\'avait pas baisé comme ça depuis l\'école primaire.',
				'title'      => 'Fight Club',
				'created_at' => date( 'Y-m-d H:i:s' ),
				'updated_at' => date( 'Y-m-d H:i:s' ),
			],
			[
				'citation'   => 'C\'est toujours les nazis qui ont le mauvais rôle ! On est en 1955 ! On peut avoir une seconde chance ? Merci !',
				'title'      => 'OSS 117 : Le Caire, nid d\'espions',
				'created_at' => date( 'Y-m-d H:i:s' ),
				'updated_at' => date( 'Y-m-d H:i:s' ),
			]

		] );


	}

	
}
