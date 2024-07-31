import FreelancerCard from "../components/card/FreelancerCard";
import BrowserFilters from "../components/filters/BrowserFilters";
import styles from "../styles/browserPage.module.css";
import stylesProps from "../styles/freelancerCard.module.css";
import profilePic from "../assets/profilePic.svg";
import profilePic2 from "../assets/profileCardImg.svg";
import profilePic3 from "../assets/profileCardImg2.svg";
import { useState } from "react";
import OfferProposalCard from "../components/card/OfferProposalCard";
import ButtonBg from "../components/button/ButtonBg";

function BrowserPage() {
  const [activeTab, setActiveTab] = useState('freelancers');

  return (
    <div>
      <header className={styles.browserTabs}>
        <h2 className={`${styles.tabs} ${activeTab === 'freelancers' ? styles.activeTab : ''}`} 
            onClick={() => {setActiveTab('freelancers')}}>Freelancers</h2>
        <h2 className={`${styles.tabs} ${activeTab === 'ofertas' ? styles.activeTab : ''}`}
            onClick={() => {setActiveTab('ofertas')}}>Ofertas</h2>
        <h2 className={`${styles.tabs} ${activeTab === 'propuestas' ? styles.activeTab : ''}`}
            onClick={() => {setActiveTab('propuestas')}}>Propuestas</h2>
      </header>
      <main className={styles.browser}>
        <BrowserFilters activeTab={activeTab} />
        <section className={styles.cardContainer}>
          {activeTab === 'freelancers' && (
            <>
              <FreelancerCard 
                img={profilePic}
                title="Creadora de contenido I Experta en Marketing digital"
                name="Mercedes Rodriguez"
                text="Soy una apasionada creadora de contenido y experta en marketing digital. Con una amplia experiencia en la industria, me especializo en desarrollar estrategias innovadoras y efectivas para potenciar la presencia online de marcas... Ver más"
                className={stylesProps}
                toolsText1="Marketing digital"
                toolsText2="Google Analytics"
                toolsText3="Creador UGC"
              />
              <FreelancerCard 
                img={profilePic2}
                title="¡Analista de datos y Data Entry!"
                name="Luisa Guerrero"
                text="Nacida en Barcelona, España el 6 de octubre de 1964Más de 30 años de experiencia trabajando como freelance/empresaria para todo tipo de organizaciones y proyectos: empresariales, educativos y soc... Ver más"
                className={stylesProps}
                toolsText1="Analista de datos"
                toolsText2="Data entry"
                toolsText3="Business Intelligence"
              />
              <FreelancerCard 
                img={profilePic3}
                title="Creador de contenido I Guionista y editor"
                name="Pablo Ortiz"
                text="Editor I Guionista I Vlogger Brindo mis servicios de editor y guionista para aquel que busque contenido de calidad y sobre todo que quiera tener valor en su contenido, tuve presencia en... Ver más"
                className={stylesProps}
                toolsText1="Edición de video"
                toolsText2="Escritura y guión"
                toolsText3="Community Manager"
              />
            </>
          )}
          {activeTab === 'ofertas' && (
            <>
              <OfferProposalCard 
                title="Creador de contenido de TikTok y experto en crecimiento y participación"
                countryandprice="País: Colombia  -  $300USD por semana"
                text="Mi nombre es Mercedes y soy una entusiasta de TikTok con un don para crear contenido atractivo y viral. Tengo un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
                ButtonBg={ButtonBg}
                toolsText1="Marketing digital"
                toolsText2="Creador de contenido UGC"
                toolsText3="Community Manager"
                buttonText="Contratar"
              />
              <OfferProposalCard
                title="Creador de contenido para redes sociales"
                countryandprice="País: Mexico  -  $1500USD por mes"
                text="¡Hola! Soy Pablo, un freelancer apasionado por la creación y gestión de redes sociales con 10 años de experiencia. Mi misión es ayudar a empresas y emprendedores a destacar en estas plataformas a través de estrategias efectivas y contenido atractivo."
                ButtonBg={ButtonBg}
                toolsText1="Hootsuite"
                toolsText2="Canva"
                toolsText3="Google Analytics"
                buttonText="Contratar"
              />
              <OfferProposalCard 
                title="Programador frontend"
                countryandprice="País: Argentina  -  $150USD por semana"
                text="Mi nombre es Pedro y mi objetivo es transformar ideas y conceptos en experiencias web visualmente impactantes y funcionales. Con un enfoque en el diseño responsivo y la optimización del rendimiento, trabajo para asegurar que cada proyecto no solo cumpla con tus expectativas, sino que las supere."
                ButtonBg={ButtonBg}
                toolsText1="React"
                toolsText2="Webpack"
                toolsText3="Bootstrap"
                buttonText="Contratar"
              />
            </>
          )}
          {activeTab === 'propuestas' && (
            <>
              <OfferProposalCard 
                title="Diseñador Creativo y Versátil para Proyecto Web"
                countryandprice="País: Venezuela  -  $400USD por semana"
                text="Estamos en busca de un diseñador talentoso y creativo para colaborar en el desarrollo de nuestro próximo proyecto web. Nuestro objetivo es crear una plataforma innovadora y visualmente impactante que ofrezca una experiencia de usuario excepcional y refleje la identidad de nuestra marca."
                toolsText1="Adobe XD"
                toolsText2="Figma"
                toolsText3="Sketch"
                ButtonBg={ButtonBg}
                buttonText="Contactar"
              />
              <OfferProposalCard 
                title="Programador Frontend Experto para Proyecto Web"
                countryandprice="País: Perú  -  $200USD por semana"
                text="Estamos en búsqueda de un programador frontend altamente calificado para desarrollar y optimizar la interfaz de nuestro sitio web. Queremos crear una experiencia de usuario fluida y atractiva, con un enfoque en el diseño responsivo y la eficiencia del rendimiento."
                toolsText1="VS Code"
                toolsText2="Webpack"
                toolsText3="Bootstrap"
                ButtonBg={ButtonBg}
                buttonText="Contactar"
              />
              <OfferProposalCard 
                title="Creador de Contenido para Redes Sociales Creativo y Experimentado"
                countryandprice="País: Uruguay  -  $300USD por semana"
                text="Queremos una persona con habilidades excepcionales en la creación de contenido visual y escrito que pueda ayudar a elevar nuestra marca y conectar efectivamente con nuestra audiencia."
                toolsText1="Canva"
                toolsText2="Hootsuite"
                toolsText3="Adobe Spark"
                ButtonBg={ButtonBg}
                buttonText="Contactar"
              />
            </>
          )}
        </section>
      </main> 
    </div>
  );
}

export default BrowserPage;
