import '../styles/container.css';
import Foto from '../assets/Foto-Perfil.jpg';
import projects from '../data/project.json';

function About() {
    return (
        <>
            <section id="about" className="about-section">
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
                            <div className="about-image-container">
                                <img src={Foto} alt="Foto perfil" className="about-image-inner" />
                            </div>
                        </div>
                        <div className="about-text">
                            <h2>Sobre mí</h2>
                            <p>Soy un desarrollador Full Stack Junior apasionado por crear experiencias digitales excepcionales. Mi enfoque se centra en desarrollar soluciones eficientes y escalables con un fuerte énfasis en la usabilidad y el diseño.</p>
                            <p>Combino habilidades técnicas sólidas con una comprensión profunda del diseño UI/UX para entregar productos que no solo funcionan bien, sino que también brindan experiencias de usuario memorables.</p>
                            <p>Mi especialidad incluye desarrollo web moderno, optimización de código, y gestión de proyectos ágiles, siempre manteniéndome actualizado con las últimas tecnologías y tendencias de la industria.</p>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">1+</span>
                            <div className="stat-label">Años de Experiencia</div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">{projects.length}+</span>
                            <div className="stat-label">Proyectos Completados</div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">10+</span>
                            <div className="stat-label">Clientes Satisfechos</div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">100%</span>
                            <div className="stat-label">Compromiso</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About