import '../styles/components.css'
import logoPerson from '../assets/logo-portfolio.png'

function Header() {
    return (
        <>
            <header className='header-portfolio'>
                <nav className='nav-portfolio'>
                    <span className='span-logo-portfolio'>
                        <a href="#home">
                            <img className='logo-portfolio' src={logoPerson} alt='Logo portafolio' />
                        </a>
                    </span>
                    <input className='checkbox' type='checkbox' />
                    <div className='compressed-line'>
                        <span className='line line1'></span>
                        <span className='line line2'></span>
                        <span className='line line3'></span>
                    </div>
                    <div className='header-information'>
                        <ul className='nav-option-portfolio'>
                            <li className='option-nav'>
                                <a href="#about">Sobre mí</a>
                            </li>
                            <li className='option-nav'>
                                <a href="#services">Servicios</a>
                            </li>
                            <li className='option-nav'>
                                <a href="#project">Proyecto</a>
                            </li>
                            <li className='option-nav'>
                                <a href="#footer">Contacto</a>
                            </li>
                        </ul>
                        <div className='option-gmail'>
                            <a className='btn-gmail' href="https://wa.me/51910317266">Contratame</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header