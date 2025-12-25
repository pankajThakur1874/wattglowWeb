/**
 * Component Loader for WattGlow Website
 * Loads navbar and footer components with dynamic path handling
 */

(function() {
    'use strict';

    /**
     * Calculate base path based on current URL depth
     * Examples:
     * - / → ""
     * - /about/ → "../"
     * - /offering/ground/ → "../../"
     */
    function getBasePath() {
        const path = window.location.pathname;

        // Remove trailing slash if present
        const cleanPath = path.endsWith('/') ? path.slice(0, -1) : path;

        // Remove filename if present (e.g., index.html)
        const pathWithoutFile = cleanPath.replace(/\/[^/]*\.[^/]*$/, '');

        // Count directory depth
        const parts = pathWithoutFile.split('/').filter(part => part.length > 0);
        const depth = parts.length;

        // Generate base path
        if (depth === 0) {
            return './'; // Root directory
        } else {
            return '../'.repeat(depth);
        }
    }

    /**
     * Load component HTML file
     */
    async function loadComponent(componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.text();
        } catch (error) {
            console.error(`Error loading component ${componentPath}:`, error);
            return null;
        }
    }

    /**
     * Replace placeholders in component HTML
     */
    function replacePlaceholders(html, basePath) {
        return html.replace(/\{\{BASE_PATH\}\}/g, basePath);
    }

    /**
     * Set active navigation link based on current page
     */
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            // Check if current path matches link href
            if (href && (
                currentPath === href ||
                currentPath.includes(href) && href !== './' && href !== '../'
            )) {
                link.classList.add('active');
            }
        });

        // Special case for home page
        if (currentPath === '/' || currentPath.endsWith('index.html')) {
            const homeLink = document.querySelector('.navbar-nav .nav-link[href*="/"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }

    /**
     * Initialize components
     */
    async function init() {
        const basePath = getBasePath();
        const componentsPath = basePath + 'components/';

        // Load navbar
        const navbarPlaceholder = document.getElementById('navbar-placeholder');
        if (navbarPlaceholder) {
            const navbarHTML = await loadComponent(componentsPath + 'navbar.html');
            if (navbarHTML) {
                navbarPlaceholder.innerHTML = replacePlaceholders(navbarHTML, basePath);
                setActiveNavLink();
                
                // Ensure navbar is fixed immediately after loading - multiple attempts
                function fixNavbarPosition() {
                    const navbar = document.querySelector('.navbar');
                    if (navbar) {
                        // Force fixed positioning via inline styles
                        navbar.style.position = 'fixed';
                        navbar.style.top = '0';
                        navbar.style.left = '0';
                        navbar.style.right = '0';
                        navbar.style.width = '100%';
                        navbar.style.zIndex = '1030';
                        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                        
                        // Remove any conflicting classes that might interfere
                        navbar.classList.remove('sticky-top');
                        navbar.classList.add('navbar-fixed');
                        
                        return true;
                    }
                    return false;
                }
                
                // Try immediately
                if (!fixNavbarPosition()) {
                    // Try after a short delay
                    // Optimized - single call with requestAnimationFrame
                    requestAnimationFrame(() => {
                        setTimeout(fixNavbarPosition, 100);
                    });
                }
            } else {
                console.error('Failed to load navbar component');
            }
        }

        // Load footer
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            const footerHTML = await loadComponent(componentsPath + 'footer.html');
            if (footerHTML) {
                footerPlaceholder.innerHTML = replacePlaceholders(footerHTML, basePath);
            } else {
                console.error('Failed to load footer component');
            }
        }

        // Dispatch custom event to signal components are loaded
        document.dispatchEvent(new Event('componentsLoaded'));
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
