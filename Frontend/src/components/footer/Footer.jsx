import '../../styles/footer.css'
import logo from '../../assets/logo-white.svg'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import x from '../../assets/x.svg'

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
      <section>
        <ul>
          <li>Terminos y condiciones</li>
          <li>Política de privacidad</li>
        </ul>
          <h3>Seguinos en nuestras redes</h3>
          <div className='social-media'>
            <img src={instagram} alt="instagram logo" />
            <img src={facebook} alt="facebook logo" />
            <img src={x} alt="x logo" />
          </div>
      </section>
    </footer>
  )
}

export default Footer
