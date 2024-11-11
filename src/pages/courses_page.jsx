import React from "react";
import CoursesTable from "../components/courses_table";
import { useAyudantes   } from '../components/helpers_context'; // Importa el contexto

const profesores = [
	{
		nombre: 'Jorge Diaz'
	},
	{
		nombre: 'Claudio Lobos'
	},
	{
		nombre: 'Elizabeth Moreno'
	}
]

export const CoursesPage = () => {
	const { getResponsibilityTotal } = useAyudantes();
	return (
		<div className="container">
			<header className="courses-header text-center">
				<h1 style={{ 
			margin: '0', 
			flexGrow: 1, 
			textAlign: 'center', 
			color: '#002A32', 
			fontSize: '3em', 
			}}>Cursos Profesor: {profesores[0].nombre}</h1>
				<h2 style={{ 
			margin: '0', 
			flexGrow: 1, 
			textAlign: 'center', 
			color: '#002A32', 
			fontSize: '2em', 
			}}className="mb-4"> Período: 2024-2 </h2>
			</header>
			<CoursesTable />
		</div>
	)
}

export default CoursesPage
