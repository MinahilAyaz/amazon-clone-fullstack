// Global Mock Products Catalog
window.productsCatalog = {
    '1': {
        id: 1,
        name: 'Sony Wireless Headphones',
        price: 199.00,
        category: 'electronics',
        rating: 4.5,
        reviews: 247,
        stock: 50,
        description: 'Premium wireless headphones with industry-leading noise cancellation, exceptional sound quality, and up to 30 hours of battery life. Perfect for travel, work, and everyday listening.',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'John Doe', text: 'Amazing headphones! Best purchase ever', helpful: 45, unhelpful: 2 },
            { rating: 4, author: 'Sarah Smith', text: 'Good quality, fast delivery', helpful: 23, unhelpful: 1 },
            { rating: 3, author: 'Mike Johnson', text: 'Decent product but a bit pricey', helpful: 12, unhelpful: 5 }
        ]
    },
    '2': {
        id: 2,
        name: 'Classic Leather Watch',
        price: 85.00,
        category: 'fashion',
        rating: 4.3,
        reviews: 156,
        stock: 100,
        description: 'Timeless classic leather watch featuring a stainless steel case, genuine leather strap, and precise quartz movement. Elevate your formal or casual attire with this stunning accessory.',
        images: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Alice Cooper', text: 'Looks so elegant. Love the strap!', helpful: 18, unhelpful: 0 },
            { rating: 4, author: 'Robert Dow', text: 'Nice watch, holds time well.', helpful: 7, unhelpful: 1 }
        ]
    },
    '3': {
        id: 3,
        name: 'Running Sports Shoes',
        price: 120.00,
        category: 'fashion',
        rating: 4.6,
        reviews: 320,
        stock: 25,
        description: 'High-performance running shoes designed for ultimate comfort and support. Features lightweight breathable mesh, responsive foam cushioning, and a durable rubber outsole.',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Usain B.', text: 'Very comfortable for long runs.', helpful: 64, unhelpful: 3 },
            { rating: 4, author: 'Emma Watson', text: 'Perfect fit, but took time to arrive.', helpful: 19, unhelpful: 2 }
        ]
    },
    '4': {
        id: 4,
        name: 'Smart LED Bulb',
        price: 25.00,
        category: 'smart-home',
        rating: 4.2,
        reviews: 89,
        stock: 12,
        description: 'Wi-Fi enabled smart LED bulb with millions of colors and tunable white. Control via smartphone app or voice command with Alexa and Google Assistant.',
        images: [
            'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Thomas A.', text: 'Super easy setup. Works great with Alexa!', helpful: 31, unhelpful: 1 },
            { rating: 3, author: 'David L.', text: 'A bit bright even at lowest setting.', helpful: 5, unhelpful: 0 }
        ]
    },
    '5': {
        id: 5,
        name: 'Ergonomic Office Chair',
        price: 220.00,
        category: 'home-decor',
        rating: 4.7,
        reviews: 142,
        stock: 5,
        description: 'Ergonomically designed office chair with high-back breathable mesh, adjustable headrest, armrests, lumbar support, and tilt mechanism for maximum comfort.',
        images: [
            'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Clara S.', text: 'Helped my back pain immensely. Easy to assemble.', helpful: 42, unhelpful: 1 },
            { rating: 4, author: 'Frank G.', text: 'Great chair, very adjustable.', helpful: 15, unhelpful: 0 }
        ]
    },
    '6': {
        id: 6,
        name: 'Minimalist Wooden Desk',
        price: 150.00,
        category: 'home-decor',
        rating: 4.4,
        reviews: 95,
        stock: 15,
        description: 'Sturdy wooden study and computer desk with steel frames, spacious tabletop, and modern minimalist design. Ideal for home office use.',
        images: [
            'https://images.unsplash.com/photo-1513519245088-0e12902e35a6?auto=format&fit=crop&q=80&w=600',
            'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Jane D.', text: 'Very stable and looks lovely.', helpful: 14, unhelpful: 0 },
            { rating: 4, author: 'Leo M.', text: 'Easy to clean, but corners are sharp.', helpful: 3, unhelpful: 1 }
        ]
    },
    '7': {
        id: 7,
        name: 'Professional Blender',
        price: 95.00,
        category: 'kitchen',
        rating: 4.5,
        reviews: 188,
        stock: 40,
        description: 'Powerful countertop professional blender for making smoothies, shakes, and food prep. Features high-speed motor and durable stainless steel blades.',
        images: [
            'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Katy P.', text: 'Crushes ice like nothing. Smoothies are perfect!', helpful: 29, unhelpful: 1 }
        ]
    },
    '8': {
        id: 8,
        name: 'The Great Gatsby Book',
        price: 15.00,
        category: 'books',
        rating: 4.8,
        reviews: 512,
        stock: 200,
        description: 'The legendary masterpiece novel by F. Scott Fitzgerald. A quintessential American classic depicting high society during the roaring twenties.',
        images: [
            'https://images.unsplash.com/photo-1524578271613-d550eebad500?auto=format&fit=crop&q=80&w=600'
        ],
        reviews_data: [
            { rating: 5, author: 'Nick C.', text: 'A gorgeous book. Must-read for everyone.', helpful: 105, unhelpful: 2 }
        ]
    }
};

