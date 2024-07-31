import ButtonBg from '../components/button/ButtonBg'
import FreelancerCard from '../components/card/FreelancerCard'
import styles from '../styles/hiringForm.module.css'
import profilePic from "../assets/profilePic.svg";
import OfferProposalCard from '../components/card/OfferProposalCard';
import { useState } from 'react';

const HiringForm = () => {
	const [price, setPrice] = useState(20);

	return (
		<main className={styles.hiringFormContainer}>
		<section className={styles.hiringForm}>
			<section action="" className={styles.formContainer}>

				<h1 className={styles.titleForm}>Estas contratando a:</h1>
				<FreelancerCard 
					img={profilePic}
					title="Creadora de contenido | Experta en Marketing Digital"
					name="Valentina Toro"
					text="Soy una apasionada creadora de contenido y experta en marketing digital. Con una amplia experiencia en la industria, me especializo en desarrollar estrategias innovadoras y efectivas para potenciar la presencia online de marcas, creando así un contenido más fiel al usuario. ¡Contáctame para saber más de mí!"
					showProfileButton={false}
					toolsText1="Diseño digital" 
					toolsText2="Análisis de alcance" 
					toolsText3="Manejo de cuentas"
				/>

				<h1 className={styles.titleForm}>Esta es su oferta:</h1>
				<OfferProposalCard 
              title="Creador de contenido de TikTok y experto en crecimiento y participación"
              countryandprice="País: Colombia  -  $450USD por semana"
              text="Soy entusiasta de TikTok con un don para crear contenido atractivo y viral. Tengo un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
              
              toolsText1="Marketing digital"
              toolsText2="Google Analytics"
              toolsText3="Creador UGC"
              buttonText="Contratar"
            />

				<h1 className={styles.titleForm}>Establece un presupuesto:</h1>
          <div className={styles.rangeContainer}>
            <div className={styles.price}>${price}</div>
            <input type="range" className={styles.range} min={10000} max={100000} value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
					<section className={styles.inputDateContainer}>
						<label className={styles.titleForm}>Fecha de inicio</label>
						<input type="date" className={styles.inputHiringDate} />

						<label className={styles.titleForm}>Fecha de finalización</label>
						<input type="date" className={styles.inputHiringDate} />
					</section>
					
			</section>
		</section>
		<section className={styles.buttonNextContainer}>
			<ButtonBg text="Siguiente" to='/proposalFormEnd' />
		</section>
	</main>
  )
}

export default HiringForm