import React from "react";
import CoursesTable from "../components/courses_table";
import { useAyudantes   } from '../components/helpers_context'; // Importa el contexto

export const CoursesPage = () => {
	const { getResponsibilityTotal } = useAyudantes();
	return (
		<div className="container mt-4">
			<CoursesTable />	
		</div>
	)
}

export default CoursesPage
