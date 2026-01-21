// Password Protection
const CORRECT_PASSWORD = 'helloworld';
const SESSION_KEY = 'portfolio_authenticated';

// Check if user is already authenticated
function checkAuthentication() {
    const isAuthenticated = localStorage.getItem(SESSION_KEY) === 'true';
    if (isAuthenticated) {
        showPortfolio();
    } else {
        showPasswordOverlay();
    }
}

function showPasswordOverlay() {
    const overlay = document.getElementById('password-overlay');
    const mainContent = document.getElementById('main-content');
    overlay.classList.remove('hidden');
    mainContent.classList.remove('visible');
}

function showPortfolio() {
    const overlay = document.getElementById('password-overlay');
    const mainContent = document.getElementById('main-content');
    overlay.classList.add('hidden');
    mainContent.classList.add('visible');
}

function handlePasswordSubmit(e) {
    e.preventDefault();
    const passwordInput = document.getElementById('password-input');
    const passwordError = document.getElementById('password-error');
    const enteredPassword = passwordInput.value;

    if (enteredPassword === CORRECT_PASSWORD) {
        // Store authentication in localStorage
        localStorage.setItem(SESSION_KEY, 'true');
        passwordError.textContent = '';
        passwordInput.value = '';
        showPortfolio();
    } else {
        passwordError.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Initialize password protection on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
    
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', handlePasswordSubmit);
    }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .about-content, .contact-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Utility function for smooth animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', animateOnScroll); 

// Custom orange cursor
(function() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    document.body.classList.add('hide-default-cursor');

    let isCursorVisible = true;

    // Track mouse position and check viewport bounds for reliable cursor visibility
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Check if mouse is within viewport bounds
        const isInViewport = (
            e.clientX >= 0 &&
            e.clientY >= 0 &&
            e.clientX <= window.innerWidth &&
            e.clientY <= window.innerHeight
        );
        
        if (isInViewport && !isCursorVisible) {
            cursor.style.opacity = '1';
            isCursorVisible = true;
        } else if (!isInViewport && isCursorVisible) {
            cursor.style.opacity = '0';
            isCursorVisible = false;
        }
    });

    // Add active effect on click
    document.addEventListener('mousedown', () => {
        cursor.classList.add('active');
    });
    document.addEventListener('mouseup', () => {
        cursor.classList.remove('active');
    });

    // Reliable window boundary detection using pointer events
    document.addEventListener('pointerleave', (e) => {
        // Check if pointer left the viewport (no relatedTarget means left window)
        if (!e.relatedTarget && e.pointerType === 'mouse') {
            cursor.style.opacity = '0';
            isCursorVisible = false;
        }
    });
    
    document.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') {
            cursor.style.opacity = '1';
            isCursorVisible = true;
        }
    });
    
    // Fallback: hide cursor when mouse leaves document
    document.addEventListener('mouseout', (e) => {
        // If mouseout target is document or html, cursor left the window
        if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
            cursor.style.opacity = '0';
            isCursorVisible = false;
        }
    });
    
    document.addEventListener('mouseover', (e) => {
        // Show cursor when mouse re-enters document
        if (e.target && isCursorVisible === false) {
            cursor.style.opacity = '1';
            isCursorVisible = true;
        }
    });
    
    // Hide custom cursor when hovering over form inputs, textareas, and buttons
    // Use event delegation to work with dynamically added elements
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('input, textarea, button, select')) {
            cursor.style.opacity = '0';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.matches('input, textarea, button, select')) {
            cursor.style.opacity = '1';
        }
    });
})(); 