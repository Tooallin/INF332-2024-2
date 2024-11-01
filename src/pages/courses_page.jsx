import React from "react";

import Tabla from "../components/table";

import { useAyudantes   } from '../components/AyudantesContext'; // Importa el contexto


export const CoursesPage = () => {
    const { getResponsibilityTotal } = useAyudantes();

	return (
		<div className="container mt-4">
			
            <Tabla />
			
		</div>
	)
}

export default CoursesPage
