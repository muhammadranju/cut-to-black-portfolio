fetch("../../data/home-video.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById(
      "vimeoVideo"
    ).src = `https://player.vimeo.com/video/${data.videoId}?badge=0&autopause=0&autoplay=1&muted=1&loop=1`;
    console.log(data);
  });
