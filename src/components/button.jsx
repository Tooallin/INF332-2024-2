import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAyudantes  } from './helpers_context';



const SeleccionarPostulante = ({ sigla }) => {
	const navigate = useNavigate();
	const handleButtonClick = () => {
		navigate('/applicants');
	};
	return (
		<button onClick={handleButtonClick} className="btn btn-warning">
			Seleccionar Postulantes
		</button>
	);
}



export default SeleccionarPostulante;

