<?php


/**
 **Basic Routes for a RESTful service:
 **Route::get($uri, $callback);
 **Route::post($uri, $callback);
 **Route::put($uri, $callback);
 **Route::delete($uri, $callback);
 **
 */


Route::get( 'citations', 'CitationsController@index' );
Route::get( 'citations/{citation}', 'CitationsController@show' );
Route::post( 'citations', 'CitationsController@store' );
Route::put( 'citations/{citation}', 'CitationsController@update' );
Route::delete( 'citations/{citation}', 'CitationsController@delete' );