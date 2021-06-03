document.addEventListener("scroll", displayScroll);
let scroll = document.querySelector(".scroll");
function displayScroll() {
  if (window.pageYOffset > 100) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}