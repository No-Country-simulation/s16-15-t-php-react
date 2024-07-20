import lupa from '../../assets/icono-busqueda.svg'
import styles from '../../styles/inputSearch.module.css'

const InputSearch = () => {
  return (
    <div className={styles.searchInput}>
      <input type="search" placeholder="Buscar talento..." className={styles.inputSearch} />
        <img src={lupa} alt="" />
    </div>
  )
}

export default InputSearch