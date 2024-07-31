import PropTypes from 'prop-types';
import ButtonGrey from '../button/ButtonGrey';
import styles from '../../styles/freelancerEditCard.module.css';
import ButtonBg from '../button/ButtonBg';
import iconEdit from '../../assets/iconEdit.svg';

const FreelancerEditCard = ({ img, title, name, text, className, showTools, showProfileButton }) => {
    return (
      <article className={`${styles.cardContainer} ${className.cardContainer}`}>
        <img src={iconEdit} alt="Edit Icon" style={{ height: '30px', width: '30px' }} />

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
          {showTools && (
            <section className={styles.tools}>
              <p className={styles.toolsText}>Herramientas:</p>
              <div className={styles.toolsButtons}>
                <ButtonGrey 
                  text="Marketing digital"/>
                <ButtonGrey 
                  text="Creador de contenido"/>
                <ButtonGrey 
                  text="Creador UGC"/>
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

export default FreelancerEditCard