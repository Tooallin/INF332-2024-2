import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesButton = ({ sigla, route }) => {
	const navigate = useNavigate();
	
	const handleButtonClick = () => {
		navigate(route);
	};

	return (
		<button onClick={handleButtonClick} className="normal-button btn btn-warning">
			Seleccionar Postulantes
		</button>
	);
}



export default CoursesButton;