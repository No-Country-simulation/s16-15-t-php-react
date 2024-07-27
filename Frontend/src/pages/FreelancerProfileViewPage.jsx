import React, { useState, useEffect } from 'react';
import styles from '../styles/freelancerProfileViewPage.module.css';
import stylesProps from "../styles/freelancerCard2.module.css";
import profilePic from "../assets/profilePic.svg";
import FreelancerCard from "../components/card/FreelancerCard";
import CardProfileInfo from '../components/card/CardProfileInfo';
import AccordionItemProfile from "../components/accordion/AccordionItemProfile";

const FreelancerProfileViewPage = () => {
  const title = "Valentina Toro";
  const name = "Creadora de contenido | Experta en Marketing Digital";
  const text = "Soy una apasionada creadora de contenido y experta en marketing digital. Con una amplia experiencia en la industria, me especializo en desarrollar estrategias innovadoras y efectivas para potenciar la presencia online de marcas, creando así un contenido más fiel al usuario. ¡Contáctame para saber más de mí!";
  
  const mainUserLogged = true;
  const otherUserLogged = false;
  
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
      <div className={styles.rightDiv}>
        <div className={styles.buttonDiv} onClick={handleButtonClick}>
          <CardProfileInfo text={buttonText} />
        </div>
      </div>
      {isFormVisible && (
        <div className={styles.overlay}>
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>Formulario de Oferta</h2>
            <form className={styles.form}>
              <label className={styles.formLabel}>
                Título:
                <input className={styles.formInput} type="text" name="title" />
              </label>
              <label className={styles.formLabel}>
                Descripción:
                <textarea className={styles.formTextarea} name="description" />
              </label>
              <button className={styles.submitButton} type="submit">Enviar</button>
              <button className={styles.closeButton} type="button" onClick={() => setIsFormVisible(false)}>Cerrar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default FreelancerProfileViewPage;
