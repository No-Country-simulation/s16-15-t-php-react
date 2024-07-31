import React, { useState, useEffect } from 'react';
import styles from '../styles/freelancerEditProfileViewPage.module.css';
import stylesProps from "../styles/freelancerCard2.module.css";
import profilePic from "../assets/profilePic.svg";
import FreelancerEditCard from "../components/card/FreelancerCard";
import CardProfileInfo from '../components/card/CardProfileInfo';
import AccordionItemProfile from "../components/accordion/AccordionItemProfile";
import OfferFormModal from '../components/form/OfferFormModal';
import OfferProposalCard from "../components/card/OfferProposalCard";
import ButtonBg from "../components/button/ButtonBg";

const FreelancerEditProfileViewPage = () => {
    const title = "Valentina Toro";
  const name = "Creadora de contenido | Experta en Marketing Digital";
  const text = "Soy una apasionada creadora de contenido y experta en marketing digital. Con una amplia experiencia en la industria, me especializo en desarrollar estrategias innovadoras y efectivas para potenciar la presencia online de marcas, creando así un contenido más fiel al usuario. ¡Contáctame para saber más de mí!";
  
  const mainUserLogged = false;
  const otherUserLogged = true;
  
  const [buttonText, setButtonText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (mainUserLogged) {
      setButtonText("Crear oferta");
    } else if (otherUserLogged) {
      setButtonText("Contratar");
    } else {
      setButtonText("");
    }
  }, [mainUserLogged, otherUserLogged]);

  const handleButtonClick = () => {
    if (buttonText === "Crear oferta") {
      setIsFormVisible(true);
    }
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <FreelancerEditCard className={stylesProps} showTools={true} showProfileButton={false} img={profilePic} title={title} name={name} text={text} />
        <div className={styles.offerDiv}>
          <strong>Ofertas de Valentina Toro</strong>
          <div className={styles.offerTitle}>
            <OfferProposalCard 
              title="Creador de contenido de TikTok y experto en crecimiento y participación"
              countryandprice="País: Colombia  -  $300USD por semana"
              text="Soy entusiasta de TikTok con un don para crear contenido atractivo y viral. Tengo un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
              ButtonBg={ButtonBg}
            />
          </div>
          
        </div>
      </div>
      <div className={styles.rightDiv}>
        <CardProfileInfo
          text={buttonText}
          onButtonClick={handleButtonClick} 
        />
        <section className={styles.FAQsSection}>
          <ul className={styles.questionsList}>
            <AccordionItemProfile clickable={true} question="Certificados (15)" />
            <AccordionItemProfile question="Idioma: inglés avanzado" />
            <AccordionItemProfile question="América del Sur y Central" />
            <AccordionItemProfile clickable={true} question="Portfolio" />
            <AccordionItemProfile question="Precio: $45USD" />
          </ul>
        </section>
      </div>
      <OfferFormModal
        isVisible={isFormVisible}
        onClose={() => setIsFormVisible(false)}
      />
    </div>
  );
}

export default FreelancerEditProfileViewPage