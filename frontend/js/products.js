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
        {id: 5, name: 'Noise Cancelling Earbuds', price: 99.00, category: 'electronics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8i1WzlMmIXmmjcV0hnpJI_9k2Gs5n5y0v-Hli25opg&s=10'},
        {id: 6, name: 'Bluetooth Party Speaker', price: 149.00, category: 'electronics', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMdLJU5QOAGGahrMR7sHsQVnJdu00bXUGm6B_F6p-h0Q&s'},
        
        // Fashion (at least 3)
        {id: 7, name: 'Nike Shoes', price: 110.00, category: 'fashion', image: 'data:image/jpeg;base64,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'},
        {id: 8, name: 'Adidas Hoodie', price: 75.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=300'},
        {id: 9, name: 'Levi\'s Jeans', price: 60.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=300'},
        {id: 10, name: 'Classic Leather Watch', price: 85.00, category: 'fashion', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300'},
        {id: 11, name: 'Casual Denim Jacket', price: 65.00, category: 'fashion', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8062uxlhPQGWx-Qxe4mdJbwhrQadG9b34ShxXQCMRQ&s=10'},
        {id: 12, name: 'Running Sports Shoes', price: 120.00, category: 'fashion', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyn5iuxNF_6TlZK5bx30k_Xa66QRpD5czu4zHNjnWQYA&s=10'},
        
        // Books (at least 3)
        {id: 13, name: 'Python Book', price: 35.00, category: 'books', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=300'},
        {id: 14, name: 'JavaScript Guide', price: 28.00, category: 'books', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=300'},
        {id: 15, name: 'Laravel Mastery', price: 45.00, category: 'books', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPfPy-hqqi8AZacb8rgw1lZJvyVr5k9sTk9VUwL3B4w&s=10'},
        {id: 16, name: 'The Great Gatsby Book', price: 15.00, category: 'books', image: 'data:image/jpeg;base64,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'},
        {id: 17, name: 'Learn PHP Laravel Book', price: 29.00, category: 'books', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjFWsKhoXhXJTq6gOfqH8NGpqyfxqwYcE0mdW8Vd3fg&s=10'},

        // Smart Home
        {id: 18, name: 'Smart LED Bulb', price: 25.00, category: 'smart-home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=300'},
        {id: 19, name: 'Smart Wi-Fi Plug', price: 19.00, category: 'smart-home', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOkJqno1RSewcHpE6OxK3g3ulNbYrWscoadqEwIfpeA&s=10'},
        {id: 20, name: 'Smart Security Camera', price: 79.00, category: 'smart-home', image: 'data:image/jpeg;base64,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'},

        // Home Decor
        {id: 21, name: 'Ergonomic Office Chair', price: 220.00, category: 'home-decor', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=300'},
        {id: 22, name: 'Minimalist Wooden Desk', price: 150.00, category: 'home-decor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKJGALrW-lPWj4jlWegSWR147tBZAmBD8ggpnQpzDmT1YgE0KhbKVUs0&s=10'},
        {id: 23, name: 'Vintage Wall Clock', price: 40.00, category: 'home-decor', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaDKXJCBwDMSy3bpYQRgDG8T9DCIxjVAZS7R5PPefgA&s=10'},

        // Kitchen
        {id: 24, name: 'Professional Blender', price: 95.00, category: 'kitchen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNgNGEU3dSoDU8exnbDAm5NzZoXfYNg6kl-myvTfpNw&s=10'},
        {id: 25, name: 'Non-Stick Frying Pan', price: 35.00, category: 'kitchen', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGr8D2-vdV0JRdSzXJ3kNsnLF8-2ncJ7IbdQBbDjkQg&s=10'}
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
