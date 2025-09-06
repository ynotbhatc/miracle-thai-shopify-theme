/* Miracle Thai Enterprises - Theme JavaScript */

document.addEventListener('DOMContentLoaded', function() {
    
    // Enhanced floating animations for Thai elements
    function createFloatingElements() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        // Add more floating elements dynamically
        const elements = ['🌺', '🌿', '🍃', '🌱'];
        elements.forEach((emoji, index) => {
            const floater = document.createElement('div');
            floater.className = 'floating-element';
            floater.textContent = emoji;
            floater.style.cssText = `
                position: absolute;
                font-size: ${1.5 + Math.random()}rem;
                opacity: ${0.2 + Math.random() * 0.3};
                animation: float ${3 + Math.random() * 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
                pointer-events: none;
                z-index: 1;
            `;
            
            // Random positioning
            floater.style.left = `${Math.random() * 80 + 10}%`;
            floater.style.top = `${Math.random() * 60 + 20}%`;
            
            hero.appendChild(floater);
        });
    }
    
    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Product card hover effects
    function initProductCardEffects() {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Amazon link tracking
    function initAmazonTracking() {
        const amazonLinks = document.querySelectorAll('.amazon-button, .cta-amazon');
        
        amazonLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Track Amazon clicks for analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        event_category: 'Amazon',
                        event_label: this.textContent.trim(),
                        value: 1
                    });
                }
            });
        });
    }
    
    // Progressive enhancement for mobile navigation
    function initMobileNav() {
        const nav = document.querySelector('.nav');
        const navLinks = document.querySelector('.nav-links');
        
        // Create mobile menu button if not exists
        if (!document.querySelector('.mobile-menu-btn')) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = `
                display: none;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
            `;
            
            menuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('mobile-open');
            });
            
            nav.insertBefore(menuBtn, navLinks);
        }
        
        // Mobile styles
        const mobileStyles = document.createElement('style');
        mobileStyles.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block !important;
                }
                .nav-links {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #2c5530;
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .nav-links.mobile-open {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(mobileStyles);
    }
    
    // Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
    
    // Thai accent animations
    function initThaiAccents() {
        const accents = document.querySelectorAll('.thai-accent');
        
        accents.forEach((accent, index) => {
            accent.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.background = 'linear-gradient(90deg, #d4f1d4, #b8e6b8, #d4f1d4)';
            });
            
            accent.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.background = 'linear-gradient(90deg, #e8f5e8, #d4f1d4, #e8f5e8)';
            });
        });
    }
    
    // Initialize all features
    createFloatingElements();
    initSmoothScroll();
    initProductCardEffects();
    initAmazonTracking();
    initMobileNav();
    initLazyLoading();
    initThaiAccents();
    
    // Performance optimization - reduce animations on slow devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
        
        const reducedMotionStyles = document.createElement('style');
        reducedMotionStyles.textContent = `
            .reduced-motion * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(reducedMotionStyles);
    }
    
    // Console message for developers
    console.log('🌿 Miracle Thai Enterprises Theme Loaded');
    console.log('🇹🇭 Fresh Local Herbs Meet Authentic Thai Tradition');
});