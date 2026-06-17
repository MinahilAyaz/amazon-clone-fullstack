$(document).ready(function() {
    // Current state variables
    let currentCategory = 'all';
    let currentSort = 'featured';
    let currentPage = 1;
    let searchQuery = '';

    // Mock products data for local fallback & catalog seeding
    const mockProducts = [
        // Electronics (at least 3)
        {id: 1, name: 'iPhone 14', price: 999.00, category: 'electronics', image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&q=80&w=300'},
        {id: 2, name: 'Samsung S23', price: 899.00, category: 'electronics', image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300'},
        {id: 3, name: 'iPad', price: 599.00, category: 'electronics', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300'},
        {id: 4, name: 'Sony Wireless Headphones', price: 199.00, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'},
        {id: 5, name: 'Noise Cancelling Earbuds', price: 99.00, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'},
        {id: 6, name: 'Bluetooth Party Speaker', price: 149.00, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300'},
        
        // Fashion (at least 3)
        {id: 7, name: 'Nike Shoes', price: 110.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300'},
        {id: 8, name: 'Adidas Hoodie', price: 75.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=300'},
        {id: 9, name: 'Levi\'s Jeans', price: 60.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300'},
        {id: 10, name: 'Classic Leather Watch', price: 85.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300'},
        {id: 11, name: 'Casual Denim Jacket', price: 65.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b830c6050?auto=format&fit=crop&q=80&w=300'},
        {id: 12, name: 'Running Sports Shoes', price: 120.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300'},
        
        // Books (at least 3)
        {id: 13, name: 'Python Book', price: 35.00, category: 'books', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=300'},
        {id: 14, name: 'JavaScript Guide', price: 28.00, category: 'books', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300'},
        {id: 15, name: 'Laravel Mastery', price: 45.00, category: 'books', image: 'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=300'},
        {id: 16, name: 'The Great Gatsby Book', price: 15.00, category: 'books', image: 'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=300'},
        {id: 17, name: 'Learn PHP Laravel Book', price: 29.00, category: 'books', image: 'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=300'},

        // Smart Home
        {id: 18, name: 'Smart LED Bulb', price: 25.00, category: 'smart-home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=300'},
        {id: 19, name: 'Smart Wi-Fi Plug', price: 19.00, category: 'smart-home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=300'},
        {id: 20, name: 'Smart Security Camera', price: 79.00, category: 'smart-home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500'},

        // Home Decor
        {id: 21, name: 'Ergonomic Office Chair', price: 220.00, category: 'home-decor', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=300'},
        {id: 22, name: 'Minimalist Wooden Desk', price: 150.00, category: 'home-decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=500'},
        {id: 23, name: 'Vintage Wall Clock', price: 40.00, category: 'home-decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=500'},

        // Kitchen
        {id: 24, name: 'Professional Blender', price: 95.00, category: 'kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=300'},
        {id: 25, name: 'Non-Stick Frying Pan', price: 35.00, category: 'kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=300'}
    ];

    // Seed the global productsCatalog so that product-detail.html works perfectly
    window.productsCatalog = window.productsCatalog || {};
    mockProducts.forEach(p => {
        if (!window.productsCatalog[p.id.toString()]) {
            window.productsCatalog[p.id.toString()] = {
                id: p.id,
                name: p.name,
                price: p.price,
                category: p.category,
                rating: 4.5,
                reviews: 120,
                stock: 20,
                description: `High-quality ${p.name} from the ${p.category} category. Built to last and highly rated by customers.`,
                images: [p.image],
                reviews_data: [
                    { rating: 5, author: 'Verified Buyer', text: 'Outstanding build quality and value for money!', helpful: 14, unhelpful: 0 }
                ]
            };
        }
    });

    // Read initial query params
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('category')) {
        currentCategory = urlParams.get('category').toLowerCase();
        // Set active class in filter list
        $(`.category-filter-item`).removeClass('active');
        $(`.category-filter-item[data-category="${currentCategory}"]`).addClass('active');
        $(`#search-category-select`).val(currentCategory);
    }
    if (urlParams.has('q')) {
        searchQuery = urlParams.get('q');
        $(`#search-query`).val(searchQuery);
    } else if (urlParams.has('search')) {
        searchQuery = urlParams.get('search');
        $(`#search-query`).val(searchQuery);
    }
    if (urlParams.has('sort')) {
        currentSort = urlParams.get('sort');
        $(`#sort-select`).val(currentSort);
    }
    if (urlParams.has('page')) {
        currentPage = parseInt(urlParams.get('page'), 10) || 1;
    }

    // Load initial products list
    loadProducts();

    // Event Handler: Category Filter (AJAX)
    $(document).on('click', '.category-filter-item', function(e) {
        e.preventDefault();
        currentCategory = $(this).data('category');
        currentPage = 1; // Reset to page 1 on filter
        
        $('.category-filter-item').removeClass('active');
        $(this).addClass('active');
        
        $(`#search-category-select`).val(currentCategory);
        
        updateUrl();
        loadProducts();
    });

    // Event Handler: Sort select (AJAX)
    $(`#sort-select`).on('change', function() {
        currentSort = $(this).val();
        currentPage = 1; // Reset to page 1 on sort
        updateUrl();
        loadProducts();
    });

    // Bulletproof Event Handler: Search form submit (AJAX)
    // Clear conflicting listeners from main.js on products.html page by cloning
    const oldSearchForm = document.getElementById('search-form');
    if (oldSearchForm) {
        const newSearchForm = oldSearchForm.cloneNode(true);
        oldSearchForm.parentNode.replaceChild(newSearchForm, oldSearchForm);
    }

    $(`#search-form`).on('submit', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        
        searchQuery = $(`#search-query`).val();
        currentCategory = $(`#search-category-select`).val();
        currentPage = 1; // Reset to page 1 on search
        
        // Update sidebar highlight
        $('.category-filter-item').removeClass('active');
        $(`.category-filter-item[data-category="${currentCategory}"]`).addClass('active');

        updateUrl();
        loadProducts();
    });

    // Event Handler: Pagination Button Click (AJAX)
    $(document).on('click', '.pagination-btn', function() {
        if ($(this).hasClass('active') || $(this).prop('disabled')) return;
        currentPage = $(this).data('page');
        updateUrl();
        loadProducts();
    });

    // Add to Cart handler
    $(document).on('click', '.add-to-cart-btn', function(e) {
        e.preventDefault();
        const id = $(this).data('id').toString();
        const qty = 1;
        
        const product = mockProducts.find(p => p.id.toString() === id);
        if (product) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existing = cart.find(item => item.id === id);
            if (existing) {
                existing.quantity += qty;
            } else {
                cart.push({
                    id: id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: qty
                });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            window.updateCartCount();
            
            const $btn = $(this);
            const originalText = $btn.text();
            $btn.text('Added!').css({
                'background': 'var(--color-success)',
                'color': 'white'
            });
            setTimeout(() => {
                $btn.text(originalText).css({
                    'background': '',
                    'color': ''
                });
            }, 1500);
        }
    });

    // Function to load products
    function loadProducts() {
        updateBreadcrumb();
        const params = {
            category: currentCategory,
            sort: currentSort,
            page: currentPage,
            search: searchQuery
        };

        const apiUrl = window.location.hostname ? '/api/products' : 'http://localhost:8000/api/products';

        // Display loading state spinner inside the grid
        const $grid = $('#products-grid');
        $grid.html('<div class="loading-spinner-wrapper"><div class="loading-spinner"></div><p>Loading products...</p></div>');

        // Perform AJAX Request
        $.ajax({
            url: apiUrl,
            method: 'GET',
            data: params,
            dataType: 'json',
            success: function(response) {
                renderProducts(response.data);
                renderPagination(response.current_page, response.last_page);
                updateResultsCount(response.from || 0, response.to || 0, response.total || 0);
            },
            error: function(xhr, status, error) {
                console.warn('Backend server not responding. Falling back to frontend mock data filtering/sorting/pagination.');
                loadMockData(params);
            }
        });
    }

    // Local client-side mock data processor
    function loadMockData(params) {
        let filtered = [...mockProducts];

        // Search Query filter
        const query = params.search || params.q;
        if (query) {
            filtered = filtered.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
        }

        // Category filter
        if (params.category && params.category !== 'all') {
            filtered = filtered.filter(p => p.category.toLowerCase() === params.category.toLowerCase());
        }

        // Price Sort filter
        if (params.sort === 'price_asc' || params.sort === 'price_low_high') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (params.sort === 'price_desc' || params.sort === 'price_high_low') {
            filtered.sort((a, b) => b.price - a.price);
        }

        // Pagination calculations (10 products per page)
        const perPage = 10;
        const totalItems = filtered.length;
        const totalPages = Math.ceil(totalItems / perPage) || 1;
        let page = params.page || 1;
        if (page > totalPages) page = totalPages;
        if (page < 1) page = 1;

        const startIndex = (page - 1) * perPage;
        const endIndex = Math.min(startIndex + perPage, totalItems);
        const pagedData = filtered.slice(startIndex, endIndex);

        renderProducts(pagedData);
        renderPagination(page, totalPages);
        updateResultsCount(totalItems > 0 ? startIndex + 1 : 0, endIndex, totalItems);
    }

    // Helper to render products grid (No inline style tags)
    function renderProducts(products) {
        const $grid = $('#products-grid');
        $grid.empty();

        if (!products || products.length === 0) {
            $grid.html('<div class="no-products-msg">No products found matching your search.</div>');
            return;
        }

        products.forEach(product => {
            const cardHtml = `
                <div class="product-card">
                    <a href="product-detail.html?id=${product.id}" class="product-image-link">
                        <img src="${product.image}" alt="${product.name}">
                    </a>
                    <span class="product-card-category">${product.category.replace('-', ' ')}</span>
                    <h3 class="product-card-title">
                        <a href="product-detail.html?id=${product.id}">${product.name}</a>
                    </h3>
                    <span class="price">$${parseFloat(product.price).toFixed(2)}</span>
                    <button class="btn-primary add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            $grid.append(cardHtml);
        });
    }

    // Helper to render pagination controls
    function renderPagination(currentPage, totalPages) {
        const $pagination = $('#pagination-container');
        $pagination.empty();

        if (totalPages <= 1) return;

        // Previous button
        const prevDisabled = currentPage === 1 ? 'disabled' : '';
        $pagination.append(`<button class="pagination-btn" id="prev-page" ${prevDisabled} data-page="${currentPage - 1}">Previous</button>`);

        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            const activeClass = currentPage === i ? 'active' : '';
            $pagination.append(`<button class="pagination-btn ${activeClass}" data-page="${i}">${i}</button>`);
        }

        // Next button
        const nextDisabled = currentPage === totalPages ? 'disabled' : '';
        $pagination.append(`<button class="pagination-btn" id="next-page" ${nextDisabled} data-page="${currentPage + 1}">Next</button>`);
    }

    // Helper to update result description count
    function updateResultsCount(from, to, total) {
        const $countEl = $('#results-count');
        if (total === 0) {
            $countEl.text('Showing 0 results');
        } else {
            $countEl.text(`Showing ${from}-${to} of ${total} results`);
        }
    }

    // Helper to update window URL parameters without page refresh
    function updateUrl() {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('category', currentCategory);
        newUrl.searchParams.set('sort', currentSort);
        newUrl.searchParams.set('page', currentPage);
        if (searchQuery) {
            newUrl.searchParams.set('search', searchQuery);
            newUrl.searchParams.delete('q'); // Clean up any duplicate 'q'
        } else {
            newUrl.searchParams.delete('search');
            newUrl.searchParams.delete('q');
        }
        window.history.pushState({ path: newUrl.href }, '', newUrl.href);
    }

    // Helper to update breadcrumb
    function updateBreadcrumb() {
        const $breadcrumb = $('#products-breadcrumb');
        if ($breadcrumb.length === 0) return;
        $breadcrumb.empty();
        $breadcrumb.append('<a href="index.html">Home</a> &gt; ');
        if (currentCategory && currentCategory !== 'all') {
            const formattedCategory = currentCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            $breadcrumb.append(`<a href="products.html?category=${currentCategory}">${formattedCategory}</a> &gt; `);
        }
        $breadcrumb.append('<span>Product Results</span>');
    }
});
