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

  const region = [
    {value: "todas las regiones", label: "Todas las regiones"},
    {value: "américa del sur y central", label: "América del Sur y Central"},
    {value: "américa del norte", label: "América del Norte"},
    {value: "europa", label: "Europa"},
    {value: "africa", label: "Africa"},
    {value: "asia", label: "Asia"},
    {value: "asutralia / Oceania ", label: "Asutralia / Oceania"},
  ]

  const language = [
    {value: "todos los idiomas", label: "Todos los idiomas"},
    {value: "ingles", label: "Ingles"},
    {value: "español", label: "Español"},
    {value: "italiano", label: "Italiano"},
    {value: "francés", label: "Francés"},
    {value: "portugués", label: "Portugués"},
  ]

  return (
    <aside className={styles.filtersContainer}>
        <section>
          <h2 className={styles.filtersTitle}>Skills</h2>
          <Select options={skills}/>
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Ubicación</h2>
          <Select options={region} />
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Experiencia</h2>
          {/* temporario */}
          <div className={styles.experience}>
            <button>Junior</button>
            <button>Trainee</button>
            <button>Semi Snr</button>
            <button>Senior</button>
          </div>
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Idioma</h2>
          <Select options={language} />
        </section>
        <section>
          <h2 className={styles.filtersTitle}>Precio</h2>
          {/* temporario */}
          <input type="range" />
        </section>
    </aside>
  )
}

export default BrowserFilters