 
import React, { useEffect, useState } from "react";
import axios from "axios";

function Portfolio() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:5000/api/projects") // Use the Flask API endpoint
            .then(response => setProjects(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="portfolio">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
