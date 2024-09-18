<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClienteController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware("auth:sanctum" )->get('/up', [HomeController::class, 'kk']);

Route::post('/auth/logout', [HomeController::class ,"logout"]);
Route::prefix("v1")->group(function(){
    //public
Route::get('/public/{id}', [HomeController::class ,"public"]);

    //auth

    Route::post('/auth/registrar', [HomeController::class ,"registrar"]);
    //private
   Route::group(["middleware" => "auth.scrum"], function(){

    Route::apiResource('/cliente/user', ClienteController::class );
    //rol admin
    Route::apiResource('/admin/empresa', AdminController::class);
   });
});

Route::post('/auth/login', [HomeController::class ,"login"]);
Route::middleware(["auth" , "verified"])->group(function(){
    Route::get('/perfil', [HomeController::class, 'edit'])->name('perfil');
});

Route::prefix("v1")->group(function(){

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
