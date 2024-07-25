import ButtonBg from "../components/button/ButtonBg"
import PropTypes from 'prop-types'
import styles from "../styles/proposalForm.module.css"

function ProposalFormEnd() {

  const ButtonSquare = ({label}) => {
    return <button className={styles.buttonSquare}>{label}</button>
  };

  ButtonSquare.propTypes = {
    label: PropTypes.string,
  }

  return (
    <main className={styles.proposalFormContainer}>
    <section className={styles.form}>
      <h1 className={styles.titleForm}>Últimos detalles</h1>
      <section className={styles.formContainer}>
        <div>
          <p className={styles.labelForm}>Define la experiencia necesaria de el freelancer</p>
            <ButtonSquare label="Principante" />
            <ButtonSquare label="Intermedio" />
            <ButtonSquare label="Avanzado" />
        </div>
        <div>
          <p className={styles.labelForm}>Complejidad de la oferta</p>      
            <ButtonSquare label="Oferta con una complejidad básica" />
            <ButtonSquare label="Oferta con una complejidad media" />
            <ButtonSquare label="Oferta con una complejidad alta" />
        </div>
        <div>
          <p className={styles.labelForm}>Presupuesto</p>
            <ButtonSquare label="Menos de $50.000" />
            <ButtonSquare label="$50.000 a $70.000" />
            <ButtonSquare label="$70.000 a $90.000" />
            <ButtonSquare label="$90.000 a $200.000" />
            <ButtonSquare label="$200.000 a $500.00" />
            <ButtonSquare label="Más de $500.000" />
            <ButtonSquare label="Otro" />
        </div>
        <div>
          <label className={styles.labelForm}>Fecha de finalización</label>
          <input type="date" className={styles.inputProposal} />
        </div>
      </section>
    </section>
    <section className={styles.buttonNextContainer}>
      <ButtonBg text="Siguiente" to='/proposalForm' />
    </section>
  </main>
  )
}

export default ProposalFormEnd