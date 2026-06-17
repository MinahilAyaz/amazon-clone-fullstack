<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;

// Products Routes
Route::get('/api/products', [ProductController::class, 'apiIndex']);
Route::get('/products', [ProductController::class, 'index']);

// Auth Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);

// Orders Routes
Route::get('/orders', [OrderController::class, 'index']);
Route::get('/api/orders', [OrderController::class, 'apiIndex']);
Route::get('/api/orders/{id}', [OrderController::class, 'apiShow']);
