import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AyudantesProvider } from './helpers_context';
import HomePage from '../pages/home_page';
import CoursesPage from '../pages/courses_page';
import ApplicantsPage from '../pages/applicants_page';

const Layout = ()  => {
	return (
		<BrowserRouter>
			<div className='layout'>
			<h1 className='layout__title'>
					<img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_UTFSM.png" alt="Logo" />
					<span class="uppercase uppercase-P">P</span>lataforma
					<span class="uppercase uppercase-U"> U</span>nificada de
					<span class="uppercase uppercase-A"> A</span>yudantias
				</h1>
				<div className='layout__page'>
					<AyudantesProvider>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/cursos" element={<CoursesPage />}/>
							<Route path="/applicants" element={<ApplicantsPage />} />
						</Routes>
					</AyudantesProvider>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default Layout



