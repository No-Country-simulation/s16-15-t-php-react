import ButtonBg from '../components/button/ButtonBg'
import OfferProposalCard from '../components/card/OfferProposalCard'
import styles from '../styles/offersPage.module.css'

const OffersPage = () => {
  return (
    <main>
    <section className={styles.pageTitle}>
      <h2 className={styles.title}>Mis Contratos </h2>
    </section>
    <section className={styles.mainContainer}>
      <article className={styles.infoCardOffer}>
        <p className={styles.infoTitle}>Actividad</p>
        <div className={styles.info}>
          <p className={styles.infoText}>Vistas actuales</p>
          <span className={styles.infoSpan}>20</span>
        </div>
        <p className={styles.infoTitle}>Informacion</p>
        <div className={styles.info}>
          <p className={styles.infoText}>Contactos actuales</p>
          <span className={styles.infoSpan}>10</span>
        </div>
        <p className={styles.infoTitle}>Proyectos actuales</p>
        <p className={styles.infoText}>Cuentas con 5 proyectos actualmente</p>
      </article>
      <section className={styles.offersContainer}>
      <OfferProposalCard
            title="Diseñador Creativo y Versátil para Proyecto Web"
            countryandprice="País: Venezuela  -  $400USD por semana"
            text="Estamos en busca de un diseñador talentoso y creativo para colaborar en el desarrollo de nuestro próximo proyecto web. Nuestro objetivo es crear una plataforma innovadora y visualmente impactante que ofrezca una experiencia de usuario excepcional y refleje la identidad de nuestra marca."
            toolsText1="Adobe XD"
            toolsText2="Figma"
            toolsText3="Sketch"
            status="Pendiente"
        />
        <OfferProposalCard
            title="Diseñador Creativo y Versátil para Proyecto Web"
            countryandprice="País: Venezuela  -  $400USD por semana"
            text="Estamos en busca de un diseñador talentoso y creativo para colaborar en el desarrollo de nuestro próximo proyecto web. Nuestro objetivo es crear una plataforma innovadora y visualmente impactante que ofrezca una experiencia de usuario excepcional y refleje la identidad de nuestra marca."
            toolsText1="Adobe XD"
            toolsText2="Figma"
            toolsText3="Sketch"
            status="En curso"
        />
        <OfferProposalCard 
            title="Programador Frontend Experto para Proyecto Web"
            countryandprice="País: Perú  -  $200USD por semana"
            text="Estamos en búsqueda de un programador frontend altamente calificado para desarrollar y optimizar la interfaz de nuestro sitio web. Queremos crear una experiencia de usuario fluida y atractiva, con un enfoque en el diseño responsivo y la eficiencia del rendimiento."
            toolsText1="VS Code"
            toolsText2="Webpack"
            toolsText3="Bootstrap"
            status="Rechazada"
        />
        <OfferProposalCard 
            title="Creador de Contenido para Redes Sociales Creativo y Experimentado"
            countryandprice="País: Uruguay  -  $300USD por semana"
            text="Queremos una persona con habilidades excepcionales en la creación de contenido visual y escrito que pueda ayudar a elevar nuestra marca y conectar efectivamente con nuestra audiencia."
            toolsText1="Canva"
            toolsText2="Hootsuite"
            toolsText3="Adobe Spark"
            status="Finalizada"
        />
      </section>
    </section>
  </main>
  )
}

export default OffersPage