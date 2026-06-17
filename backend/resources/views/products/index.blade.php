<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon Clone | Product Listing</title>
    <link rel="stylesheet" href="css/style.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <!-- Top Utility Bar -->
    <nav class="navbar-top">
        <a href="index.html" class="navbar-logo">amazon<span>.clone</span></a>
        
        <form class="navbar-search" id="search-form">
            <select class="search-select" id="search-category-select">
                <option value="all">All Departments</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="smart-home">Smart Home</option>
                <option value="home-decor">Home Decor</option>
                <option value="kitchen">Kitchen</option>
                <option value="books">Books</option>
            </select>
            <input type="text" class="search-input" placeholder="Search Amazon" id="search-query">
            <button type="submit" class="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
        </form>
 
        <div class="navbar-links">
            <a href="login.html" class="nav-link" id="nav-account">
                <span class="line-1">Hello, sign in</span>
                <span class="line-2">Account & Lists</span>
            </a>
            <a href="dashboard.html" class="nav-link" id="nav-orders">
                <span class="line-1">Returns</span>
                <span class="line-2">& Orders</span>
            </a>
            <a href="cart.html" class="nav-link" id="nav-cart" style="position: relative;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span id="cart-count" class="cart-badge">0</span>
            </a>
        </div>
    </nav>
 
    <!-- Secondary Nav Bar -->
    <div class="navbar-secondary" style="position: relative;">
        <a href="products.html" id="all-menu-toggle" style="display: flex; align-items: center; gap: 5px; font-weight: bold;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            All
        </a>
        <a href="products.html?filter=deals">Today's Deals</a>
        <a href="#">Customer Service</a>
        <a href="#">Registry</a>
        <a href="#">Sell</a>
        <div style="flex: 1;"></div>
        <a href="#" style="font-weight: bold;">Shop deals in Electronics</a>
 
        <!-- Departments Dropdown -->
        <div class="departments-dropdown" id="departments-dropdown">
            <a href="products.html?category=electronics">Electronics</a>
            <a href="products.html?category=fashion">Fashion</a>
            <a href="products.html?category=smart-home">Smart Home</a>
            <a href="products.html?category=home-decor">Home Decor</a>
            <a href="products.html?category=kitchen">Kitchen</a>
            <a href="products.html?category=books">Books</a>
        </div>
    </div>
 
    <!-- Layout Container (Sidebar + Grid Content) -->
    <div class="dashboard-container">
        <!-- Sidebar Category Filters -->
        <aside class="sidebar">
            <div class="filter-title">Filter by Category</div>
            <nav class="category-filter-list" id="category-filter-list">
                <a class="category-filter-item active" data-category="all">All Departments</a>
                <a class="category-filter-item" data-category="electronics">Electronics</a>
                <a class="category-filter-item" data-category="fashion">Fashion</a>
                <a class="category-filter-item" data-category="smart-home">Smart Home</a>
                <a class="category-filter-item" data-category="home-decor">Home Decor</a>
                <a class="category-filter-item" data-category="kitchen">Kitchen</a>
                <a class="category-filter-item" data-category="books">Books</a>
            </nav>
        </aside>
 
        <!-- Main Product Section -->
        <main class="dashboard-content">
            <!-- Breadcrumb Navigation -->
            <div class="breadcrumb" id="products-breadcrumb">
                <a href="index.html">Home</a> &gt; 
                <span>Product Results</span>
            </div>
 
            <div class="products-header">
                <div>
                    <h1 style="font-size: 1.5rem; font-weight: bold;" id="results-title">Results</h1>
                    <span id="results-count" style="font-size: 0.875rem; color: var(--color-text-secondary);">Showing 0 results</span>
                </div>
                <!-- Sort Dropdown -->
                <div>
                    <label for="sort-select" style="font-size: 0.875rem; margin-right: var(--space-sm); font-weight: bold;">Sort by:</label>
                    <select id="sort-select" class="sort-select">
                        <option value="featured">Featured</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                    </select>
                </div>
            </div>
 
            <!-- Products Grid -->
            <div class="products-grid" id="products-grid">
                <!-- Dynamically populated via AJAX -->
            </div>
 
            <!-- Pagination Container -->
            <div class="pagination-container" id="pagination-container">
                <!-- Dynamically populated via AJAX -->
            </div>
        </main>
    </div>
 
    <!-- Footer -->
    <footer>
        <button class="back-to-top" id="back-to-top">Back to top</button>
        <div class="footer-links">
            <div class="footer-column">
                <h3>Get to Know Us</h3>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">About Amazon</a>
                <a href="#">Investor Relations</a>
                <a href="#">Amazon Devices</a>
                <a href="#">Amazon Science</a>
            </div>
            <div class="footer-column">
                <h3>Make Money with Us</h3>
                <a href="#">Sell products on Amazon</a>
                <a href="#">Sell on Amazon Business</a>
                <a href="#">Sell apps on Amazon</a>
                <a href="#">Become an Affiliate</a>
                <a href="#">Advertise Your Products</a>
                <a href="#">Self-Publish with Us</a>
            </div>
            <div class="footer-column">
                <h3>Amazon Payment Products</h3>
                <a href="#">Amazon Business Card</a>
                <a href="#">Shop with Points</a>
                <a href="#">Reload Your Balance</a>
                <a href="#">Amazon Currency Converter</a>
            </div>
            <div class="footer-column">
                <h3>Let Us Help You</h3>
                <a href="#">Amazon and COVID-19</a>
                <a href="#">Your Account</a>
                <a href="#">Your Orders</a>
                <a href="#">Shipping Rates & Policies</a>
                <a href="#">Returns & Replacements</a>
                <a href="#">Help</a>
            </div>
        </div>
        <div class="footer-bottom">
            <div style="margin-bottom: var(--space-md);">
                <a href="#">Conditions of Use</a> &nbsp; | &nbsp;
                <a href="#">Privacy Notice</a> &nbsp; | &nbsp;
                <a href="#">Interest-Based Ads</a>
            </div>
            <p>&copy; 1996-2026, Amazon.clone, Inc. or its affiliates</p>
        </div>
    </footer>
 
    <!-- Products Logic Script -->
    <script src="js/products.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