// Global JS Functions
window.updateCartCount = function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((total, item) => total + parseInt(item.quantity || 0, 10), 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
};

window.updateActiveNavLink = function() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    
    // Find all links in both header utility, secondary navbar, and sidebar
    const links = document.querySelectorAll('.navbar-top a, .navbar-secondary a, .sidebar-link');
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            const cleanHref = href.split('?')[0];
            if (cleanHref === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
};

window.toggleDepartmentDropdown = function() {
    const dropdown = document.getElementById('departments-dropdown');
    if (dropdown) {
        const isHidden = dropdown.style.display === 'none' || dropdown.style.display === '';
        dropdown.style.display = isHidden ? 'flex' : 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Run initial flow
    window.updateCartCount();
    window.updateActiveNavLink();

    // Toggle dropdown
    const allMenuToggle = document.getElementById('all-menu-toggle');
    if (allMenuToggle) {
        allMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.toggleDepartmentDropdown();
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('departments-dropdown');
        if (dropdown && dropdown.style.display === 'flex') {
            if (!dropdown.contains(e.target) && e.target.id !== 'all-menu-toggle') {
                dropdown.style.display = 'none';
            }
        }
    });

    // --- Hero Carousel ---
    const carousel = document.getElementById('hero-carousel');
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let autoAdvanceInterval;

    function showSlide(index) {
        if (!carousel) return;
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;

        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    }

    function startAutoAdvance() {
        if (!carousel) return;
        stopAutoAdvance();
        autoAdvanceInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 4000);
    }

    function stopAutoAdvance() {
        if (autoAdvanceInterval) clearInterval(autoAdvanceInterval);
    }

    if (carousel) {
        // Event Listeners for Controls
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            startAutoAdvance();
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            startAutoAdvance();
        });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                showSlide(i);
                startAutoAdvance();
            });
        });

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoAdvance);
        carousel.addEventListener('mouseleave', startAutoAdvance);

        startAutoAdvance();
    }

    // --- Search Logic ---
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = document.getElementById('search-query').value;
            const category = document.getElementById('search-category-select').value;
            let url = 'products.html?';
            const params = [];
            if (query.trim()) {
                params.push(`q=${encodeURIComponent(query)}`);
            }
            if (category && category !== 'all') {
                params.push(`category=${category}`);
            }
            window.location.href = url + params.join('&');
        });
    }

    // Global Dynamic Header Name Update
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        const navAccount = document.getElementById('nav-account');
        if (navAccount) {
            const line1 = navAccount.querySelector('.line-1');
            if (line1) {
                const firstName = currentUser.name.split(' ')[0];
                line1.textContent = `Hello, ${firstName}`;
            }
        }
    }

    // --- Dashboard & Authentication Logic ---
    const isDashboardPage = window.location.pathname.includes('dashboard.html');
    if (isDashboardPage) {
        if (!currentUser) {
            window.location.href = 'login.html';
            return;
        }

        // 1. Update user info in Sidebar
        const avatarEl = document.querySelector('.sidebar-user .avatar');
        if (avatarEl) {
            const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
            avatarEl.textContent = initials;
        }

        const nameEl = document.querySelector('.sidebar-user p[style="font-weight: bold;"]');
        if (nameEl) {
            nameEl.textContent = currentUser.name;
        }

        // 2. Mock Orders associated with the logged-in user
        const ordersData = [
            {
                id: '1001',
                date: 'May 5, 2024',
                status: 'Delivered',
                statusClass: 'badge--success',
                address: `${currentUser.name}\n123 Main Street\nLahore`,
                items: [
                    { name: 'iPhone 14 Pro', qty: 1, price: 999.00 },
                    { name: 'AirPods', qty: 2, price: 199.00 }
                ],
                total: 1397.00
            },
            {
                id: '10293',
                date: 'May 10, 2026',
                status: 'Delivered',
                statusClass: 'badge--success',
                address: `${currentUser.name}\n123 Main Street\nLahore`,
                items: [
                    { name: 'Sony Headphones', qty: 1, price: 199.00 },
                    { name: 'USB Cable', qty: 1, price: 16.00 }
                ],
                total: 215.00
            },
            {
                id: '10285',
                date: 'May 05, 2026',
                status: 'Delivered',
                statusClass: 'badge--success',
                address: `${currentUser.name}\n123 Main Street\nLahore`,
                items: [
                    { name: 'Mechanical Keyboard', qty: 1, price: 120.00 }
                ],
                total: 120.00
            },
            {
                id: '10271',
                date: 'April 28, 2026',
                status: 'Processing',
                statusClass: 'badge--warning',
                address: `${currentUser.name}\n123 Main Street\nLahore`,
                items: [
                    { name: 'Gaming Mouse', qty: 1, price: 45.00 }
                ],
                total: 45.00
            },
            {
                id: '10255',
                date: 'April 15, 2026',
                status: 'Cancelled',
                statusClass: 'badge--error',
                address: `${currentUser.name}\n123 Main Street\nLahore`,
                items: [
                    { name: 'Smart Watch', qty: 1, price: 85.00 }
                ],
                total: 85.00
            },
            {
                id: '10240',
                date: 'April 02, 2026',
                status: 'Delivered',
                statusClass: 'badge--success',
                address: `${currentUser.name}\n123 Main Street\nLahore`,
                items: [
                    { name: 'Laptop Stand', qty: 1, price: 35.00 }
                ],
                total: 35.00
            }
        ];

        // Populate Dashboard orders table
        const $tbody = $('#orders-table-body');
        if ($tbody.length > 0) {
            $tbody.empty();
            ordersData.forEach(order => {
                const itemsText = order.items.map(item => item.name).join(', ');
                const rowHtml = `
                    <tr>
                        <td>#${order.id}</td>
                        <td>${order.date}</td>
                        <td>${itemsText}</td>
                        <td>$${order.total.toFixed(2)}</td>
                        <td><span class="badge ${order.statusClass}">${order.status}</span></td>
                        <td><button class="btn-ghost view-order-details-btn" data-id="${order.id}" style="cursor: pointer; text-decoration: underline;">View Details</button></td>
                    </tr>
                `;
                $tbody.append(rowHtml);
            });
        }

        // View Order Details Handler
        $(document).on('click', '.view-order-details-btn', function(e) {
            e.preventDefault();
            const orderId = $(this).data('id').toString();
            const order = ordersData.find(o => o.id === orderId);
            if (order) {
                $('#detail-order-number').text(`ORDER #${order.id}`);
                $('#detail-order-date').text(order.date);
                
                const statusBadge = $('#detail-order-status');
                statusBadge.text(order.status)
                           .attr('class', `badge ${order.statusClass}`);
                
                $('#detail-shipping-address').html(order.address.replace(/\n/g, '<br>'));

                // Render items list
                const $itemsTbody = $('#detail-order-items-tbody');
                $itemsTbody.empty();
                order.items.forEach(item => {
                    const itemTotal = item.qty * item.price;
                    const itemRow = `
                        <tr>
                            <td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border);">${item.name}</td>
                            <td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: center;">${item.qty}</td>
                            <td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: right;">$${item.price.toFixed(2)}</td>
                            <td style="padding: var(--space-sm); border-bottom: 1px solid var(--color-border); text-align: right;">$${itemTotal.toFixed(2)}</td>
                        </tr>
                    `;
                    $itemsTbody.append(itemRow);
                });

                $('#detail-order-total').text(`$${order.total.toFixed(2)}`);

                // Switch views
                $('#orders-list-section').hide();
                $('#order-details-section').show();
            }
        });

        // Back to Orders Handler
        $('#back-to-orders-btn').on('click', function(e) {
            e.preventDefault();
            $('#order-details-section').hide();
            $('#orders-list-section').show();
        });

        // Sidebar Navigation highlights (Simulated link clicks)
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        if (sidebarLinks.length > 0) {
            sidebarLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    if (link.getAttribute('href') === 'login.html') {
                        localStorage.removeItem('currentUser');
                        return; // Let standard navigation sign out
                    }
                    
                    e.preventDefault();
                    sidebarLinks.forEach(l => l.classList.remove('sidebar-link--active'));
                    link.classList.add('sidebar-link--active');
                });
            });
        }
    }

    // Mobile Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('dashboard-sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            if (window.innerWidth <= 768) {
                sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
            }
        });

        // Show toggle button on small screens
        function checkWidth() {
            if (window.innerWidth <= 768) {
                sidebarToggle.style.display = 'flex';
                sidebar.style.display = 'none';
            } else {
                sidebarToggle.style.display = 'none';
                sidebar.style.display = 'block';
            }
        }
        window.addEventListener('resize', checkWidth);
        checkWidth();
    }

    // --- Back to Top ---
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
