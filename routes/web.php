<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', static fn() => Inertia::render('HomePage'));
Route::get('/wie-zijn-wij', static fn() => Inertia::render('WhoAreWe'));
Route::get('/bestuur-en-directie', static fn() => Inertia::render('Organization'));
Route::get('/projecten', static fn() => Inertia::render('Projects'));
Route::get('/vacatures', static fn() => Inertia::render('Vacancies'));
