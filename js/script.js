document.addEventListener("DOMContentLoaded", function () {
  // Simulate progress bar update when calculating the route
  document
    .getElementById("calculateRoute")
    .addEventListener("click", function () {
      const progressBar = document.querySelector(".progress-bar");
      let progress = 0;

      // Ensure modal is shown before updating progress
      const progressModal = new bootstrap.Modal(document.getElementById("progressModal"));
      progressModal.show();

      const interval = setInterval(function () {
        progress += 5;
        progressBar.style.width = progress + "%";
        progressBar.setAttribute("aria-valuenow", progress);

        if (progress >= 100) {
          clearInterval(interval);
          // Optionally hide the modal when done
          setTimeout(() => progressModal.hide(), 500); // Hide after a short delay
        }
      }, 100);
    });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize Mermaid diagrams
  mermaid.initialize({ startOnLoad: true });
});


