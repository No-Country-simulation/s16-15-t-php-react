import ButtonBdr from "../components/button/ButtonBdr"
import ButtonBg from "../components/button/ButtonBg"
import '../styles/landingPage.css'
import LandingPageImgMain from '../assets/landing-img-main.svg'
import LandingPageImgBlue from '../assets/img-landing-blue.svg'
import Footer from "../components/footer/Footer"
import TextCarousel from "../components/carousel/TextCarousel"

const LandingPage = () => {
  return (
    <div>
        <main>
          <section className="white-section">
            <div className="col-text">
              <h1>Tu puente hacia oportunidades freelance excepcionales</h1>
              <ButtonBg text="Contratar un freelance"/>
              <ButtonBdr text="Quiero ser freelance" />
              </div>
            <div className="col-img">
            <img src={LandingPageImgMain} alt="" />
            </div>
          </section>
          <section className="blue-section">
            <div className="col-img-blue">
              <img src={LandingPageImgBlue} alt="" />
            </div>
            <div className="col-text-white">
              <h2>Nuestra Misión</h2>
              <p>Nuestra misión es conectar a freelancers altamente calificados con empresas y emprendedores que buscan talento especializado para llevar sus proyectos al siguiente nivel. Nos esforzamos por crear un entorno donde ambas partes puedan colaborar de manera efectiva, segura y satisfactoria.</p>
              <TextCarousel />
            </div>
          </section>
          <section className="FAQs-section">
            <h2>Preguntas Frecuentes</h2>
            <div className="question">
              <p>¿Cómo puedo registrarme en SkillMatch?</p>
              <hr />
            </div>

            <div className="question">
              <p>¿Qué sucede si tengo un conflicto con un cliente?</p>
              <hr />
            </div>

            <div className="question">
              <p>¿Cómo puedo publicar un proyecto?</p>
              <hr />
            </div>

            <div className="question">
              <p>¿Cómo puedo mejorar mis oportunidades de encontrar trabajo en SkillMatch?</p>
              <hr />  
            </div>

            <div className="question">
              <p>¿Cómo selecciono al freelancer adecuado para mi proyecto?</p>
              <hr />  
            </div>

            <div className="question">
              <p>¿Cómo puedo mejorar mis oportunidades de encontrar trabajo en SkillMatch? X2</p>
              <hr />
            </div>

            <div className="question">
              <p>¿Cómo selecciono al freelancer adecuado para mi proyecto? X2</p>
            </div>  
          </section>
        </main>
        <Footer />
      </div>
  )
}

export default LandingPage