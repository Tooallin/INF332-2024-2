import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

export const HomePage = () => {
	return (
		<div className="home-page">
			<h1>¡Te damos la bienvenida a la Plataforma de Ayudantias Unificada!</h1>
			<p>
			Estamos en el período académico 2024-2. Gestiona tus ayudantías de forma rápida y sencilla.
			</p>
			<section className="features">
				<h2>¿Qué puedes hacer?</h2>
				<ul>
					<li>
					<Link to="/cursos">Revisar las postulaciones de los estudiantes a tus ramos</Link>
					</li>
				</ul>
			</section>
			<section className="benefits">
				<h2>Beneficios de la plataforma</h2>
				<ul>
					<li>Agiliza el proceso de selección de ayudantes.</li>
					<li>Centraliza toda la información en un solo lugar.</li>
				</ul>
			</section>
			<section className="support">
				<h2>¿Necesitas ayuda?</h2>
				<p>¿Tienes alguna duda ? Contáctanos a ayuda@gmail.com y estaremos encantados de ayudarte.</p>
			</section>
			<Footer />
		</div>
	)
}

export default HomePage