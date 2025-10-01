// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');

    // Only smooth scroll if link is an in-page anchor
    if (href && href.startsWith("#")) {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetElement = document.querySelector(href);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ===== HERO SECTION ANIMATION =====
const heroText = document.querySelector('.hero-overlay h1');
const heroDesc = document.querySelector('.hero-overlay p');

window.addEventListener('load', () => {
    if (heroText) heroText.classList.add('fade-in');
    if (heroDesc) heroDesc.classList.add('fade-in-delay');
});

// ===== FADE-IN ON SCROLL =====
const sections = document.querySelectorAll('section');

const fadeOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const fadeOnScroll = new IntersectionObserver(function(entries, fadeOnScroll) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-section');
            fadeOnScroll.unobserve(entry.target);
        }
    });
}, fadeOptions);

sections.forEach(section => {
    fadeOnScroll.observe(section);
});

// ===== STICKY NAVIGATION HIGHLIGHT =====
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 70;

    navItems.forEach(link => {
        const href = link.getAttribute('href');

        // Only highlight if link is an in-page anchor
        if (href && href.startsWith("#")) {
            const section = document.querySelector(href);
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
