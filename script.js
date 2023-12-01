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

// footer email validation
function validateEmail() {
  const emailInput = document.getElementById("newsletteremail");
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailFormat.test(emailInput.value)) {
    // Valid email format
    alert("Subscription Successful!");
  } else {
    // Invalid email format
    alert("Please enter a valid email address.");
  }
}

//loading

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");

  // Add a delay to the fadeout animation
  setTimeout(function () {
    loadingScreen.classList.add("fadeout");
  }, 500); // You can adjust the delay time (in milliseconds) as needed

  // Hide the loading screen after the animation completes
  loadingScreen.addEventListener("animationend", function () {
    loadingScreen.style.display = "none";
  });
});
