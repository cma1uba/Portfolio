const myProjects = [
    {
        title: "Weather Dashboard",
        tech: ["JavaScript", "APIs", "CSS"],
        description: "A live weather app using Open-Meteo.",
        link: "#"
    },
    {
        title: "Movie Watchlist",
        tech: ["Local Storage", "OMDb API"],
        description: "Save your favorite films to browser memory.",
        link: "#"
    }
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
