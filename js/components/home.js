let player;
let isPlaying = true;
let iconTimeout;

// Initialize Vimeo Player
const iframe = document.getElementById("vimeoVideo");
player = new Vimeo.Player(iframe);

// Set initial state - video is playing, so show pause icon initially
player.on("loaded", function () {
  player.play();
  isPlaying = true;
  // Initially show pause icon since video is playing
  playIcon.style.display = "none";
  pauseIcon.style.display = "flex";
});

// Track play state
player.on("play", function () {
  isPlaying = true;
});

player.on("pause", function () {
  isPlaying = false;
});

// Video container click handler
const videoContainer = document.getElementById("videoContainer");
const playPauseIcon = document.getElementById("playPauseIcon");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

videoContainer.addEventListener("click", function (e) {
  if (!player) return;

  // Prevent default behavior
  e.preventDefault();
  e.stopPropagation();

  // Clear any existing timeout
  clearTimeout(iconTimeout);
  playPauseIcon.classList.remove("fade-out");

  player.getPaused().then(function (paused) {
    if (!paused) {
      // Video is PLAYING, so pause it
      player.pause().then(function () {
        isPlaying = false;
        // Video is NOW PAUSED - Show PLAY icon
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        showIconTemporarily();
      });
    } else {
      // Video is PAUSED, so play it
      player.play().then(function () {
        isPlaying = true;
        // Video is NOW PLAYING - Show PAUSE icon
        pauseIcon.style.display = "flex";
        playIcon.style.display = "none";
        showIconTemporarily();
      });
    }
  });
});

function showIconTemporarily() {
  // Show icon immediately
  playPauseIcon.classList.add("show");

  // Hide icon after 1.5 seconds with fade out
  iconTimeout = setTimeout(function () {
    playPauseIcon.classList.remove("show");
    playPauseIcon.classList.add("fade-out");

    // Remove fade-out class after animation completes
    setTimeout(function () {
      playPauseIcon.classList.remove("fade-out");
    }, 500);
  }, 1500);
}

// Navigation active state management
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


