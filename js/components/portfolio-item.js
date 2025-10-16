// // Get the current URL
// const newData = data;
// const urlParams = new URLSearchParams(window.location.search);
// const id = Number(urlParams.get("id")); // "101"

// const findVideo = newData.find((item) => item.id === id);
// console.log(findVideo);
// if (!findVideo) {
//   window.location.href = "portfolio.html";
// } else if (findVideo.platform === "youtube") {
//   document.getElementById(
//     "srcVideo"
//   ).src = `https://www.youtube.com/embed/${findVideo.videoPath}?si=Fz9_b1rJp27jMYIh&amp;start=6"`;
// } else if (findVideo.platform === "vimeo") {
//   document.getElementById(
//     "srcVideo"
//   ).src = `https://player.vimeo.com/video/${findVideo.videoPath}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"`;
// }

// Get the current URL
// const newData = data;
// const urlParams = new URLSearchParams(window.location.search);
// const id = Number(urlParams.get("id"));

// const findVideo = newData.find((item) => item.id === id);
// const currentIndex = newData.findIndex((item) => item.id === id);

// // Get DOM elements
// const videoIframe = document.getElementById("srcVideo");
// const videoTitle = document.getElementById("videoTitle");
// const videoCast = document.getElementById("videoCast");
// const videoDescription = document.getElementById("videoDescription");
// const prevButton = document.getElementById("prevButton");
// const nextButton = document.getElementById("nextButton");

// // Check if video exists
// if (!findVideo) {
//   window.location.href = "portfolio.html";
// } else {
//   loadVideo(findVideo);
//   updateNavigationButtons();
// }

// // Load video function
// function loadVideo(video) {
//   // Set video source based on platform
//   if (video.platform === "youtube") {
//     videoIframe.src = `https://www.youtube.com/embed/${video.videoPath}?si=Fz9_b1rJp27jMYIh&start=6`;
//   } else if (video.platform === "vimeo") {
//     videoIframe.src = `https://player.vimeo.com/video/${video.videoPath}?badge=0&autopause=0&player_id=0&app_id=58479`;
//   }

//   // Set video information
//   videoTitle.textContent = video.title || "UNTITLED";
//   videoCast.textContent = video.cast || "";
//   videoDescription.textContent = video.description || "";
// }

// // Update navigation buttons state
// function updateNavigationButtons() {
//   // Disable previous button if first video
//   if (currentIndex === 0) {
//     prevButton.disabled = true;
//   } else {
//     prevButton.disabled = false;
//   }

//   // Disable next button if last video
//   if (currentIndex === newData.length - 1) {
//     nextButton.disabled = true;
//   } else {
//     nextButton.disabled = false;
//   }
// }

// // Previous button click
// prevButton.addEventListener("click", function () {
//   if (currentIndex > 0) {
//     const prevVideo = newData[currentIndex - 1];
//     window.location.href = `portfolio-item.html?id=${prevVideo.id}`;
//   }
// });

// // Next button click
// nextButton.addEventListener("click", function () {
//   if (currentIndex < newData.length - 1) {
//     const nextVideo = newData[currentIndex + 1];
//     window.location.href = `portfolio-item.html?id=${nextVideo.id}`;
//   }
// });

// // Keyboard navigation (optional)
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft" && !prevButton.disabled) {
//     prevButton.click();
//   } else if (e.key === "ArrowRight" && !nextButton.disabled) {
//     nextButton.click();
//   }
// });

// Get the current URL parameters
const urlParams = new URLSearchParams(window.location.search);
const currentId = Number(urlParams.get("id"));

// Find current video
const findVideo = data.find((item) => item.id === currentId);

// Get DOM elements
const videoIframe = document.getElementById("srcVideo");
const videoTitle = document.getElementById("videoTitle");
const videoCast = document.getElementById("videoCast");
const videoDescription = document.getElementById("videoDescription");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Check if video exists
if (!findVideo) {
  window.location.href = "portfolio.html";
} else {
  loadVideo(findVideo);
  updateNavigationButtons();
}

// Load video function
function loadVideo(video) {
  // Set video source based on platform
  if (video.platform === "youtube") {
    videoIframe.src = `https://www.youtube.com/embed/${video.videoPath}?si=Fz9_b1rJp27jMYIh&start=6`;
  } else if (video.platform === "vimeo") {
    videoIframe.src = `https://player.vimeo.com/video/${video.videoPath}?badge=0&autopause=0&player_id=0&app_id=58479`;
  }

  // Set video information
  videoTitle.textContent = video.title || "UNTITLED";
  videoCast.textContent = video.cast || "";
  videoDescription.textContent = video.description || "";
}

// Update navigation buttons state
function updateNavigationButtons() {
  // Find previous video (ID - 1)
  const prevVideo = data.find((item) => item.id === currentId - 1);

  // Find next video (ID + 1)
  const nextVideo = data.find((item) => item.id === currentId + 1);

  // Disable/enable previous button
  if (!prevVideo) {
    prevButton.disabled = true;
    prevButton.style.opacity = "0.3";
  } else {
    prevButton.disabled = false;
    prevButton.style.opacity = "1";
  }

  // Disable/enable next button
  if (!nextVideo) {
    nextButton.disabled = true;
    nextButton.style.opacity = "0.3";
  } else {
    nextButton.disabled = false;
    nextButton.style.opacity = "1";
  }
}

// Previous button click - Go to ID - 1
prevButton.addEventListener("click", function () {
  const prevId = currentId - 1;
  const prevVideo = data.find((item) => item.id === prevId);

  if (prevVideo) {
    const queryString = `${prevVideo.id}&video=${
      prevVideo.videoPath
    }&title=${prevVideo?.title?.split(" ").join("-")?.toLowerCase()}`;
    window.location.href = `portfolio-item.html?id=${queryString}`;
  }
});

// Next button click - Go to ID + 1
nextButton.addEventListener("click", function () {
  const nextId = currentId + 1;
  const nextVideo = data.find((item) => item.id === nextId);

  if (nextVideo) {
    const queryString = `${nextVideo.id}&video=${
      nextVideo.videoPath
    }&title=${nextVideo?.title?.split(" ").join("-")?.toLowerCase()}`;
    window.location.href = `portfolio-item.html?id=${queryString}`;
  }
});

// Keyboard navigation (optional - Arrow keys)
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" && !prevButton.disabled) {
    prevButton.click();
  } else if (e.key === "ArrowRight" && !nextButton.disabled) {
    nextButton.click();
  }
});

// Optional: Prevent default link behavior if portfolio items are wrapped in links
const portfolioLinks = document.querySelectorAll(".portfolio-item a");
portfolioLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // Link will work normally, navigating to portfolio-item.html with query params
  });
});
