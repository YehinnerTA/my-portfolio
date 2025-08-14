import '../styles/container.css';
import projects from '../data/project.json';
import languages from '../data/lenguaje.json';

function Project() {
    const formatTechName = (name) => {
        if (!name) return '';
        return name.charAt(0).toUpperCase() + name.slice(1);
    };

    return (
        <section id="project" className="portfolio-section">
            <div className="container">
                <h2 className="section-title">Mi Portafolio</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="skill-icons">
                                    {project.tech.map((techName, i) => {
                                        const formattedName = formatTechName(techName);
                                        return (
                                            <img
                                                src={languages[formattedName]}
                                                alt={formattedName}
                                                key={i}
                                            />
                                        );
                                    })}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.demo} className="project-link">Ver Demo</a>
                                    <a href={project.links.code} className="project-link">Código</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;