import React, { useState, useEffect } from 'react';
import styles from '../styles/employerProfileViewPage.module.css';
import stylesProps from "../styles/freelancerCard2.module.css";
import profilePic from "../assets/employerProfileCardImg.svg";
import FreelancerCard from "../components/card/FreelancerCard";
import CardProfileInfo from '../components/card/CardProfileInfo';
import AccordionItemProfile from "../components/accordion/AccordionItemProfile";
import OfferFormModal from '../components/form/OfferFormModal';
import OfferProposalCard from "../components/card/OfferProposalCard";
import ButtonBg from "../components/button/ButtonBg";

const EmployerProfileViewPage = () => {
    const title = "ACME Corporation";
    const name = "Data entry | Data analyst";
    const text = "Acme Corporation es una empresa líder en el campo de los servicios de data entry, dedicada a proporcionar soluciones precisas y eficientes a clientes de diversas industrias. Con una trayectoria de excelencia y compromiso, Acme Corporation se ha posicionado como un socio confiable para empresas que buscan optimizar sus procesos de gestión de datos. Acme Corporation se enorgullece de ser un pilar en el sector de servicios de data entry, ayudando a las empresas a transformar sus datos en activos valiosos.";
    
    const mainUserLogged = false;
    const otherUserLogged = true;
    
    const [buttonText, setButtonText] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        if (mainUserLogged) {
        setButtonText("Crear oferta");
        } else if (otherUserLogged) {
        setButtonText("Crear propuesta");
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
            <div className={styles.offerDiv}>
              <strong>Propuestas actuales</strong>
              <div className={styles.offerTitle}>
                <OfferProposalCard 
                  title="¡Estamos en búsqueda de Analista de datos remoto!"
                  countryandprice="País: Colombia  -  $300USD por semana"
                  text="Tareas:👉 Analizar y optimizar las metricas para mejorar el rendimiento y conversiones 👉 Monitorear y reportar el desempeño de las tiendas online y campañas publicitarias"
                />
              </div>
              
            </div>
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

export default EmployerProfileViewPage