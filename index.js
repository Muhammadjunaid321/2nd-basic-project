const button = document.querySelector(".navbar-button");
button.addEventListener("click", function (event) {
  const bar = document.querySelector(".navbar");
  bar.classList.toggle("hide-bar");
  bar.classList.toggle("hide-nav");
});
