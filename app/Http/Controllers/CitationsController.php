<?php

namespace App\Http\Controllers;

use App\Citation;
use Illuminate\Http\Request;

class CitationsController extends Controller {
	public function index() {
		return Citation::all();
	}

	public function show( Citation $citation ) {
		return $citation;
	}

	public function store( Request $request ) {
		$this->validate( $request, [
			'title'    => 'required|max:255',
			'citation' => 'required | max:255'
		] );
		$citation = Citation::create( $request->all() );

		return response()->json( $citation, 201 );
	}

	public function update( Request $request, Citation $citation ) {
		$citation->update( $request->all() );

		return response()->json( $citation, 200 );
	}

	public function delete( Citation $citation ) {
		$citation->delete();

		return response()->json( null, 204 );
	}
}
