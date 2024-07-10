import '../../styles/footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer>
      <section>
        <img src={logo} alt="SkillMatchLogo" />
      </section>
      <section>
        <h3>¡SkillMatch!</h3>
        <ul>
          <li>Sobre nosotros</li>
          <li>Preguntas frecuentes</li>
          <li>Quiero ser Freelancer</li>
          <li>Quiero contratar talento Freelance</li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
