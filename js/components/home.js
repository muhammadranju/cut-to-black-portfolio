// Initialize Vimeo Player
const iframe = document.getElementById("vimeoVideo");
const videoContainer = document.getElementById("videoContainer");
const playPauseIcon = document.getElementById("playPauseIcon");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const loadingSpinner = document.getElementById("videoLoadingSpinner");

let player;
let isPlaying = false;
let iconTimeout;
player = new Vimeo.Player(iframe);

// Function to show icon with fadeout
function showIconWithFadeout() {
  // Clear any existing timeout
  clearTimeout(iconTimeout);

  // Show icon
  playPauseIcon.style.opacity = "1";
  playPauseIcon.style.display = "flex";

  // Set timeout to hide icon
  iconTimeout = setTimeout(() => {
    playPauseIcon.style.opacity = "0";
    setTimeout(() => {
      playPauseIcon.style.display = "none";
    }, 300); // Wait for fade out animation
  }, 300); // Show for 2 seconds
}

// Update icon based on play state
function updatePlayPauseIcon(isPlaying) {
  if (isPlaying) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
  } else {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
  }
  showIconWithFadeout();
}

// Initial setup when video is loaded
player.on("loaded", function () {
  if (loadingSpinner) loadingSpinner.style.display = "none";
  player.play();
  isPlaying = true;
  updatePlayPauseIcon(true);
});

// Fallback: hide spinner after 2 seconds if not loaded
setTimeout(function () {
  if (loadingSpinner && loadingSpinner.style.display !== "none") {
    loadingSpinner.style.display = "none";
  }
}, 2000);

// Track play state
player.on("play", function () {
  isPlaying = true;
  updatePlayPauseIcon(true);
});

player.on("pause", function () {
  isPlaying = false;
  updatePlayPauseIcon(false);
});

// Show icon on mouse move
let mouseMoveTimeout;
videoContainer.addEventListener("mousemove", function () {
  clearTimeout(mouseMoveTimeout);
  showIconWithFadeout();

  mouseMoveTimeout = setTimeout(() => {
    if (isPlaying) {
      playPauseIcon.style.opacity = "0";
      setTimeout(() => {
        playPauseIcon.style.display = "none";
      }, 300);
    }
  }, 300);
});

// Video container click handler
videoContainer.addEventListener("click", function (e) {
  if (!player) return;

  e.preventDefault();
  e.stopPropagation();

  if (isPlaying) {
    player.pause();
  } else {
    player.play();
  }
});

// Initialize navigation active state based on current URL (no click interception)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    let target;
    if (href === "/" || href === "./" || href === "") {
      target = "index.html";
    } else {
      target = href.replace(/^\.\//, "").replace(/^\//, "");
    }

    if (target === current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Back to Top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Navigation active state management removed here to avoid duplicate handlers and allow link navigation


// Back to Top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
