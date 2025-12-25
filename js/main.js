/**
 * Main JavaScript for WattGlow Website
 * Vanilla JavaScript (No jQuery dependency)
 */

(function () {
    'use strict';

    /**
     * Spinner - Hide loading spinner after page load
     */
    function initSpinner() {
        setTimeout(function () {
            const spinner = document.getElementById('spinner');
            if (spinner) {
                spinner.classList.remove('show');
            }
        }, 1);
    }

    /**
     * Initialize WOW.js animations
     */
    function initAnimations() {
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }
    }

    /**
     * Fixed Navbar - Always visible, enhanced on scroll
     */
    function initStickyNavbar() {
        let navbarInitialized = false;
        let scrollHandler = null;

        // Function to apply fixed positioning to navbar
        function applyFixedPosition(navbar) {
            if (!navbar) return;
            
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.left = '0';
            navbar.style.right = '0';
            navbar.style.width = '100%';
            navbar.style.zIndex = '1030';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            
            // Remove sticky-top class that might interfere
            navbar.classList.remove('sticky-top');
        }

        // Function to initialize navbar when it's available
        function setupNavbar() {
            const navbar = document.querySelector('.navbar');
            if (!navbar || navbarInitialized) return false;

            // Apply fixed positioning multiple times to ensure it sticks
            applyFixedPosition(navbar);
            setTimeout(() => applyFixedPosition(navbar), 10);
            setTimeout(() => applyFixedPosition(navbar), 50);
            setTimeout(() => applyFixedPosition(navbar), 100);

            // Add scrolled class on scroll for enhanced styling (only once)
            if (!scrollHandler) {
                scrollHandler = function () {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                };
                window.addEventListener('scroll', scrollHandler, { passive: true });
            }

            navbarInitialized = true;
            return true;
        }

        // Use MutationObserver to watch for navbar being added to DOM
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        if (node.classList && node.classList.contains('navbar')) {
                            setupNavbar();
                        } else if (node.querySelector && node.querySelector('.navbar')) {
                            setupNavbar();
                        }
                    }
                });
            });
        });

        // Observe navbar placeholder for changes
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            observer.observe(navbarPlaceholder, {
                childList: true,
                subtree: true
            });
        }

        // Try to setup immediately
        if (!setupNavbar()) {
            // If navbar not found, wait for components to load
            document.addEventListener('componentsLoaded', function() {
                setTimeout(setupNavbar, 10);
                setTimeout(setupNavbar, 50);
                setTimeout(setupNavbar, 100);
                setTimeout(setupNavbar, 200);
            });
            
            // Also try after delays to catch navbar when it loads
            setTimeout(setupNavbar, 200);
            setTimeout(setupNavbar, 500);
            setTimeout(setupNavbar, 1000);
        }
    }

    /**
     * Back to Top Button
     */
    function initBackToTop() {
        const backToTopBtn = document.querySelector('.back-to-top');
        if (!backToTopBtn) return;

        // Show/hide button on scroll
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
                backToTopBtn.style.opacity = '1';
            } else {
                backToTopBtn.style.opacity = '0';
                setTimeout(() => {
                    if (window.scrollY <= 300) {
                        backToTopBtn.style.display = 'none';
                    }
                }, 300);
            }
        });

        // Smooth scroll to top with easing
        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const duration = 1500;
            const start = window.scrollY;
            const startTime = performance.now();

            function easeInOutExpo(t) {
                if (t === 0) return 0;
                if (t === 1) return 1;
                if (t < 0.5) {
                    return Math.pow(2, 20 * t - 10) / 2;
                }
                return (2 - Math.pow(2, -20 * t + 10)) / 2;
            }

            function scroll(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easing = easeInOutExpo(progress);

                window.scrollTo(0, start * (1 - easing));

                if (progress < 1) {
                    requestAnimationFrame(scroll);
                }
            }

            requestAnimationFrame(scroll);
        });
    }

    /**
     * Counter Animation using Intersection Observer
     */
    function initCounters() {
        const counters = document.querySelectorAll('[data-toggle="counter-up"]');
        if (counters.length === 0) return;

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const animateCounter = (element) => {
            const target = parseInt(element.textContent.replace(/,/g, ''));
            const duration = 2000;
            const step = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    animateCounter(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * Header Carousel initialization
     */
    function initHeaderCarousel() {
        const headerCarousel = document.querySelector('.header-carousel');
        if (!headerCarousel || typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) return;

        jQuery('.header-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true
        });
    }

    /**
     * Testimonials Carousel initialization
     */
    function initTestimonialCarousel() {
        const testimonialCarousel = document.querySelector('.testimonial-carousel');
        if (!testimonialCarousel || typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) return;

        jQuery('.testimonial-carousel').owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }

    /**
     * Logo Carousel initialization (if exists)
     */
    function initLogoCarousel() {
        const logoCarousel = document.querySelector('.logo-carousel');
        if (!logoCarousel || typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) return;

        jQuery('.logo-carousel').owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }

    /**
     * Portfolio Isotope and Filter
     */
    function initPortfolio() {
        const portfolioContainer = document.querySelector('.portfolio-container');
        if (!portfolioContainer || typeof Isotope === 'undefined') return;

        // Initialize Isotope
        const isotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        // Filter buttons
        const filterButtons = document.querySelectorAll('#portfolio-flters li');
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));

                // Add active class to clicked button
                this.classList.add('active');

                // Filter items
                const filterValue = this.dataset.filter;
                isotope.arrange({ filter: filterValue });
            });
        });
    }

    /**
     * Initialize all functions
     */
    /**
     * Scroll-triggered animations
     * Animates elements when they come into viewport
     */
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-slide-up, .slide-in-left, .slide-in-right, .scale-in, .fade-zoom');
        
        if (animatedElements.length === 0) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    // Remove observer after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    /**
     * Add animation classes to key sections
     */
    function addAnimationClasses() {
        // Add animations to feature items
        const featureItems = document.querySelectorAll('.feature-item');
        featureItems.forEach((item, index) => {
            item.classList.add('animate-on-scroll');
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // Add animations to benefit cards
        const benefitCards = document.querySelectorAll('.benefit');
        benefitCards.forEach((card, index) => {
            card.classList.add('animate-on-scroll');
            card.style.animationDelay = `${index * 0.15}s`;
        });

        // Add animations to cards
        const cards = document.querySelectorAll('.card, .card-premium, .career-card');
        cards.forEach((card, index) => {
            if (!card.classList.contains('animate-on-scroll')) {
                card.classList.add('animate-on-scroll');
                card.style.animationDelay = `${index * 0.1}s`;
            }
        });

        // Add slide-in animations to alternating sections
        const sections = document.querySelectorAll('section, .container-fluid');
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                section.classList.add('slide-in-left');
            } else {
                section.classList.add('slide-in-right');
            }
        });
    }

    function init() {
        initSpinner();
        initAnimations();
        initStickyNavbar();
        initBackToTop();
        initCounters();
        initPortfolio();
        addAnimationClasses();
        initScrollAnimations();

        // Wait for components to load before initializing carousels
        // (they might be in dynamically loaded content)
        document.addEventListener('componentsLoaded', function () {
            // Re-initialize navbar after components load
            initStickyNavbar();
            initHeaderCarousel();
            initTestimonialCarousel();
            initLogoCarousel();
        });

        // Also try to initialize immediately in case components are already there
        setTimeout(function () {
            initHeaderCarousel();
            initTestimonialCarousel();
            initLogoCarousel();
        }, 100);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
