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

// ===== HERO PARALLAX EFFECT =====
const hero = document.querySelector('.about-hero');
if (hero) {
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.5 + "px";
    });
}

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

// ===== WHY CHOOSE US LIST ANIMATION =====
const whyListItems = document.querySelectorAll('.why-choose-us ul li');

whyListItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateX(-20px)";
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;

    window.addEventListener('scroll', () => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 50) {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
        }
    });
});
