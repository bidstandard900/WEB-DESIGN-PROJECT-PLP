document.addEventListener("DOMContentLoaded", () => {
  // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== FADE IN ANIMATION =====
  const fadeElements = document.querySelectorAll(".contact-section, .contact-hero, footer");

  fadeElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  });

  window.addEventListener("load", () => {
    fadeElements.forEach(el => {
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  });

  // ===== FORM VALIDATION FEEDBACK =====
  const form = document.querySelector(".contact-form form");
  form.addEventListener("submit", e => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("Please fill out all fields before submitting.");
    }
  });

  // ===== MENU LINK ACTIVE STATE =====
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(link => link.classList.remove("active"));
      item.classList.add("active");
    });
  });
});
