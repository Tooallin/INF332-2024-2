import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page';
import CoursesPage from '../pages/courses_page';

import NavBar from './nav_bar';

const Layout = ()  => {
	return (
		<BrowserRouter>
			<div className='layout'>
				<h1 className='layout__title'>
					Plataforma Unificada de Ayudantías
				</h1>
				<NavBar />
				<div className='layout__page'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cursos" element={<CoursesPage />}/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default Layout