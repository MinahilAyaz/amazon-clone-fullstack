document.addEventListener('DOMContentLoaded', () => {
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
            if (query.trim()) {
                window.location.href = `products.html?q=${encodeURIComponent(query)}`;
            }
        });
    }

    // --- Dashboard Logic ---
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    if (sidebarLinks.length > 0) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href') === 'login.html') return; // Let sign out work
                
                e.preventDefault();
                sidebarLinks.forEach(l => l.classList.remove('sidebar-link--active'));
                link.classList.add('sidebar-link--active');
                
                // In a real app, we'd switch content sections here
                console.log(`Navigating to dashboard section: ${link.dataset.section}`);
            });
        });
    }

    // Mobile Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('dashboard-sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            // We need some CSS for this active state if we wanted it to slide in/out
            // For now, it just toggles display via media queries usually, but 
            // let's add a quick toggle for mobile responsiveness.
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
