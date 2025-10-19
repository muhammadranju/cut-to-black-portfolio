// Portfolio Script with Filtering and Animation
document.addEventListener("DOMContentLoaded", function () {
  const portfolioGrid = document.getElementById("portfolioGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // Render portfolio items
  function renderPortfolio(filter = "all") {
    portfolioGrid.innerHTML = "";

    const filteredData =
      filter === "all" ? data : data.filter((item) => item.category === filter);

    // IntersectionObserver for reveal-on-scroll
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    filteredData.forEach((item, index) => {
      const portfolioItem = document.createElement("div");
      const queryString = `${item.id}&video=${
        item.videoPath
      }&title=${item?.title?.split(" ").join("-")?.toLowerCase()}`;
      portfolioItem.className = `portfolio-item normal`;
      // Staggered reveal per item; applies when .revealed triggers animation
      portfolioItem.style.animationDelay = `${index * 0.08}s`;

      portfolioItem.innerHTML = `
                <a href="/portfolio-item.html?id=${queryString}">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <h3 class="portfolio-title">${item.title}</h3>
                    <p class="portfolio-category">${item.category.replace(
                      "-",
                      " "
                    )}</p>
                </div>
                </a>
            `;

      portfolioGrid.appendChild(portfolioItem);

      // Observe for reveal-on-scroll
      revealObserver.observe(portfolioItem);
    });

    // Add click event to portfolio items
    const items = document.querySelectorAll(".portfolio-item");
    items.forEach((item) => {
      item.addEventListener("click", function () {
        // Add your click handler here (e.g., open modal, navigate to detail page)
        console.log("Portfolio item clicked");
      });
    });
  }

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      this.classList.add("active");

      // Get filter value
      const filter = this.getAttribute("data-filter");

      // Render filtered portfolio immediately with item-level reveal
      renderPortfolio(filter);
    });
  });

  // Initial render
  renderPortfolio();

  // Smooth scroll for better UX
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
});
