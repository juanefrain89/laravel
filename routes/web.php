<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\HomeController;
use Spatie\Permission\Models\Role;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::middleware(['role:admin'])->group(function () {
    Route::get('admin', function () {
        return 'Role check passed';
    });
});


Route::get('h', function () {
    return Inertia::render('Jan');
});
Route::post('/auth/login', [HomeController::class ,"login"]);
route::get('/dispatch-logger', [HomeController::class, 'dispatchLogger']);
Route::get('/usuario/{id}', [HomeController::class ,"n"])->middleware("auth");
Route::get('/datos', [HomeController::class ,"datos"])->middleware('auth');
Route::get('/perfil/{id}', [HomeController::class ,"per"])->middleware('auth');


Route::get('/logina', function () {
    return Inertia::render('Footer');
});
Route::get('/ingresar', function () {
    return Inertia::rendepr('Jan');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(["auth" , "verified"])->group(function(){
    Route::get('/perfil', [HomeController::class, 'edit'])->name('perfil');
});
require __DIR__.'/auth.php';
