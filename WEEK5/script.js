var timer;
function myKeyDown(event) {
  clearInterval(timer);
  var circle = document.getElementById("circle");

  if (event.keyCode === 37) {
    timer = setInterval(() => {
      var positionLeft = circle.offsetLeft;
      var newLeft = Math.max(positionLeft - 2, 0) + "px";
      circle.style.left = newLeft;
    }, 10);
  }

  if (event.keyCode === 38) {
    timer = setInterval(() => {
      var positionTop = circle.offsetTop;
      var newTop = Math.max(positionTop - 2, 0) + "px";
      circle.style.top = newTop;
    }, 10);
  }

  if (event.keyCode === 39) {
    timer = setInterval(() => {
      var positionLeft = circle.offsetLeft;
      var newLeft = Math.min(positionLeft + 2, window.innerWidth - 200) + "px";
      circle.style.left = newLeft;
    }, 10);
  }

  if (event.keyCode === 40) {
    timer = setInterval(() => {
      var positionTop = circle.offsetTop;
      // console.log(positionTop);
      var newTop = Math.min(positionTop + 2, window.innerHeight - 200) + "px";
      circle.style.top = newTop;
    }, 10);
  }
}

function myPageLoad() {
  document.addEventListener("keydown", myKeyDown);
}

document.addEventListener("DOMContentLoaded", myPageLoad);
