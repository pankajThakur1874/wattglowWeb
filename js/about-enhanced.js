/**
 * Enhanced About Section - Circular Progress Animation
 * Animates circular progress indicators when they come into view
 */

(function() {
    'use strict';

    /**
     * Animate circular progress indicator using SVG
     */
    function animateCircularProgress(wrapper) {
        const percentValue = wrapper.querySelector('.percent-value');
        const progressBar = wrapper.querySelector('.circular-progress-bar');
        
        if (!progressBar || !percentValue) return;
        
        const targetPercent = parseInt(percentValue.getAttribute('data-target')) || 0;
        
        // Get radius from SVG (default 54 for desktop, 46 for mobile)
        const svg = wrapper.querySelector('.circular-progress-svg');
        const radius = svg ? parseFloat(svg.querySelector('circle').getAttribute('r')) || 54 : 54;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (targetPercent / 100) * circumference;
        
        // Set initial state
        progressBar.style.strokeDasharray = circumference;
        progressBar.style.strokeDashoffset = circumference;
        percentValue.textContent = '0%';
        
        // Animate the progress
        let currentPercent = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            currentPercent = Math.floor(easeOut * targetPercent);
            
            // Update text
            percentValue.textContent = currentPercent + '%';
            
            // Update SVG stroke-dashoffset
            const currentOffset = circumference - (easeOut * targetPercent / 100) * circumference;
            progressBar.style.strokeDashoffset = currentOffset;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final value is set
                percentValue.textContent = targetPercent + '%';
                progressBar.style.strokeDashoffset = offset;
            }
        }
        
        // Small delay for better visual effect
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, 100);
    }

    /**
     * Initialize circular progress animations using Intersection Observer
     */
    function initCircularProgress() {
        const progressWrappers = document.querySelectorAll('.circular-progress-wrapper');
        if (progressWrappers.length === 0) return;

        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    animateCircularProgress(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        progressWrappers.forEach(wrapper => {
            observer.observe(wrapper);
        });
    }

    /**
     * Initialize when DOM is ready
     */
    function init() {
        // Wait for components to load
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initCircularProgress);
        } else {
            initCircularProgress();
        }

        // Also listen for components loaded event
        document.addEventListener('componentsLoaded', () => {
            setTimeout(initCircularProgress, 100);
        });
    }

    init();
})();

