import ButtonBdr from "../components/button/ButtonBdr"
import ButtonBg from "../components/button/ButtonBg"
import styles from '../styles/landingPage.module.css'
import LandingPageImgMain from '../assets/landing-img-main.svg'
import LandingPageImgBlue from '../assets/img-landing-blue.svg'
import Footer from "../components/footer/Footer"
import TextCarousel from "../components/carousel/TextCarousel"
import AccordionItemFAQs from "../components/accordion/AccordionItemFAQs"

const LandingPage = () => {
  return (
    <div>
        <main>
          <section className={styles.whiteSection}>
            <div className={styles.colText}>
              <h1>Tu puente hacia oportunidades freelance excepcionales</h1>
              <ButtonBg text="Contratar un freelance"/>
              <ButtonBdr text="Quiero ser freelance" />
              </div>
            <div className={styles.colImg}>
            <img src={LandingPageImgMain} alt="" />
            </div>
          </section>
          <section className={styles.blueSection}>
            <div className={styles.colImgBlue}>
              <img src={LandingPageImgBlue} alt="" />
            </div>
            <div className={styles.colTextWhite}>
              <h2>Nuestra Misión</h2>
              <p>Nuestra misión es conectar a freelancers altamente calificados con empresas y emprendedores que buscan talento especializado para llevar sus proyectos al siguiente nivel. Nos esforzamos por crear un entorno donde ambas partes puedan colaborar de manera efectiva, segura y satisfactoria.</p>
              <TextCarousel />
            </div>
          </section>
          <section className={styles.FAQsSection}>
            <h2>Preguntas Frecuentes</h2>
            <ul className={styles.questionsList}>
              <AccordionItemFAQs question="¿Cómo puedo registrarme en SkillMatch?"/>
              {/* <li>¿Cómo puedo registrarme en SkillMatch?</li> */}
              <AccordionItemFAQs question="¿Qué sucede si tengo un conflicto con un cliente?" />
              {/* <li>¿Qué sucede si tengo un conflicto con un cliente?</li> */}
              <AccordionItemFAQs question="¿Cómo puedo publicar un proyecto?" />
              {/* <li>¿Cómo puedo publicar un proyecto?</li> */}
              <AccordionItemFAQs question="¿Cómo puedo mejorar mis oportunidades de encontrar trabajo en SkillMatch?" />
              {/* <li>¿Cómo puedo mejorar mis oportunidades de encontrar trabajo en SkillMatch?</li> */}
              <AccordionItemFAQs question="¿Cómo selecciono al freelancer adecuado para mi proyecto?"/>
              {/* <li>¿Cómo selecciono al freelancer adecuado para mi proyecto?</li> */}
              <AccordionItemFAQs question="¿Cómo puedo mejorar mis oportunidades de encontrar trabajo en SkillMatch? X2"/>
              {/* <li>¿Cómo puedo mejorar mis oportunidades de encontrar trabajo en SkillMatch? X2</li> */}
              <AccordionItemFAQs question="¿Cómo selecciono al freelancer adecuado para mi proyecto? X2"/>
              {/* <li>¿Cómo selecciono al freelancer adecuado para mi proyecto? X2</li> */}
            </ul>
          </section>
        </main>
        <Footer />
      </div>
  )
}

export default LandingPage