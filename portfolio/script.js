document.getElementById("resumeBtn").addEventListener("click", () => {
  window.open("./assets/resume_example.pdf");
});

document.getElementById("contactBtn").addEventListener("click", () => {
  location.href = ".#contact";
});

async function loadProjects() {
  const response = await fetch("./api/projects");
  const projects = await response.json();

  const container = document.getElementById("projects-container");
  container.innerHTML = ""; // Clear loading text

projects.forEach(project => {
      // Create the HTML for ONE card using a Template String (backticks `)
      const cardHTML = `
          <div class="project-card">
            <div class="project-image-box">
              <img src="${project.image}" alt="${project.title}" class="project-image" />
            </div>
            <h2 class="project-title">${project.title}</h2>
            <p>${project.description}</p>
            <div class="button-container">
              <button class="btn button-outline" 
                onclick="location.href='${project.link}'">
                Github
              </button>
            </div>
            <script> alert("Hello from project: ${project.title}"); </script>
          </div>
      `;
      
      // Add the new card to the container
      container.innerHTML += cardHTML;
  });
}

// Run the function immediately when the script loads
loadProjects();