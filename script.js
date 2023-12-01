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

// footer newsletter email validation
function validateEmail() {
  const emailInput = document.getElementById("newsletteremail");
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailInput.value.trim()) {
    alert("Please enter your email address.");
  } else if (emailFormat.test(emailInput.value)) {
    alert("Subscription Successful!");

    localStorage.setItem("newsletterEmail", emailInput.value);
  } else {
    alert("Please enter a valid email address.");
  }
}

// loading screen

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");

  setTimeout(function () {
    loadingScreen.classList.add("fadeout");
  }, 500);

  loadingScreen.addEventListener("animationend", function () {
    loadingScreen.style.display = "none";
  });
});

// contact us form
function submitForm() {
  // Get form values
  const fullName = document.getElementById("full-name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Basic validation to check if any field is empty
  if (!fullName || !email || !subject || !message) {
    alert("Please fill out all sections of the form.");
    return;
  }

  // Email format validation using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Create an object to represent the form submission
  const formSubmission = {
    fullName,
    email,
    subject,
    message,
    timestamp: new Date().toISOString(),
  };

  // Retrieve existing form submissions from local storage
  const formSubmissions =
    JSON.parse(localStorage.getItem("formSubmissions")) || [];

  // Add the new submission to the array
  formSubmissions.push(formSubmission);

  // Save the updated array back to local storage
  localStorage.setItem("formSubmissions", JSON.stringify(formSubmissions));

  // Clear the form fields after successful submission
  document.getElementById("contact-form").reset();

  // Display a success message or perform other actions as needed
  alert("Form submitted successfully!");
}
