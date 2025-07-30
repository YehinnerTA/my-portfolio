import '../styles/components.css'
import logoPerson from '../assets/logo-portfolio.png'

function Header() {
    return (
        <>
            <header className='header-portfolio'>
                <nav className='nav-portfolio'>
                    <span className='span-logo-portfolio'>
                        <img className='logo-portfolio' src={logoPerson} alt='Logo portafolio' />
                    </span>
                    <input className='checkbox' type='checkbox' />
                    <div className='compressed-line'>
                        <span className='line line1'></span>
                        <span className='line line2'></span>
                        <span className='line line3'></span>
                    </div>
                    <div className='header-information'>
                        <ul className='nav-option-portfolio'>
                            <li className='option-nav'>Sobre mí</li>
                            <li className='option-nav'>Servicios</li>
                            <li className='option-nav'>Portafolio</li>
                            <li className='option-nav'>Contacto</li>
                        </ul>
                        <div className='option-gmail'>
                            <a className='btn-gmail' href="mailTo:ytorresastorga@email.com">Contratame</a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header