import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAyudantes  } from './AyudantesContext';



const SeleccionarPostulante = ({ sigla }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/cursos_bastian'); // Cambié la ruta a '/cursobastian'
    };

  return (
      <button onClick={handleButtonClick} className="btn btn-warning">
          SeleccionarPostulante
      </button>
  );
}



export default SeleccionarPostulante;

