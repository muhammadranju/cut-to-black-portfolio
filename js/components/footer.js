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
