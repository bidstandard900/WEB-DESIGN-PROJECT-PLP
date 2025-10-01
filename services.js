// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

// ===== SMOOTH SCROLLING FOR INTERNAL LINKS =====
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href').startsWith("#")) {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// ===== SERVICE CARDS FADE-IN ON SCROLL =====
const serviceCards = document.querySelectorAll('.service-card');

const fadeOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const fadeOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-card');
            observer.unobserve(entry.target);
        }
    });
}, fadeOptions);

serviceCards.forEach(card => {
    fadeOnScroll.observe(card);
});

// ===== HOVER EFFECTS =====
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });
});
