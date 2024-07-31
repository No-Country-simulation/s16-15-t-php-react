import PropTypes from 'prop-types';
import ButtonGrey from "../button/ButtonGrey";
import styles from "../../styles/offerProposalCard.module.css";

const OfferProposalCard = ({ title, text, countryandprice, width = '740px', height = '208px', ButtonBg, status,toolsText1, toolsText2, toolsText3,buttonText }) => {
  const cardStyle = {
    width,
    height
  };

  const statusClass = {
    Aceptada: styles.aceptada,
    'En curso': styles.enCurso,
    Rechazada: styles.rechazada,
    Pendiente: styles.pendiente,
  }

  return (
    <article className={styles.cardOPcontainer} style={cardStyle}>
      <section>
        <div className={styles.btnTitleContainer}>
          <h1 className={styles.opTitle}>{title}</h1>
          {ButtonBg && <ButtonBg text={buttonText} />}
          <p className={`${styles.status} ${statusClass[status] || ''}`}>{status}</p>
        </div>
        <p className={styles.countryAndPrice}>{countryandprice}</p>
      </section>
      <section className={styles.buttonsSectionOp}>
        <ButtonGrey text={toolsText1} />
        <ButtonGrey text={toolsText2} />
        <ButtonGrey text={toolsText3} />
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
  height: PropTypes.string,
  ButtonBg: PropTypes.elementType,
  status: PropTypes.string
};

export default OfferProposalCard;
