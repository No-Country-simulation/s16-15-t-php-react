import PropTypes from 'prop-types'
import styles from "../styles/createProposalForm.module.css"
import ButtonBg from '../components/button/ButtonBg';

const CreateProposalForm = () => {

  // temporario
  const ButtonForm = ({text, className}) => {
    return <button className={`${styles.buttonForm} ${className}`}>{text}</button>
  };

  ButtonForm.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string
  }

  return (
    <main className={styles.proposalFormContainer}>
      <header>
        <h1 className={styles.titleForm}>Crear propuesta para freelancer</h1>
      </header>
      <section>
        <p className={styles.formText}>¿De que trata la propuesta?</p>
        <div className={styles.ButtonFormContainer}>
          <ButtonForm text="Marketing" />
          <ButtonForm text="Programación web" />
          <ButtonForm text="Crear o editar videos" />
          <ButtonForm text="Data Analyst" />
          <ButtonForm text="Crear contenido UGC" />
          <ButtonForm text="Publicidad" />
          <ButtonForm text="Diseño UX" />
          <ButtonForm text="Crear contenido UGC" /> 
          <ButtonForm text="Publicidad" />
        </div>
      
      </section>
      <section>
        <p className={styles.formText}>O puedes seleccionar una categoría</p>
        <div className={styles.ButtonFormContainer}>
          <ButtonForm text="Programación y tecnología" className={styles.buttonGrey} />
          <ButtonForm text="Datos" className={styles.buttonGrey} />
          <ButtonForm text="Diseño" className={styles.buttonGrey} />
          <ButtonForm text="Redacción" className={styles.buttonGrey} />
          <ButtonForm text="Marketing y ventas" className={styles.buttonGrey} />
          <ButtonForm text="Administrativo" className={styles.buttonGrey} />
          <ButtonForm text="Finanzas y negocio" className={styles.buttonGrey} />
          <ButtonForm text="Ingeniería y arquitectura" className={styles.buttonGrey} />
          <ButtonForm text="IA" className={styles.buttonGrey} />
        </div>

      </section>
      <div className={styles.buttonNextContainer}>
          <ButtonBg text="Siguiente" />
      </div>
    </main>
  )
}

export default CreateProposalForm