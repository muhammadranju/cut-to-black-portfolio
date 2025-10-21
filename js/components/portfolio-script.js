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
      { threshold: 0.03, rootMargin: "0px 0px -20% 0px" }
    );

    // Add static card first (always visible, independent of filter)
    const staticItem = {
      id: "001",
      image:
        "https://static.vecteezy.com/system/resources/previews/025/674/498/non_2x/upload-pdf-button-concept-illustration-line-icon-design-editable-eps10-vector.jpg",
      title: "Upload PDF",
      category: "special",
      link: "/upload-pdf.html",
    };
    const staticPortfolioItem = document.createElement("div");

    staticPortfolioItem.className = `portfolio-item normal static-item`;
    // No delay for the first static item
    staticPortfolioItem.style.animationDelay = `0s`;

    staticPortfolioItem.innerHTML = `
      <a href="${staticItem.link}">
        <img src="${staticItem.image}" alt="${staticItem.title}" loading="lazy">
        <div class="portfolio-overlay">
          <h3 class="portfolio-title">${staticItem.title}</h3>
          <p class="portfolio-category">${staticItem.category.replace(
            "-",
            " "
          )}</p>
        </div>
      </a>
    `;

    portfolioGrid.appendChild(staticPortfolioItem);
    revealObserver.observe(staticPortfolioItem);

    // Then add dynamic items with staggered delays starting after static
    filteredData.forEach((item, index) => {
      const portfolioItem = document.createElement("div");
      const queryString = `${item.id}&video=${
        item.videoPath
      }&title=${item?.title?.split(" ").join("-")?.toLowerCase()}`;
      portfolioItem.className = `portfolio-item normal`;
      // Staggered reveal starting from index 1 (after static)
      portfolioItem.style.animationDelay = `${(index + 1) * 0.03}s`;

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
