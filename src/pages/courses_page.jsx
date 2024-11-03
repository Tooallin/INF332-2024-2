import React from "react";
import CoursesTable from "../components/courses_table";
import { useAyudantes   } from '../components/helpers_context'; // Importa el contexto

export const CoursesPage = () => {
	const { getResponsibilityTotal } = useAyudantes();
	return (
		<div className="container">
			<header className="courses-header text-center">
				<h1>Cursos Profesor: Nombre Apellido</h1>
				<h1 className="mb-4"> Período: 2024-2 </h1>
			</header>
			<CoursesTable />
		</div>
	)
}

export default CoursesPage
