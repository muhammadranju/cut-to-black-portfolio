// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Load testimonials from JSON
  fetch("./data/testimonials.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("testimonials-grid");
      container.innerHTML = data.testimonials
        .map(
          (testimonial) => `
                <div class="testimonial-card">
                    <img src="${testimonial.image}" alt="${
            testimonial.name
          }" class="testimonial-avatar">
                    <div class="testimonial-name">${testimonial.name}</div>
                    <div class="stars">${"★".repeat(testimonial.rating)}</div>
                    <p class="testimonial-text">${testimonial.text}</p>
                </div>
            `
        )
        .join("");
    })
    .catch((error) => {
      console.error("Error loading testimonials:", error);
      // Fallback: empty or placeholder
    });

  // FAQ Toggle
  const faqQuestions = document.querySelectorAll(".question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const toggle = question.querySelector(".toggle");
      const isActive = answer.classList.contains("active");

      // Close all others
      document.querySelectorAll(".answer").forEach((a) => {
        if (a !== answer) {
          a.classList.remove("active");
          a.previousElementSibling.querySelector(".toggle").textContent = "+";
        }
      });

      if (!isActive) {
        answer.classList.add("active");
        toggle.textContent = "−";
      } else {
        answer.classList.remove("active");
        toggle.textContent = "+";
      }
    });
  });

  // Simple scroll animation trigger (optional enhancement)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = "0.2s";
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
