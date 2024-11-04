import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AyudantesProvider } from './helpers_context';
//import HomePage from '../pages/home_page'; IGNORAR ESTO DE MOMENTO
import CoursesPage from '../pages/courses_page';
import ApplicantsPage from '../pages/applicants_page';

const applicantsDataSet285 = [
	{
		name: 'Alessandro Cintolesi',
		role: '202173558-3',
		nota: 80,
		exp: '2 ayudantias',
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Ignacio Muñoz',
		role: '202173589-4',
		nota: 78,
		exp: '3 ayudantias',
		semestre: '2024/1',
		laboratorio: true,
		catedra: true,
		corrector: false,
		options: ['Laboratorio', 'Catedra'],
	},
	{
		name: 'Maximiliano Bardi',
		role: '202173589-2',
		nota: 76,
		exp: '1 ayudantia',
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Francisca Figueroa',
		role: '202173534-1',
		nota: 92,
		exp: '2 ayudantias',
		semestre: '2023/2',
		laboratorio: true,
		catedra: true,
		corrector: true,
		options: ['Laboratorio', 'Catedra', 'Corrector'],
	},
	{
		name: 'Sofia López',
		role: '202173576-8',
		nota: 85,
		exp: '1 ayudantia',
		semestre: '2023/2',
		laboratorio: false,
		catedra: true,
		corrector: true,
		options: ['Catedra', 'Corrector'],
	},
	{
		name: 'Carlos Ruiz',
		role: '202173562-7',
		nota: 88,
		exp: '4 ayudantias',
		semestre: '2024/1',
		laboratorio: true,
		catedra: true,
		corrector: false,
		options: ['Laboratorio', 'Catedra'],
	},
	{
		name: 'Martina Salazar',
		role: '202173521-9',
		nota: 90,
		exp: '3 ayudantias',
		semestre: '2023/2',
		laboratorio: true,
		catedra: false,
		corrector: true,
		options: ['Laboratorio', 'Corrector'],
	},
	{
		name: 'Felipe Torres',
		role: '202173585-0',
		nota: 82,
		exp: '2 ayudantias',
		semestre: '2023/1',
		laboratorio: false,
		catedra: true,
		corrector: false,
		options: ['Catedra'],
	},
	{
		name: 'Camila Rojas',
		role: '202173554-3',
		nota: 87,
		exp: '1 ayudantia',
		semestre: '2024/1',
		laboratorio: true,
		catedra: true,
		corrector: true,
		options: ['Laboratorio', 'Catedra', 'Corrector'],
	},
];
const applicantsDataSet295 = [
	{
		name: 'María González',
		role: '202173523-6',
		nota: 91,
		exp: '2 ayudantias',
		semestre: '2023/2',
		laboratorio: true,
		catedra: false,
		corrector: true,
		options: ['Laboratorio', 'Corrector'],
	},
	{
		name: 'José Valenzuela',
		role: '202173555-9',
		nota: 79,
		exp: '3 ayudantias',
		semestre: '2024/1',
		laboratorio: false,
		catedra: true,
		corrector: false,
		options: ['Catedra'],
	},
	{
		name: 'Ana Silva',
		role: '202173524-8',
		nota: 86,
		exp: '1 ayudantia',
		semestre: '2024/1',
		laboratorio: true,
		catedra: true,
		corrector: false,
		options: ['Laboratorio', 'Catedra'],
	},
	{
		name: 'Andrés Paredes',
		role: '202173526-2',
		nota: 77,
		exp: '2 ayudantias',
		semestre: '2023/1',
		laboratorio: false,
		catedra: false,
		corrector: true,
		options: ['Corrector'],
	},
	{
		name: 'Paula Navarro',
		role: '202173553-0',
		nota: 89,
		exp: '1 ayudantia',
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Luis Soto',
		role: '202173565-4',
		nota: 84,
		exp: '4 ayudantias',
		semestre: '2023/2',
		laboratorio: true,
		catedra: true,
		corrector: true,
		options: ['Laboratorio', 'Catedra', 'Corrector'],
	},
	{
		name: 'Fernanda Vargas',
		role: '202173533-7',
		nota: 82,
		exp: '2 ayudantias',
		semestre: '2024/1',
		laboratorio: false,
		catedra: true,
		corrector: true,
		options: ['Catedra', 'Corrector'],
	},
	{
		name: 'Vicente Espinoza',
		role: '202173579-1',
		nota: 75,
		exp: '3 ayudantias',
		semestre: '2023/2',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
];
const applicantsDataSet343 = [
	{
		name: 'Natalia Bravo',
		role: '202173571-1',
		nota: 90,
		exp: '2 ayudantias',
		semestre: '2023/1',
		laboratorio: true,
		catedra: true,
		corrector: false,
		options: ['Laboratorio', 'Catedra'],
	},
	{
		name: 'Camilo Fuentes',
		role: '202173588-5',
		nota: 81,
		exp: '1 ayudantia',
		semestre: '2023/2',
		laboratorio: false,
		catedra: true,
		corrector: true,
		options: ['Catedra', 'Corrector'],
	},
	{
		name: 'Valentina Godoy',
		role: '202173520-8',
		nota: 87,
		exp: '3 ayudantias',
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Sebastián Tapia',
		role: '202173575-7',
		nota: 76,
		exp: '1 ayudantia',
		semestre: '2023/2',
		laboratorio: true,
		catedra: true,
		corrector: false,
		options: ['Laboratorio', 'Catedra'],
	},
	{
		name: 'Antonia Molina',
		role: '202173587-3',
		nota: 88,
		exp: '4 ayudantias',
		semestre: '2024/1',
		laboratorio: false,
		catedra: false,
		corrector: true,
		options: ['Corrector'],
	},
	{
		name: 'Joaquín Sandoval',
		role: '202173525-5',
		nota: 79,
		exp: '2 ayudantias',
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Claudia Morales',
		role: '202173580-0',
		nota: 92,
		exp: '3 ayudantias',
		semestre: '2023/1',
		laboratorio: true,
		catedra: true,
		corrector: true,
		options: ['Laboratorio', 'Catedra', 'Corrector'],
	},
	{
		name: 'Cristian Araya',
		role: '202173570-2',
		nota: 84,
		exp: '1 ayudantia',
		semestre: '2023/2',
		laboratorio: false,
		catedra: true,
		corrector: true,
		options: ['Catedra', 'Corrector'],
	},
	{
		name: 'Isidora Castillo',
		role: '202173566-9',
		nota: 83,
		exp: '3 ayudantias',
		semestre: '2023/2',
		laboratorio: true,
		catedra: false,
		corrector: true,
		options: ['Laboratorio', 'Corrector'],
	},
	{
		name: 'Tomás Leiva',
		role: '202173558-1',
		nota: 85,
		exp: '2 ayudantias',
		semestre: '2024/1',
		laboratorio: false,
		catedra: true,
		corrector: false,
		options: ['Catedra'],
	},
];

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
							{/*<Route path="/" element={<HomePage />} IGNORAR ESTO DE MOMENTO />*/}
							<Route path="/" element={<CoursesPage />}/>
							<Route path="/INF-285" element={<ApplicantsPage sigla={'INF-285'} applicantsData={applicantsDataSet285} nombre={'Computación Científica'} />} />
							<Route path="/INF-295" element={<ApplicantsPage sigla={'INF-295'} applicantsData={applicantsDataSet295} nombre={'Inteligencia Artificial'} />} />
							<Route path="/INF-343" element={<ApplicantsPage sigla={'INF-343'} applicantsData={applicantsDataSet343} nombre={'Sistemas Distribuidos'} />} />
						</Routes>
					</AyudantesProvider>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default Layout



