import PropTypes from 'prop-types'
import ButtonGrey from '../button/ButtonGrey'
import styles from '../../styles/freelancerCard.module.css'
import ButtonBg from '../button/ButtonBg'

const FreelancerCard = ({img, title, name, text, className}) => {
  return (
    <article className={`${styles.cardContainer} ${className.cardContainer}`}>
      <div className={`${styles.imgContainer} ${className.imgContainer}`}>
        <img src={img} alt='foto de perfil' className={`${styles.img} ${className.img}`} />
      </div>
      <div>
      <section className={`${styles.titleSection} ${className.titleSection}`}>
        <div>
            <h1 className={`${styles.title} ${className.title}`}>{title}</h1>
            <h3 className={`${styles.name} ${className.name}`}>{name}</h3>
        </div>
        <div className={`${styles.btnProfileContainer} ${className.btnProfileContainer}`}>
            <ButtonBg text="Ver perfil"/>
        </div>
      </section>
      <section className={`${styles.buttonSection} ${className.buttonSection}`}>
        <ButtonGrey 
          text="Marketing digital"/>
        <ButtonGrey 
          text="Creador de contenido"/>
        <ButtonGrey 
          text="Creador UGC"/>
      </section>
      <section className={`${styles.textSection} ${className.textSection}`}>
        <p className={`${styles.text} ${className.text}`}>{text}</p>
      </section>
      </div>
    </article>
  )
}

FreelancerCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  className:  PropTypes.shape({
    cardContainer: PropTypes.string,
    imgContainer: PropTypes.string,
    img: PropTypes.string,
    titleSection: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    buttonSection: PropTypes.string,
    textSection: PropTypes.string,
    text: PropTypes.string,
    btnProfileContainer: PropTypes.string
  }),
}

FreelancerCard.defaultProps = {
  className: {},
};

export default FreelancerCard