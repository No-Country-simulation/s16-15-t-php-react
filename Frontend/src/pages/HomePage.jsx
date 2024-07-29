import React from 'react';
import styles from '../styles/homePage.module.css';
import CardHomePage from '../components/card/CardHomePage';
import CardHomePageInfo from '../components/card/CardHomePageInfo';
import OfferProposalCard from "../components/card/OfferProposalCard";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  const freelancerProfile = false;
  const employerProfile = true;

  const name = 'Lucía Guerrero'
  const job = 'Diseñadora gráfica'
  const activityNumber = '15'
  const infoNumber = '12'


  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
        <CardHomePage />
        <div className={styles.infoDiv}>
          <CardHomePageInfo name={name} job={job} employer={employerProfile} freelancer={freelancerProfile} activityNumber={activityNumber} infoNumber={infoNumber}/>
        </div>
      </div>
      <div className={styles.secondDiv}>
        <h1 className={styles.workText}>Trabajos que te pueden gustar</h1>
        <OfferProposalCard 
          title="Creador de contenido para redes sociales"
          countryandprice="País: Mexico  -  $300USD por semana"
          text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
          width="779px"
          height="208px"
        />
      </div>
    </div>
  );
}

export default HomePage;