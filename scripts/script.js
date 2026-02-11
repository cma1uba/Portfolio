const myProjects = [
    {
        title: "Weather Dashboard",
        tech: ["JavaScript", "APIs", "CSS"],
        description: "A live weather app using Open-Meteo.",
        link: "https://cma1uba.github.io/Weather-app-main/"
    },
    {
        title: "Movie Watchlist",
        tech: ["Local Storage", "OMDb API"],
        description: "Save your favorite films to browser memory.",
        link: "https://cma1uba.github.io/Movie-watchlist/"
    },
    {
        title: "E-Commerce",
        tech: ["JavaScript", "CSS"],
        description: "An E-commerce with a simple modern design exhibiting add products to cart, price calculations and checkout.",
        link: "https://cma1uba.github.io/E-commerce/"
    },
    {
        title: "Quiz",
        tech:. ["Javascript", "CSS"],
        description: "MCQs quiz app",
        link: "#"
    },
];

const projectGrid = document.getElementById("project-grid");

const renderProjects = () => {
    if (!projectGrid) return; 

    projectGrid.innerHTML = myProjects.map(({ title, tech, description, link }) => `
        <div class="project-card">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="tags">
                ${tech.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
            <a href="${link}" class="btn" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    `).join("");
};

renderProjects();

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                contactForm.innerHTML = "<h3>Thanks for reaching out! I'll get back to you soon. 🚀</h3>";
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form. Please check your connection.");
            console.error("Submission error:", error);
        }
    });
}
