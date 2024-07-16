import styles from '../../styles/browserFilters.module.css'
import Select from '../select/Select'

const BrowserFilters = () => {
  const skills = [
    {value: "todos", label: "Todos"},
    {value: "programador", label: "Programador"},
    {value: "diseñador UX / UI", label: "Diseñador UX / UI"},
    {value: "analista de datos", label: "Analista de datos"},
    {value: "marketing digital", label: "Marketing digital"},
    {value: "creador de contenido", label: "Creador de contenido"},
    {value: "diseñador grafico", label: "Diseñador grafico"},
    {value: "ingenieria y finanzas", label: "Ingenieria y finanzas"},
  ]

  return (
    <aside className={styles.filtersContainer}>
        <section>
          <h2 className={styles.filtersTitle}>Skills</h2>
          <Select options={skills}/>
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Ubicación</h2>
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Experiencia</h2>
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Idioma</h2>
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Precio</h2>
        </section>
    </aside>
  )
}

export default BrowserFilters