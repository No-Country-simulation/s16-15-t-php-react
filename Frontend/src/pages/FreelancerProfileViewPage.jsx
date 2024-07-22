import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/freelancerProfileViewPage.module.css';
import stylesProps from "../styles/freelancerCard2.module.css"
import profilePic from "../assets/profilePic.svg"
import CardProfile from '../components/card/CardProfile';
import CardProfileInfo from '../components/card/CardProfileInfo';
import FreelancerCard from "../components/card/FreelancerCard"
import TextCarousel from "../components/carousel/TextCarousel"
import AccordionItemProfile from "../components/accordion/AccordionItemProfile"

const FreelancerProfileViewPage = () => {
  const title = "Valentina Toro";
  const name = "Creadora de contenido | Experta en Marketing Digital";
  const text = "Soy una apasionada creadora de contenido y experta en marketing digital. Con una amplia experiencia en la industria, me especializo en desarrollar estrategias innovadoras y efectivas para potenciar la presencia online de marcas, creando asi un contenido más fiel al usuario, ¡contactame para saber más de mi!"
  

  return (
    <div className={styles.mainDiv}>
      <div className={styles.leftDiv}>
        <FreelancerCard className={stylesProps} showTools={true} showProfileButton={false} img={profilePic} title={title} name={name} text={text} />
          <section className={styles.FAQsSection}>
            <ul className={styles.questionsList}>
              <AccordionItemProfile clickable={true} question="Certificados (15)"/>
              <AccordionItemProfile question="Idioma: inglés avanzado" />
              <AccordionItemProfile question="América del Sur y Central" />
              <AccordionItemProfile clickable={true} question="Portfolio" />
              <AccordionItemProfile question="Precio: $45USD"/>
            </ul>
          </section>
      </div>
      <div className={styles.rightDiv}>
        <CardProfileInfo />
      </div>
    </div>
  )
}

export default FreelancerProfileViewPage