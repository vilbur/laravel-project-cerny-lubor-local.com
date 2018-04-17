<?php

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
|
*/
/* @return model of given id or all collection if id == null
*/
Route::get('/database/{model}/{id?}', function($model, $id=null){

	$model = \App::make("App\Models\\$model");

	return $id ? $model->find($id) : $model->all();
});
