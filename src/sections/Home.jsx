import '../styles/container.css';
import Foto from '../assets/Foto-Perfil.jpg';

function Home() {
    return (
        <>
            <div id='home' className='container-home'>
                <section className="home" id="home">
                    <div className="left-content">
                        <div className="message-bubble">
                            <div className="message-txt">
                                <p className="text-home">Hola, Yo soy</p>
                            </div>
                        </div>
                        <h1 className="title-home">Ing. Yehinner D. Torres Astorga</h1>
                        <p className="text-home">Profesional en desarrollo web y diseñador UI/UX</p>
                        <div className="home-button">
                            <a className="btn-cv" href='/public/documents/CV - Yehinner.pdf' download>Descargar CV</a>
                            <button className="btn-port">Mi trabajo</button>
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={Foto} alt="Foto perfil" className="perfil-profesional" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home