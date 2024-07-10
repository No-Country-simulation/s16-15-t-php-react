import ButtonBdr from "../components/button/ButtonBdr"
import ButtonBg from "../components/button/ButtonBg"
import '../styles/landingPage.css'
import LandingPageImgMain from '../assets/landing-img-main.svg'

const LandingPage = () => {
  return (
      <main>
      <section>
        <div className="col-text">
          <h1>Tu puente hacia oportunidades freelance excepcionales</h1>
          <ButtonBg text="Contratar un freelance"/>
          <ButtonBdr text="Quiero ser freelance" />
          </div>
        <div className="col-img">
        <img src={LandingPageImgMain} alt="" />
        </div>
      </section>
      </main>
  )
}

export default LandingPage