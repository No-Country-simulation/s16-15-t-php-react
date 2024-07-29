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
					title="Creador de contenido I Guionista y editor"
					name="Pablo Ortiz"
					text="Editor I Guionista I Vlogger Brindo mis servicios de editor y guionista para aquel que busque contenido de calidad y sobre todo que quiera tener valor en su contenido, tuve presencia en... Ver más"
					showProfileButton={false}
				/>

				<h1 className={styles.titleForm}>Esta es su oferta:</h1>
				<OfferProposalCard
            title="Creador de contenido para redes sociales"
            countryandprice="País: Mexico  -  $300USD por semana"
            text="Buscamos un entusiasta de TikTok con un don para crear contenido atractivo y viral. Si tienes un historial comprobado de creación de contenido, crecimiento orgánico de cuentas de TikTok y participación de audiencias, ¡trabajemos juntos!"
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