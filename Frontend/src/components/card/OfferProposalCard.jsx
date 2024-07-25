import PropTypes from 'prop-types';
import ButtonGrey from "../button/ButtonGrey";
import styles from "../../styles/offerProposalCard.module.css";

const OfferProposalCard = ({ title, text, countryandprice, width = '740px', height = '208px' }) => {
  const cardStyle = {
    width,
    height
  };

  return (
    <article className={styles.cardOPcontainer} style={cardStyle}>
      <section>
        <h1 className={styles.opTitle}>{title}</h1>
        <p className={styles.countryAndPrice}>{countryandprice}</p>
      </section>
      <section className={styles.buttonsSectionOp}>
        <ButtonGrey text="Marketing digital" />
        <ButtonGrey text="Creador de contenido" />
        <ButtonGrey text="Creador UGC" />
      </section>
      <section>
        <p className={styles.text}>{text}</p>
      </section>
    </article>
  );
};

OfferProposalCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  countryandprice: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

export default OfferProposalCard;
