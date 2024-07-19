import PropTypes from 'prop-types'
import ButtonGrey from "../button/ButtonGrey"
import styles from "../../styles/offerProposalCard.module.css"

const OfferProposalCard = ({ title, text, countryandprice }) => {
  return (
    <article className={styles.cardOPcontainer}>
    <section>
        <h1 className={styles.opTitle}>{title}</h1>
        <p className={styles.countryAndPrice}>{countryandprice}</p>      
    </section>
    <section className={styles.buttonsSectionOp}>
      <ButtonGrey
        text="Marketing digital"/>
      <ButtonGrey 
        text="Creador de contenido"/>
      <ButtonGrey 
        text="Creador UGC"/>
    </section>
    <section >
      <p className={styles.text}>{text}</p>
    </section>
  </article>
  )
}

OfferProposalCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  countryandprice: PropTypes.string
}

export default OfferProposalCard