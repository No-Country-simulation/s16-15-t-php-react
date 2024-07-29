import React, { useState, useEffect } from 'react';
import styles from '../styles/freelancerProfileViewPage.module.css';
import stylesProps from "../styles/freelancerCard2.module.css";
import profilePic from "../assets/profilePic.svg";
import FreelancerCard from "../components/card/FreelancerCard";
import CardProfileInfo from '../components/card/CardProfileInfo';
import AccordionItemProfile from "../components/accordion/AccordionItemProfile";
import OfferFormModal from '../components/form/OfferFormModal'; // Asegúrate de ajustar el path

const FreelancerProfileViewPage = () => {
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
        <FreelancerCard className={stylesProps} showTools={true} showProfileButton={false} img={profilePic} title={title} name={name} text={text} />
        
      </div>
      <div className={styles.rightDiv}>
        <CardProfileInfo
          text={buttonText}
          onButtonClick={handleButtonClick} // Llama a handleButtonClick cuando se hace clic
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

export default FreelancerProfileViewPage;
