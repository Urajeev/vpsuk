// Image Slider
let slideIndex = 0;
const slides = document.querySelector(".slides");

function showSlides() {
  slideIndex++;
  if (slideIndex >= slides.children.length) slideIndex = 0;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

// Load JSON Data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Update Notifications
    const notifications = document.getElementById("notifications");
    data.notifications.forEach((note) => {
      const p = document.createElement("p");
      p.textContent = note;
      notifications.appendChild(p);
    });

    // Update Results
    const results = document.getElementById("results");
    data.results.forEach((result) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>Class ${result.class} (${result.year})</strong></p>
        <p>Topper: ${result.topper}</p>
      `;
      results.appendChild(div);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));