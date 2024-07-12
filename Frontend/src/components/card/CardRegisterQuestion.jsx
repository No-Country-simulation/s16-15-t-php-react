import React, { useState } from 'react';
import '../../styles/cardRegisterQuestion.css';
import registerCard1 from '../../assets/registerCard1.svg';
import registerCard2 from '../../assets/registerCard2.svg';

const CardRegisterQuestion = ({ onOptionChange }) => {
    
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  return (
    <div id="div-card">
      <div id="div-card1" onClick={() => handleOptionChange('client')} className={selectedOption === 'client' ? 'selected' : ''}>
        <span>Soy cliente en busca de talento <br />freelance</span>
        <img src={registerCard1} alt="Client" />
        <div className="div-radio">
          <input
            type="radio"
            checked={selectedOption === 'client'}
            onChange={() => handleOptionChange('client')}
          />
        </div>
      </div>
      <div id="div-card2" onClick={() => handleOptionChange('freelancer')} className={selectedOption === 'freelancer' ? 'selected' : ''}>
        <span>Soy freelancer <br />en busca de proyectos</span>
        <img src={registerCard2} alt="Freelancer" />
        <div className="div-radio">
          <input
            type="radio"
            checked={selectedOption === 'freelancer'}
            onChange={() => handleOptionChange('freelancer')}
          />
        </div>
      </div>
    </div>
  );
};

export default CardRegisterQuestion;