import FreelancerCard from "../components/card/FreelancerCard";
import BrowserFilters from "../components/filters/BrowserFilters";
import styles from "../styles/browserPage.module.css";
import stylesProps from "../styles/freelancerCard.module.css";
import profilePic from "../assets/profilePic.svg";
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
              />
              <FreelancerCard 
                img={profilePic}
                title="Creadora de contenido I Creadora UGC"
                name="Luisa Guerrero"
                text="Hola! Soy Luisa y me dedico a brindar mis servicios de creadora de contenido UGC, desde el guión, la creación e ideación de un proyecto estrella. Cuento con una trayectoría de 4 años como embajadora de varias marcas creando contenido para ellas... Ver más"
                className={stylesProps}
              />
              <FreelancerCard 
                img={profilePic}
                title="Creador de contenido I Guionista y editor"
                name="Pablo Ortiz"
                text="Editor I Guionista I Vlogger Brindo mis servicios de editor y guionista para aquel que busque contenido de calidad y sobre todo que quiera tener valor en su contenido, tuve presencia en... Ver más"
                className={stylesProps}
              />
            </>
          )}
          {activeTab === 'ofertas' && (
            <>
              <OfferProposalCard 
                title="Creador de contenido de TikTok y experto en crecimiento y participación"
                countryandprice="País: Colombia  -  $300USD por semana"
                text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
                ButtonBg={ButtonBg}
              />
              <OfferProposalCard
                title="Creador de contenido para redes sociales"
                countryandprice="País: Mexico  -  $300USD por semana"
                text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
                ButtonBg={ButtonBg}
              />
              <OfferProposalCard 
                title="Creador de contenido de TikTok y experto en crecimiento y participación"
                countryandprice="País: Colombia  -  $300USD por semana"
                text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
                ButtonBg={ButtonBg}
              />
            </>
          )}
          {activeTab === 'propuestas' && (
            <>
              <OfferProposalCard 
                title="Creador de contenido para redes sociales"
                countryandprice="País: Mexico  -  $300USD por semana"
                text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
              />
              <OfferProposalCard 
                title="Creador de contenido de TikTok y experto en crecimiento y participación"
                countryandprice="País: Colombia  -  $300USD por semana"
                text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
              />
              <OfferProposalCard 
                title="Creador de contenido de TikTok y experto en crecimiento y participación"
                countryandprice="País: Colombia  -  $300USD por semana"
                text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
              />
            </>
          )}
        </section>
      </main> 
    </div>
  );
}

export default BrowserPage;
