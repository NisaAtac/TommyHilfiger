// scroll event listener
window.addEventListener(
  "scroll",
  function () {
    const videoElement = document.querySelector(".container-video");
    const videoWhiteBoxTop = document.querySelector(".video-white-box-top");
    const videoWhiteBoxBot = document.querySelector(".video-white-box");
    if (inViewport(videoElement)) {
      // Video container element is in the viewport.
      videoWhiteBoxTop.classList.add("videoAnimationHalf");
      videoWhiteBoxBot.classList.add("videoAnimationFull");
    }
  },
  false
);

function inViewport(element) {
  if (!element) return false;
  if (1 !== element.nodeType) return false;
  let position = element.getBoundingClientRect();
  return position.top >= 0 && position.bottom <= window.innerHeight;
}
