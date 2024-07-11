import lupa from '../../assets/icono-busqueda.svg'
import '../../styles/inputSearch.css'

const InputSearch = () => {
  return (
    <div className="search-input">
      <input type="search" placeholder="Buscar talento..." />
      <button className="search-button">
        <img src={lupa} alt="" />
      </button> 
    </div>
  )
}

export default InputSearch