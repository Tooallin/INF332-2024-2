import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home_page';
import CoursesPage from '../pages/courses_page';
import CursoBastianPage from '../pages/CursoBastianPage';

import NavBar from './nav_bar';

const Layout = ()  => {
	return (
		<BrowserRouter>
			<div className='layout'>
				<h1 className='layout__title'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_UTFSM.png" style={{ width: '120px', height: '90px',  float: 'left' }} alt="Logo" />
					<span style={{ color: '#D8BC5E', marginLeft: '20px', fontSize: '60px' }}>P</span>
                    <span style={{ color: '#E5E5E5',marginLeft:'0PX', fontSize: '60px' }}>lataforma</span>
					<span style={{ color: '#D8BC5E', marginLeft: '20px', fontSize: '60px' }}></span>
                    <span style={{ color: '#E5E5E5',marginLeft:'0PX', fontSize: '60px' }}>de</span>
					<span style={{ color: '#D8BC5E', marginLeft: '20px', fontSize: '60px' }}>A</span>
                    <span style={{ color: '#E5E5E5',marginLeft:'0PX', fontSize: '60px' }}>yudantías</span>
					<span style={{ color: '#D8BC5E', marginLeft: '20px', fontSize: '60px' }}>U</span>
                    <span style={{ color: '#E5E5E5',marginLeft:'0PX', fontSize: '60px' }}>nificada</span>
				</h1>
				<NavBar />
				<div className='layout__page'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/cursos" element={<CoursesPage />}/>
						<Route path="/cursos_bastian" element={<CursoBastianPage />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default Layout
