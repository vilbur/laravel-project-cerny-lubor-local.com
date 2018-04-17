<?php namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model {

	protected $fillable = ['logo',  'name', 'claim','about', 'street',  'house_number', 'city', 'zip', 'email','tel'];

	protected $table = 'company';

	protected $hidden = [];

	/**
	*
	*
	*
	**/
	public function getStreetNumberAttribute (){
		return $this->attributes['street'] . " " . $this->attributes['house_number'] ;

	}

	/**
	*/
	public function getTelAttribute($value)
	{
		return chunk_split($value, 3);
	}



}
