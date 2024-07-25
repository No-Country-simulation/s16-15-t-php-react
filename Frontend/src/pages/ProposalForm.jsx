import ButtonBg from "../components/button/ButtonBg"
import styles from "../styles/proposalForm.module.css"
import file from "../assets/attach_file.svg"

const ProposalForm = () => {
  return (
    <main className={styles.proposalFormContainer}>
      <section className={styles.form}>
        <h1 className={styles.titleForm}>Explicale al freelancer sobre la propuesta</h1>
        <form action="" className={styles.formContainer}>
          <label htmlFor="" className={styles.labelForm}>Titulo de la propuesta</label>
          <input type="text" className={styles.inputProposal} placeholder="Ejemplo: Necesito guionista y editor de videos " />

          <label htmlFor="" className={styles.labelForm}>¿De que trata la propuesta?</label>
          <textarea className={styles.proposalInput} placeholder="Ejemplo: En MagicCharm buscamos editor y guionista de videos, preferiblemente con experiencia en el sector y que cuente con un perfil creativo, artistico y profesional."></textarea>
          
          <label htmlFor="file" className={styles.labelForm}>Adjuntar archivos</label>
          <div className={styles.fileUploadContainer}>
            <input type="file" id="file" className={styles.file} />
            <img src={file} alt="" />
          </div>
          
          <label htmlFor="" className={styles.labelForm}>Contexto general del proyecto</label>
          <textarea className={styles.proposalInput} placeholder="Ejemplo: En MagicCharm buscamos editor y guionista de videos, preferiblemente con experiencia en el sector y que cuente con un perfil creativo, artistico y profesional."></textarea>
        </form>
      </section>
      <section className={styles.buttonNextContainer}>
        <ButtonBg text="Siguiente" to='/proposalForm' />
      </section>
    </main>
  )
}

export default ProposalForm