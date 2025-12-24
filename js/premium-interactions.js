/**
 * WattGlow Premium Interactions
 * Scroll-triggered animations, magnetic effects, and micro-interactions
 * Performance-optimized with RequestAnimationFrame
 */

(function() {
    'use strict';

    // ==========================================
    // SCROLL PROGRESS INDICATOR
    // ==========================================

    function initScrollProgress() {
        // Create progress bar
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        // Update on scroll
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        }, { passive: true });
    }

    // ==========================================
    // SCROLL-TRIGGERED ANIMATIONS
    // ==========================================

    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // Add stagger delays to children if they exist
                    const children = entry.target.querySelectorAll('[data-stagger]');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 100}ms`;
                        child.classList.add('fade-slide-up');
                    });

                    // Optionally unobserve after animation
                    if (!entry.target.dataset.repeat) {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all elements with animation classes
        const animatedElements = document.querySelectorAll(
            '.fade-slide-up, .fade-slide-left, .fade-slide-right, .fade-scale, [data-animate]'
        );

        animatedElements.forEach(el => observer.observe(el));
    }

    // ==========================================
    // ANIMATED COUNTERS
    // ==========================================

    function animateCounter(element, target, duration = 2000, suffix = '') {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.ceil(current).toLocaleString() + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString() + suffix;
            }
        };

        updateCounter();
    }

    function initCounters() {
        const counters = document.querySelectorAll('[data-counter]');

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    const target = parseInt(entry.target.dataset.counter);
                    const suffix = entry.target.dataset.suffix || '';
                    animateCounter(entry.target, target, 2500, suffix);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ==========================================
    // PARALLAX EFFECTS
    // ==========================================

    function initParallax() {
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        if (parallaxElements.length === 0) return;

        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;

                    parallaxElements.forEach(element => {
                        const speed = element.dataset.parallax || 0.5;
                        const yPos = -(scrolled * speed);
                        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    });

                    ticking = false;
                });

                ticking = true;
            }
        }, { passive: true });
    }

    // ==========================================
    // MAGNETIC BUTTONS
    // ==========================================

    function initMagneticButtons() {
        const magneticButtons = document.querySelectorAll('.btn-magnetic');

        magneticButtons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.05)`;
            });

            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0) scale(1)';
            });
        });
    }

    // ==========================================
    // INTERACTIVE CARDS
    // ==========================================

    function initInteractiveCards() {
        const cards = document.querySelectorAll('.card-premium');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
            });
        });
    }

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed header

                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================
    // LAZY LOAD ENHANCEMENTS
    // ==========================================

    function initLazyLoad() {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('fade-in');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ==========================================
    // CURSOR FOLLOW EFFECT (Desktop only)
    // ==========================================

    function initCursorEffect() {
        if (window.innerWidth < 1024) return; // Skip on mobile/tablet

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--solar-gold) 0%, transparent 70%);
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: screen;
            opacity: 0;
            transition: opacity 0.3s, transform 0.2s;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursor.style.opacity = '0.6';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.8)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });

        // Enlarge on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, .service-item, .project-item');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    }

    // ==========================================
    // LIVE SOLAR DATA SIMULATION
    // ==========================================

    function initLiveSolarData() {
        const solarDataElement = document.querySelector('[data-solar-live]');
        if (!solarDataElement) return;

        // Simulate real-time solar generation data
        let currentPower = 45; // MW
        let co2Saved = 46280; // Tons

        setInterval(() => {
            // Simulate fluctuation
            currentPower += (Math.random() - 0.5) * 2;
            currentPower = Math.max(40, Math.min(55, currentPower));

            co2Saved += Math.random() * 0.5;

            const powerEl = document.querySelector('[data-live-power]');
            const co2El = document.querySelector('[data-live-co2]');

            if (powerEl) powerEl.textContent = currentPower.toFixed(1);
            if (co2El) co2El.textContent = Math.floor(co2Saved).toLocaleString();
        }, 3000);
    }

    // ==========================================
    // MASONRY LAYOUT FOR PROJECTS
    // ==========================================

    function initMasonryLayout() {
        const grid = document.querySelector('[data-masonry]');
        if (!grid) return;

        // Simple masonry-style layout
        function layoutMasonry() {
            const items = grid.querySelectorAll('.project-item');
            const columns = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            const columnHeights = new Array(columns).fill(0);
            const gap = 20;

            items.forEach((item, index) => {
                const columnIndex = index % columns;
                const x = columnIndex * (item.offsetWidth + gap);
                const y = columnHeights[columnIndex];

                item.style.transform = `translate(${x}px, ${y}px)`;
                item.style.position = 'absolute';

                columnHeights[columnIndex] += item.offsetHeight + gap;
            });

            grid.style.height = Math.max(...columnHeights) + 'px';
            grid.style.position = 'relative';
        }

        // Run on load and resize
        window.addEventListener('load', layoutMasonry);
        window.addEventListener('resize', layoutMasonry);
    }

    // ==========================================
    // PROJECT FILTER
    // ==========================================

    function initProjectFilter() {
        const filterButtons = document.querySelectorAll('[data-filter]');
        const projects = document.querySelectorAll('[data-category]');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Filter projects with animation
                projects.forEach(project => {
                    const category = project.dataset.category;

                    if (filter === 'all' || category === filter) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.classList.add('fade-scale');
                        }, 10);
                    } else {
                        project.style.display = 'none';
                        project.classList.remove('fade-scale');
                    }
                });
            });
        });
    }

    // ==========================================
    // TESTIMONIAL TYPEWRITER EFFECT
    // ==========================================

    function typewriterEffect(element, text, speed = 50) {
        let index = 0;
        element.textContent = '';

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    function initTestimonialEffects() {
        const activeTestimonial = document.querySelector('.testimonial-item.active');
        if (activeTestimonial) {
            const text = activeTestimonial.querySelector('p').dataset.text;
            if (text) {
                typewriterEffect(activeTestimonial.querySelector('p'), text, 30);
            }
        }
    }

    // ==========================================
    // INITIALIZE ALL
    // ==========================================

    function init() {
        // Wait for DOM and components to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runInit);
        } else {
            runInit();
        }

        // Also listen for components loaded event
        document.addEventListener('componentsLoaded', () => {
            setTimeout(runInit, 100);
        });
    }

    function runInit() {
        console.log('🌟 Initializing WattGlow Premium Interactions...');

        initScrollProgress();
        initScrollAnimations();
        initCounters();
        initParallax();
        initMagneticButtons();
        initInteractiveCards();
        initSmoothScroll();
        initLazyLoad();
        initCursorEffect();
        initLiveSolarData();
        initMasonryLayout();
        initProjectFilter();

        console.log('✨ Premium interactions loaded!');
    }

    // Start initialization
    init();

    // Expose utilities globally for use in other scripts
    window.WattGlowInteractions = {
        animateCounter,
        typewriterEffect,
        initTestimonialEffects
    };

})();
