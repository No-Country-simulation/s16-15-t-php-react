import React from 'react';
import styles from '../styles/homePage.module.css';
import CardHomePage from '../components/card/CardHomePage';
import CardHomePageInfo from '../components/card/CardHomePageInfo';
import OfferProposalCard from "../components/card/OfferProposalCard";
import FreelancerCard from "../components/card/FreelancerCard";
import Footer from "../components/footer/Footer";
import imgFree from "../assets/profilebutton.svg"
import imgEmpl from "../assets/employerProfileCardImg.svg"
import profilePic from "../assets/profilePic.svg";
import ButtonBg from "../components/button/ButtonBg";

const HomePage = () => {
  const freelancerProfile = true;
  const employerProfile = false;

  let img = '';
  let name = '';
  let job = '';
  let activityNumber = '';
  let infoNumber = '';

  if(freelancerProfile) {
    img = imgFree
    name = 'Lucía Guerrero'
    job = 'Diseñadora gráfica'
    activityNumber = '15'
    infoNumber = '12'
  } else if(employerProfile) {
    img = imgEmpl
    name = 'ACME Corporation'
    job = 'Data entry | Data analyst'
    activityNumber = '10'
    infoNumber = '9'
  }  

  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
        <CardHomePage freelancer={freelancerProfile} employer={employerProfile}/>
        <div className={styles.infoDiv}>
          <CardHomePageInfo
            img={img}
            name={name}
            job={job}
            employer={employerProfile}
            freelancer={freelancerProfile}
            activityNumber={activityNumber}
            infoNumber={infoNumber}
          />
        </div>
      </div>
      {freelancerProfile && (
        <div className={styles.secondDiv}>
          <h1 className={styles.workText}>Trabajos que te pueden gustar</h1>
          <OfferProposalCard 
            title="Creador de Contenido para Redes Sociales Creativo y Experimentado"
            countryandprice="País: Uruguay  -  $300USD por semana"
            text="Queremos una persona con habilidades excepcionales en la creación de contenido visual y escrito que pueda ayudar a elevar nuestra marca y conectar efectivamente con nuestra audiencia."
            width="779px"
            height="208px"
            toolsText1="Canva"
            toolsText2="Hootsuite"
            toolsText3="Adobe Spark"
            ButtonBg={ButtonBg}
            buttonText="Contactar"
          />
        </div>
      )}
      {employerProfile && (
        <div className={styles.secondDiv}>
          <h1 className={styles.workText}>Freelancers que coinciden con tu búsqueda</h1>
          <FreelancerCard 
            img={profilePic}
            title="Creadora de contenido I Experta en Marketing digital"
            name="Mercedes Rodriguez"
            text="Soy una apasionada creadora de contenido y experta en marketing digital. Con una amplia experiencia en la industria, me especializo en desarrollar estrategias innovadoras y efectivas para potenciar la presencia online de marcas... Ver más"
            toolsText1="Marketing digital"
            toolsText2="Google Analytics"
            toolsText3="Creador UGC"
          />
        </div>
      )}
    </div>
  );
}

export default HomePage;