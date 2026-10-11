const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("visible"));
}

const slides = Array.from(document.querySelectorAll(".slide"));
const dotsHost = document.querySelector(".dots");
let activeSlide = 0;
let autoplay;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeSlide);
    slide.setAttribute("aria-hidden", slideIndex === activeSlide ? "false" : "true");
  });
  document.querySelectorAll(".dot").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeSlide);
    dot.setAttribute("aria-current", dotIndex === activeSlide ? "true" : "false");
  });
}

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "dot";
  dot.setAttribute("aria-label", `הצגת המלצה ${index + 1}`);
  dot.addEventListener("click", () => showSlide(index));
  dotsHost.appendChild(dot);
});

function startAutoplay() {
  window.clearInterval(autoplay);
  autoplay = window.setInterval(() => showSlide(activeSlide + 1), 5000);
}

document.querySelector(".previous").addEventListener("click", () => {
  showSlide(activeSlide - 1);
  startAutoplay();
});

document.querySelector(".next").addEventListener("click", () => {
  showSlide(activeSlide + 1);
  startAutoplay();
});

showSlide(0);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  startAutoplay();
}

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector(".form-status");
  status.textContent = "תודה! הטופס מוכן לחיבור לשירות שליחת ההודעות שלכם.";
});
