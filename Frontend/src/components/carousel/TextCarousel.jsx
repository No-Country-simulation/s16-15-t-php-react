import { useState } from "react"
import '../../styles/textCarousel.css'

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Para Empresas y Empleadores:",
      content: (
        <p>
          <span>Talento Especializado:</span> Accede a una base de datos de freelancers calificados. <br />
          <span>Proceso de Contratación Eficiente:</span> Simplifica la contratación con propuestas automatizadas.
        </p>
      )
    },
    {
      title: "Para Freelancers:",
      content: (
        <p>
          <span>Oportunidades Relevantes:</span> Encuentra proyectos que se alineen con tus habilidades y disponibilidad a través de nuestras avanzadas herramientas de búsqueda y filtrado.<br />
          <span>Visibilidad y Reconocimiento:</span> Crea un perfil detallado, muestra tu portafolio.
        </p>
      )
    }
  ];

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <h3>{slides[currentIndex].title}</h3>
        {slides[currentIndex].content}
      </div>
      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default TextCarousel