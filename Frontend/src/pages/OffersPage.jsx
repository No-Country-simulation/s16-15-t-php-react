import OfferProposalCard from '../components/card/OfferProposalCard'
import styles from '../styles/proposalsPage.module.css'

const OffersPage = () => {
  return (
    <main>
    <section className={styles.pageTitle}>
      <h2 className={styles.title}>Mis Ofertas</h2>
    </section>
    <section className={styles.mainContainer}>
      <article className={styles.infoCard}>
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
      <section className={styles.proposalsContainer}>
        <OfferProposalCard 
            title="Se busca diseñador web, asistente virtual, especialista en marketing en redes sociales y creador de logotipos para agencia creativa"
            countryandprice="País: Uruguay  -  $300USD por semana"
            text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
        />
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
      </section>
    </section>
  </main>
  )
}

export default OffersPage