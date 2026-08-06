const myProjects = [
  { title: "Weather Dashboard", tech: ["JavaScript", "Open-Meteo API", "CSS"], description: "A focused weather experience that turns live forecast data into a clear daily view.", link: "https://cma1uba.github.io/Weather-app-main/", preview: "weather" },
  { title: "Movie Watchlist", tech: ["JavaScript", "OMDb API", "Local storage"], description: "A personal watchlist for discovering films and keeping favourites close at hand.", link: "https://cma1uba.github.io/Movie-watchlist/", preview: "movies" },
  { title: "E-commerce Store", tech: ["JavaScript", "CSS", "Cart logic"], description: "A streamlined storefront with product selection, pricing, and a smooth cart experience.", link: "https://cma1uba.github.io/E-commerce/", preview: "shop" },
  { title: "Quiz App", tech: ["JavaScript", "UI design", "Interaction"], description: "A lightweight quiz experience built around quick feedback and clear multiple-choice flows.", link: "https://cma1uba.github.io/E-commerce/", preview: "quiz" }
];

const projectGrid = document.getElementById("project-grid");
if (projectGrid) {
  projectGrid.innerHTML = myProjects.map(({ title, tech, description, link, preview }, index) => `
    <article class="project-card">
      <span class="project-index">0${index + 1}</span>
      <div class="project-visual preview-${preview}" aria-hidden="true">
        <div class="browser-bar"><i></i><i></i><i></i></div>
        <div class="preview-ui">${preview === "weather" ? '<div class="weather-sun"></div><b>24°</b><span>Cape Town, clear skies</span><div class="forecast"><i></i><i></i><i></i><i></i></div>' : ""}${preview === "movies" ? '<div class="movie-poster poster-one"></div><div class="movie-poster poster-two"></div><div class="movie-poster poster-three"></div><span class="watchlist-copy">YOUR WATCHLIST</span>' : ""}${preview === "shop" ? '<span class="shop-copy">NEW SEASON</span><div class="product-shape"></div><div class="shop-lines"><i></i><i></i></div>' : ""}${preview === "quiz" ? '<span class="quiz-step">QUESTION 03 / 10</span><b class="quiz-question">Which answer feels right?</b><div class="quiz-options"><i></i><i></i><i></i></div>' : ""}</div>
      </div>
      <div class="project-content"><h3>${title}</h3><p>${description}</p></div>
      <div class="project-bottom"><div class="tags">${tech.map(item => `<span class="tag">${item}</span>`).join("")}</div><a href="${link}" class="project-link" target="_blank" rel="noopener noreferrer" aria-label="View ${title}">↗</a></div>
    </article>`).join("");
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector("button");
    submitButton.textContent = "Sending…";
    try {
      const response = await fetch(contactForm.action, { method: "POST", body: new FormData(contactForm), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      contactForm.innerHTML = '<p class="form-success">Thanks for reaching out — I’ll be in touch soon.</p>';
    } catch (error) {
      submitButton.innerHTML = "Try again <span>↗</span>";
      alert("There was a problem sending your message. Please try again or email me directly.");
    }
  });
}
