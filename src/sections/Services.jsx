import '../styles/container.css';

function Services() {
    return (
        <>
            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="section-title">Mis Servicios</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🌐</div>
                            <h3 className="service-title">Desarrollo Web</h3>
                            <p className="service-description">Desarrollo de aplicaciones web modernas y responsivas utilizando las últimas tecnologías y frameworks.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📱</div>
                            <h3 className="service-title">Optimización de Código</h3>
                            <p className="service-description">Mejoro el rendimiento y la eficiencia de tu código existente para una mejor experiencia de usuario.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🎨</div>
                            <h3 className="service-title">Diseño UI/UX</h3>
                            <p className="service-description">Creo interfaces intuitivas y atractivas que mejoran la experiencia del usuario y aumentan la conversión.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">⚡</div>
                            <h3 className="service-title">Gestión de Proyectos Ágiles</h3>
                            <p className="service-description">Implemento metodologías ágiles para asegurar entregas puntuales y calidad en cada proyecto.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔧</div>
                            <h3 className="service-title">Consultoría Técnica</h3>
                            <p className="service-description">Asesoría especializada en arquitectura de software y mejores prácticas de desarrollo.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🚀</div>
                            <h3 className="service-title">Mantenimiento Web</h3>
                            <p className="service-description">Servicios de mantenimiento continuo para mantener tu sitio web actualizado y funcionando óptimamente.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services