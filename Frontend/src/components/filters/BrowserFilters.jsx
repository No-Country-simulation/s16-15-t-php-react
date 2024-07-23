import { useState } from 'react'
import styles from '../../styles/browserFilters.module.css'
import Select from '../select/Select'
import PropTypes from 'prop-types'

const BrowserFilters = ({ activeTab }) => {
  const [price, setPrice] = useState(20);

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

  const projectDuration = [
    {value: "Menos de un mes", label: "Menos de un mes"},
    {value: "Mas de un mes", label: "Mas de un mes"},
    {value: "Un año", label: "Un año"},
  ]

  const hoursPerWeek = [
    {valu: "Menos de 30 horas semanal", label: "Menos de 30 horas semanal"},
    { value: "menos_de_10", label: "Menos de 10 horas semanal" }
  ]

  // temporario
  const ButtonSquare = ({label}) => {
    return <button className={styles.buttonSquare}>{label}</button>
  };

  ButtonSquare.propTypes = {
    label: PropTypes.string,
  }

  return (
    <aside className={styles.filtersContainer}>
        <section className={styles.browserSections}>
          <h2 className={styles.filtersTitle}>Skills</h2>
          <Select options={skills}/>
        </section>
        <section className={styles.browserSections}>
          <h2 className={styles.filtersTitle}>Ubicación</h2>
          <Select options={region} />
        </section>
        <section className={styles.browserSections}>
          <h2 className={styles.filtersTitle}>Experiencia</h2>
          {/* temporario */}
          <div className={styles.btnSection}>
            <ButtonSquare label="Junior" />
            <ButtonSquare label="Trainee" />
            <ButtonSquare label="Semi Snr" />
            <ButtonSquare label="Senior" />
          </div>
        </section>
        <section className={styles.browserSections}>
          <h2 className={styles.filtersTitle}>Idioma</h2>
          <Select options={language} />
          {/* temporario */}
          <div className={styles.btnSection}>
            <ButtonSquare label="Básico" />
            <ButtonSquare label="Intermedio" />
            <ButtonSquare label="Avanzado" />
            <ButtonSquare label="Nativo" />
          </div>
        </section>
        <section className={styles.browserSections}>
          <h2 className={styles.filtersTitle}>Precio</h2>
          {/* temporario */}
          <div className={styles.rangeContainer}>
            <div className={styles.price}>${price}</div>
            <input type="range" className={styles.range} value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </section>
        {(activeTab === 'ofertas' || activeTab === 'propuestas') && (
          <>
          <section className={styles.browserSections}>
            <h2 className={styles.filtersTitle}>Duración del proyecto</h2>
            <Select options={projectDuration}/>
          </section> 
          <section className={styles.browserSections}>
            <h2 className={styles.filtersTitle}>Horas por semana</h2>
            <Select options={hoursPerWeek}/>
          </section>
          </>
        )}
    </aside>
  )
}

BrowserFilters.propTypes = {
  activeTab: PropTypes.string
}

export default BrowserFilters