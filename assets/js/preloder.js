window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const contentBanner = document.getElementById("lazy-content-banner");
  const content = document.getElementById("lazy-content");

  preloader.style.display = "none";
  contentBanner.classList.add("loadedbanner");
  content.classList.add("loaded");

  document.body.style.overflow = "auto";
});
