import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__content">
				<p>&copy; 2024 Tu Empresa</p>
				<nav className="footer__nav">
					<a href="/about" className="footer__link">Acerca de</a>
					<a href="/contact" className="footer__link">Contacto</a>
					<a href="/privacy" className="footer__link">Privacidad</a>
				</nav>
			</div>
		</footer>
	)
}

export default Footer