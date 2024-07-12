import lupa from '../../assets/icono-busqueda.svg'
import styles from '../../styles/inputSearch.module.css'

const InputSearch = () => {
  return (
    <div className={styles.searchInput}>
      <input type="search" placeholder="Buscar talento..." />
      <button>
        <img src={lupa} alt="" />
      </button> 
    </div>
  )
}

export default InputSearch