<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Helper to get mock orders with user name dynamically injected.
     */
    private function getMockOrders($userName)
    {
        return [
            [
                'id' => '1001',
                'date' => 'May 5, 2024',
                'status' => 'Delivered',
                'statusClass' => 'badge--success',
                'address' => "$userName\n123 Main Street\nLahore",
                'items' => [
                    ['name' => 'iPhone 14 Pro', 'qty' => 1, 'price' => 999.00],
                    ['name' => 'AirPods', 'qty' => 2, 'price' => 199.00]
                ],
                'total' => 1397.00
            ],
            [
                'id' => '10293',
                'date' => 'May 10, 2026',
                'status' => 'Delivered',
                'statusClass' => 'badge--success',
                'address' => "$userName\n123 Main Street\nLahore",
                'items' => [
                    ['name' => 'Sony Headphones', 'qty' => 1, 'price' => 199.00],
                    ['name' => 'USB Cable', 'qty' => 1, 'price' => 16.00]
                ],
                'total' => 215.00
            ],
            [
                'id' => '10285',
                'date' => 'May 05, 2026',
                'status' => 'Delivered',
                'statusClass' => 'badge--success',
                'address' => "$userName\n123 Main Street\nLahore",
                'items' => [
                    ['name' => 'Mechanical Keyboard', 'qty' => 1, 'price' => 120.00]
                ],
                'total' => 120.00
            ]
        ];
    }

    /**
     * Display a listing of orders.
     */
    public function index(Request $request)
    {
        $user = Auth::user() ?: (session('user') ? (object)session('user') : null);
        if (!$user) {
            return redirect('/login');
        }

        $orders = $this->getMockOrders($user->name);
        return view('orders.index', compact('orders', 'user'));
    }

    /**
     * API endpoint to list all user orders.
     */
    public function apiIndex(Request $request)
    {
        $user = Auth::user() ?: (session('user') ? (object)session('user') : null);
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $orders = $this->getMockOrders($user->name);
        return response()->json($orders);
    }

    /**
     * API endpoint to get a single order's details.
     */
    public function apiShow(Request $request, $id)
    {
        $user = Auth::user() ?: (session('user') ? (object)session('user') : null);
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $orders = $this->getMockOrders($user->name);
        foreach ($orders as $order) {
            if ($order['id'] === $id) {
                return response()->json($order);
            }
        }

        return response()->json(['error' => 'Order not found'], 404);
    }
}
