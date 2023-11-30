// Fadein animation
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".fadein, .fadein-center, .fadein-right"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("animated")
        ) {
          entry.target.classList.add("animated");

          if (entry.target.classList.contains("fadein-center")) {
            entry.target.classList.add("fadein-center-animated");
          }

          if (entry.target.classList.contains("fadein-right")) {
            entry.target.classList.add("fadein-right-animated");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// nav hamburger menu button animation
function navAnimation(x) {
  x.classList.toggle("change");
}

// projects image gallery
function changeImage(projectId, imageSource) {
  const largeImage = document.getElementById(`largeImage${projectId}`);
  largeImage.innerHTML = `<img src="${imageSource}" alt="Large Image">`;
}
