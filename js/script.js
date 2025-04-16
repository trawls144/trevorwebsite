// Enhanced JavaScript functionality for Trevor Rawls' website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const formElements = contactForm.elements;
            
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].type !== 'submit' && formElements[i].hasAttribute('required')) {
                    if (!formElements[i].value.trim()) {
                        isValid = false;
                        formElements[i].classList.add('error');
                    } else {
                        formElements[i].classList.remove('error');
                    }
                }
            }
            
            if (isValid) {
                // Add loading state
                contactForm.classList.add('loading');
                
                // Simulate form submission (in a real implementation, you would send data to a server)
                setTimeout(() => {
                    contactForm.classList.remove('loading');
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }, 1500);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Add active class to nav links based on scroll position
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200 && 
                window.pageYOffset < sectionTop + sectionHeight - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}` || 
                (currentSection === '' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Back to top button functionality
    const backToTopButton = document.createElement('a');
    backToTopButton.href = '#';
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    function toggleBackToTopButton() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    // Add scroll indicator to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '<span>Scroll</span><div class="mouse"></div>';
        heroSection.appendChild(scrollIndicator);
    }
    
    // Handle scroll events
    window.addEventListener('scroll', function() {
        setActiveNavLink();
        toggleBackToTopButton();
    });
    
    // Initialize
    setActiveNavLink();
    toggleBackToTopButton();
    
    // Add animation classes on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.experience-card, .skill-item, .about-content, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Handle image errors
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken image with placeholder
            const parent = this.parentElement;
            const placeholder = document.createElement('div');
            placeholder.className = 'placeholder-logo';
            placeholder.textContent = this.alt || 'Logo';
            parent.replaceChild(placeholder, this);
        });
    });
});
