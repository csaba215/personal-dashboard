<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoCardlessTokenController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['middleware' => 'auth'], function () {
    Route::resource('/token', GoCardlessTokenController::class)->only(['index', 'create', 'store', 'destroy']);
    Route::get('/', function () {
        return Inertia::render('Home');
    })->name('home');
});

Route::get('/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/authenticate', [AuthController::class, 'authenticate'])->name('auth.authenticate');
