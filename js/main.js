// // Smooth scroll for navigation
// const navLinks = document.querySelectorAll(".nav-link");
// const menuToggle = document.getElementById("menuToggle");
// const nav = document.getElementById("nav");
// const header = document.getElementById("header");

// // Navigation active state on scroll
// window.addEventListener("scroll", () => {
//   let current = "";
//   const sections = document.querySelectorAll("section");

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (scrollY >= sectionTop - 200) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href").substring(1) === current) {
//       link.classList.add("active");
//     }
//   });

//   // Header background on scroll
//   if (window.scrollY > 100) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// // Mobile menu toggle
// menuToggle.addEventListener("click", () => {
//   nav.classList.toggle("active");
//   menuToggle.classList.toggle("active");
// });

// // Close menu when clicking a link
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     nav.classList.remove("active");
//     menuToggle.classList.remove("active");
//   });
// });

// // Close menu when clicking outside
// document.addEventListener("click", (e) => {
//   if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
//     nav.classList.remove("active");
//     menuToggle.classList.remove("active");
//   }
// });

// // Add intersection observer for animations
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: "0px 0px -100px 0px",
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.style.animation = "fadeInUp 0.8s ease forwards";
//     }
//   });
// }, observerOptions);

// document.querySelectorAll(".portfolio-item, .service-icon").forEach((el) => {
//   observer.observe(el);
// });

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navContainer = document.querySelector(".nav-container");

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navContainer.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        mobileMenuToggle.classList.remove("active");
        navContainer.classList.remove("active");
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = navContainer.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      navContainer.classList.contains("active")
    ) {
      mobileMenuToggle.classList.remove("active");
      navContainer.classList.remove("active");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add scroll effect to header
  let lastScroll = 0;
  const header = document.querySelector(".main-header");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
    }

    lastScroll = currentScroll;
  });

  // Service icon hover animation
  const serviceIcons = document.querySelectorAll(".service-icon");
  serviceIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)";
    });
  });
});
