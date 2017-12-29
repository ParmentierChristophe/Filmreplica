<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Citation extends Model {
	protected $fillable = [ 'title', 'citation' ];
}
