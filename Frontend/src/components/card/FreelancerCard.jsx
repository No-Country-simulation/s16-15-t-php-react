import PropTypes from 'prop-types';
import ButtonGrey from '../button/ButtonGrey';
import styles from '../../styles/freelancerCard.module.css';
import ButtonBg from '../button/ButtonBg';

const FreelancerCard = ({ img, title, name, text, className, showTools, toolsText1, toolsText2, toolsText3, showProfileButton }) => {
  return (
    <article className={`${styles.cardContainer} ${className.cardContainer}`}>
      <div className={`${styles.imgContainer} ${className.imgContainer}`}>
        <img src={img} alt='foto de perfil' className={`${styles.img} ${className.img}`} />
      </div>
      <div className={`${styles.textDiv} ${className.textDiv}`}>
        <section className={`${styles.titleSection} ${className.titleSection}`}>
          <div>
              <h1 className={`${styles.title} ${className.title}`}>{title}</h1>
              <h3 className={`${styles.name} ${className.name}`}>{name}</h3>
          </div>
          {showProfileButton && (
            <div className={`${styles.btnProfileContainer} ${className.btnProfileContainer}`}>
                <ButtonBg text="Ver perfil"/>
            </div>
          )}
        </section>
        
        <section className={`${styles.textSection} ${className.textSection}`}>
          <p className={`${styles.text} ${className.text}`}>{text}</p>
        </section>
        {showTools && (
          <section className={styles.tools}>
            <p className={styles.toolsText}>Herramientas:</p>
            <div className={styles.toolsButtons}>
              <ButtonGrey 
                text="SQL "/>
              <ButtonGrey 
                text="SAS "/>
              <ButtonGrey 
                text="Ruby"/>
            </div>
          </section>
        )}
      </div>
    </article>
  )
}

FreelancerCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.shape({
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
  showTools: PropTypes.bool,
  showProfileButton: PropTypes.bool,
}

FreelancerCard.defaultProps = {
  className: {},
  showTools: false,
  showProfileButton: true, 
};

export default FreelancerCard;
