import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/offerFormModal.module.css';
import ButtonBdr from "../../components/button/ButtonBdr";
import ButtonBg from "../../components/button/ButtonBg";

const OfferFormModal = ({ isVisible, onClose }) => {
  const formRef = useRef(null);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [date, setDate] = useState('');
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkills((prevSelectedSkills) => {
      if (prevSelectedSkills.includes(skill)) {
        return prevSelectedSkills.filter((s) => s !== skill);
      }
      if (prevSelectedSkills.length < 5) {
        return [...prevSelectedSkills, skill];
      }
      return prevSelectedSkills;
    });
  };

  const handleCategoriesClick = (category) => {
    setSelectedCategories([category]);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío real del formulario

    console.log({
      title,
      description,
      selectedSkills,
      selectedCategories,
      date,
    });
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      setSelectedSkills([]);
      setSelectedCategories([]);
      setDate('');
      setTitle('');
      setDescription('');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const skills = ['Marketing', 'Programación web', 'Crear o editar videos', 'Data Analyst', 'Publicidad', 'Data analyst', 'Crear contenido UGC', 'Publicidad', 'Creador contenido UGC'];
  const categories = ['Programación y tecnología', 'Datos', 'Diseño', 'Redacción', 'Marketing y ventas', 'Ingeniería y arquitectura', 'IA', 'Finanzas y negocio', 'Administrativo'];

  return (
    <div className={styles.overlay}>
      <div ref={formRef} className={styles.formContainer}>
        <h2 className={styles.formTitle}>Explícale tu oferta</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.formLabel}>
            Título de la oferta:
          </label>
          <input
            className={styles.formInput}
            type="text"
            name="title"
            placeholder="Ejemplo: Analista de datos | Power BI | SQL"
            value={title}
            onChange={handleTitleChange}
          />
          <label className={styles.formLabel2}>
            Descripción de la oferta:
          </label>
          <textarea
            className={styles.formTextarea}
            name="description"
            placeholder="Describe los detalles principales del proyecto de forma clara y concisa"
            value={description}
            onChange={handleDescriptionChange}
          />
          <label className={styles.formLabel2}>
            Selecciona las skills necesarias (máximo 5):
          </label>
          <div className={styles.skillsContainer}>
            {skills.map((skill) => (
              <button
                key={skill}
                type="button"
                className={`${styles.skillButton} ${selectedSkills.includes(skill) ? styles.selected : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                {skill}
              </button>
            ))}
          </div>
          <label className={styles.formLabel2}>
            O puedes seleccionar una categoría (opcional):
          </label>
          <div className={styles.skillsContainer}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`${styles.categoryButton} ${selectedCategories.includes(category) ? styles.selected : ''}`}
                onClick={() => handleCategoriesClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <label className={styles.formLabel2}>
            Fecha de ejecución (opcional):
          </label>
          <input
            className={styles.formInput}
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <div>
            <button className={styles.submitButton} type="submit">Enviar</button>
            <button className={styles.closeButton} type="button" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OfferFormModal;
