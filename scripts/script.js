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
        link: "https://cma1uba.github.io/Movie-watchlist/ "
    },
{
    title: "E-Commerce",
    tech: ["Javascript", "CSS"],
    description: "An E-commerce with a simple modern design exhibiting add products to cart, price calculations and checkout.",
    link: "https://cma1uba.github.io/E-commerce/"
},
];

const projectGrid = document.getElementById("project-grid");

const renderProjects = () => {
    projectGrid.innerHTML = myProjects.map(({ title, tech, description, link }) => `
        <div class="project-card">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="tags">
                ${tech.map(t => `<span class="tag">${t}</span>`).join("")}
            </div>
            <a href="${link}" class="btn">View Project</a>
        </div>
    `).join("");
};

renderProjects();
