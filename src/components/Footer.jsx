import '../styles/components.css'

function Footer() {
    return (
        <>
            <footer className='footer-contact'>
                <div className='social-media'>
                    <h3 className='title-section'>Redes Sociales</h3>
                    <p className='information-section'>Desarrollador Full Stack Junior</p>
                    <p className='information-section'>Soluciones eficientes y escalables con enfoque en usabilidad</p>
                    <div className='social-media-icons'>
                        <a href="https://github.com/YehinnerTA" target='_blank' className='social-icon'>
                            <i className='fa-brands fa-github'></i>
                        </a>
                        <a href="https://wa.me/51910317266" target='_blank' className='social-icon'>
                            <i className='fa-brands fa-whatsapp'></i>
                        </a>
                    </div>
                </div>
                <div className='contact'>
                    <h3 className='title-section'>Contacto</h3>
                    <div className='phone-number'>
                        <i className='fa-solid fa-phone'></i>
                        <p className='information-section'>+51 910317266</p>
                    </div>
                    <div className='email'>
                        <i className='fa-solid fa-envelope'></i>
                        <p className='information-section'>ytorresastorga@gmail.com</p>
                    </div>
                    <a href="mailTo:ytorresastorga@gmail.com" className='btn-gmail btn-email'>
                        <span className='icon-message'>
                            <i className='fa-solid fa-message'></i>
                        </span>
                        Escríbeme al Gmail
                    </a>
                    <a href="https://wa.me/51910317266" className='btn-gmail btn-email'>
                        <span className='icon-message'>
                            <i className='fa-solid fa-message'></i>
                        </span>
                        Escríbeme al WhatsApp
                    </a>
                </div>
                <div className='my-services'>
                    <h3 className='title-section'>Mis Servicios</h3>
                    <p className='information-section'>Desarrollo web</p>
                    <p className='information-section'>Optimización de código</p>
                    <p className='information-section'>Diseñador UI / UX</p>
                    <p className='information-section'>Gestión de Proyectos ágiles</p>
                </div>
            </footer>
        </>
    )
}

export default Footer