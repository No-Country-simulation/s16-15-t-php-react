import React, { useState, useEffect } from 'react';
import styles from '../styles/freelancerProfileViewPage.module.css';
import stylesProps from "../styles/freelancerCard2.module.css";
import profilePic from "../assets/profilebutton.svg";
import FreelancerCard from "../components/card/FreelancerCard";
import CardProfileInfo from '../components/card/CardProfileInfo';
import AccordionItemProfile from "../components/accordion/AccordionItemProfile";
import OfferFormModal from '../components/form/OfferFormModal';
import OfferProposalCard from "../components/card/OfferProposalCard";
import ButtonBg from "../components/button/ButtonBg";

const FreelancerProfileViewPage = () => {
  const title = "Lucía Guerrero";
  const name = "¡Analista de datos y Data Entry!Creadora de contenido | Experta en Marketing Digital";
  const text = "Nacida en Barcelona, España el 6 de octubre de 1964Más de 30 años de experiencia trabajando como freelance/empresaria para todo tipo de organizaciones y proyectos: empresariales y educativos";
  
  const mainUserLogged = true;
  const otherUserLogged = false;
  
  const [buttonText, setButtonText] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    if (mainUserLogged) {
      setButtonText("Crear oferta");
    } else if (otherUserLogged) {
      setButtonText("Contactar");
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
        <FreelancerCard className={stylesProps} showTools={true} showProfileButton={false} img={profilePic} title={title} name={name} text={text} toolsText1="Tableau" toolsText2="Microsoft Power BI" toolsText3="Python "/>
        <div className={styles.offerDiv}>
          <strong>Ofertas de Lucía Guerrero</strong>
          <div className={styles.offerTitle}>
            <OfferProposalCard 
              title="Analista de  datos"
              countryandprice="País: Colombia  -  $450USD por semana"
              text="Creo visualizaciones interactivas y dashboards que faciliten la comprensión de grandes volúmenes de datos y permitan a los usuarios explorar la información de manera intuitiva."
              
               toolsText1="Tableau" toolsText2="Microsoft Power BI" toolsText3="Python "
              
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
            <AccordionItemProfile question="Precio: $450USD por semana" />
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
