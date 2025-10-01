// ===== MOBILE MENU TOGGLE =====
const menuBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

// ===== COURSE CARD FADE-IN ON SCROLL =====
const courseCards = document.querySelectorAll('.course-card');

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

courseCards.forEach(card => {
    fadeOnScroll.observe(card);
});

// ===== HOVER EFFECT =====
courseCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });
});
