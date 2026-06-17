<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Get the full list of products (mock database).
     */
    private function getProducts()
    {
        return collect([
            // Electronics
            [
                'id' => 1,
                'name' => 'iPhone 14',
                'price' => 999.00,
                'category' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 2,
                'name' => 'Samsung S23',
                'price' => 899.00,
                'category' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 3,
                'name' => 'iPad',
                'price' => 599.00,
                'category' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 4,
                'name' => 'Sony Wireless Headphones',
                'price' => 199.00,
                'category' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 5,
                'name' => 'Noise Cancelling Earbuds',
                'price' => 99.00,
                'category' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 6,
                'name' => 'Bluetooth Party Speaker',
                'price' => 149.00,
                'category' => 'electronics',
                'image' => 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'
            ],

            // Fashion
            [
                'id' => 7,
                'name' => 'Nike Shoes',
                'price' => 110.00,
                'category' => 'fashion',
                'image' => 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 8,
                'name' => 'Adidas Hoodie',
                'price' => 75.00,
                'category' => 'fashion',
                'image' => 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 9,
                'name' => 'Levi\'s Jeans',
                'price' => 60.00,
                'category' => 'fashion',
                'image' => 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 10,
                'name' => 'Classic Leather Watch',
                'price' => 85.00,
                'category' => 'fashion',
                'image' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 11,
                'name' => 'Casual Denim Jacket',
                'price' => 65.00,
                'category' => 'fashion',
                'image' => 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 12,
                'name' => 'Running Sports Shoes',
                'price' => 120.00,
                'category' => 'fashion',
                'image' => 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300'
            ],

            // Books
            [
                'id' => 13,
                'name' => 'Python Book',
                'price' => 35.00,
                'category' => 'books',
                'image' => 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 14,
                'name' => 'JavaScript Guide',
                'price' => 28.00,
                'category' => 'books',
                'image' => 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 15,
                'name' => 'Laravel Mastery',
                'price' => 45.00,
                'category' => 'books',
                'image' => 'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 16,
                'name' => 'The Great Gatsby Book',
                'price' => 15.00,
                'category' => 'books',
                'image' => 'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 17,
                'name' => 'Learn PHP Laravel Book',
                'price' => 29.00,
                'category' => 'books',
                'image' => 'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=300'
            ],

            // Smart Home
            [
                'id' => 18,
                'name' => 'Smart LED Bulb',
                'price' => 25.00,
                'category' => 'smart-home',
                'image' => 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 19,
                'name' => 'Smart Wi-Fi Plug',
                'price' => 19.00,
                'category' => 'smart-home',
                'image' => 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 20,
                'name' => 'Smart Security Camera',
                'price' => 79.00,
                'category' => 'smart-home',
                'image' => 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500'
            ],

            // Home Decor
            [
                'id' => 21,
                'name' => 'Ergonomic Office Chair',
                'price' => 220.00,
                'category' => 'home-decor',
                'image' => 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 22,
                'name' => 'Minimalist Wooden Desk',
                'price' => 150.00,
                'category' => 'home-decor',
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=500'
            ],
            [
                'id' => 23,
                'name' => 'Vintage Wall Clock',
                'price' => 40.00,
                'category' => 'home-decor',
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=500'
            ],

            // Kitchen
            [
                'id' => 24,
                'name' => 'Professional Blender',
                'price' => 95.00,
                'category' => 'kitchen',
                'image' => 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=300'
            ],
            [
                'id' => 25,
                'name' => 'Non-Stick Frying Pan',
                'price' => 35.00,
                'category' => 'kitchen',
                'image' => 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=300'
            ]
        ]);
    }

    /**
     * API endpoint to return products (JSON format).
     */
    public function apiIndex(Request $request)
    {
        $products = $this->getProducts();

        // 1. Search Query filter (checks 'search' or 'q')
        $query = $request->input('search') ?: $request->input('q');
        if ($query) {
            $products = $products->filter(function ($product) use ($query) {
                return stripos($product['name'], $query) !== false;
            });
        }

        // 2. Category filter
        $category = $request->input('category');
        if ($category && $category !== 'all') {
            $products = $products->filter(function ($product) use ($category) {
                return strtolower($product['category']) === strtolower($category);
            });
        }

        // 3. Price Sorting
        $sort = $request->input('sort');
        if ($sort === 'price_asc' || $sort === 'price_low_high') {
            $products = $products->sortBy('price');
        } elseif ($sort === 'price_desc' || $sort === 'price_high_low') {
            $products = $products->sortByDesc('price');
        }

        // 4. Pagination (10 products per page)
        $total = $products->count();
        $perPage = 10;
        $currentPage = (int) $request->input('page', 1);
        if ($currentPage < 1) {
            $currentPage = 1;
        }

        $pagedData = $products->slice(($currentPage - 1) * $perPage, $perPage)->values();
        $lastPage = (int) ceil($total / $perPage);
        if ($lastPage < 1) {
            $lastPage = 1;
        }

        $from = $total > 0 ? ($currentPage - 1) * $perPage + 1 : 0;
        $to = min($currentPage * $perPage, $total);

        return response()->json([
            'data' => $pagedData->all(),
            'current_page' => $currentPage,
            'last_page' => $lastPage,
            'from' => $from,
            'to' => $to,
            'total' => $total,
        ]);
    }

    /**
     * Web endpoint to return the product listing page.
     */
    public function index(Request $request)
    {
        return view('products.index');
    }
}
