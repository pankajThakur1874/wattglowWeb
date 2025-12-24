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
     * Sticky Navbar - Add shadow on scroll
     */
    function initStickyNavbar() {
        const stickyElement = document.querySelector('.sticky-top');
        if (!stickyElement) return;

        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                stickyElement.classList.add('shadow-sm');
                stickyElement.style.top = '0px';
            } else {
                stickyElement.classList.remove('shadow-sm');
                stickyElement.style.top = '-100px';
            }
        });
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
    function init() {
        initSpinner();
        initAnimations();
        initStickyNavbar();
        initBackToTop();
        initCounters();
        initPortfolio();

        // Wait for components to load before initializing carousels
        // (they might be in dynamically loaded content)
        document.addEventListener('componentsLoaded', function () {
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
