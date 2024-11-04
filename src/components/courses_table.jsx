import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import CoursesButton from './courses_button';
import { useAyudantes } from './helpers_context';

function CoursesTable() {
	const { getResponsibilityCount, getResponsibilityTotal, responsibilityLimits } = useAyudantes();
	const [sortConfig, setSortConfig] = useState(null);

	const courses = [
		{ sigla: 'INF-295', nombre: 'Inteligencia Artificial', postulantes: 9 , route: '/INF-295'},
		{ sigla: 'INF-343', nombre: 'Sistemas Distribuidos', postulantes: 10 , route: '/INF-343'},
		{ sigla: 'INF-285', nombre: 'Computación Científica', postulantes: 8 , route: '/INF-285'},
	];

	const sortedCourses = [...courses].sort((a, b) => {
		if (sortConfig !== null) {
			const { key, direction } = sortConfig;
			if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
			if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
		}
		return 0;
	});

	const requestSort = (key) => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	const renderSortIcon = (columnKey) => {
		const isActive = sortConfig && sortConfig.key === columnKey;
		return (
		<>
			<FaSortUp className={isActive && sortConfig.direction === 'ascending' ? 'sort-icon active' : 'sort-icon'} />
			<FaSortDown className={isActive && sortConfig.direction === 'descending' ? 'sort-icon active' : 'sort-icon'} />
		</>
		);
	};

	return (
		<table className="table table-striped table-bordered">
			<thead className="table__head">
				<tr>
					<th onClick={() => requestSort('sigla')}>
						Sigla {renderSortIcon('sigla')}
					</th>
					<th onClick={() => requestSort('nombre')}>
						Ramo {renderSortIcon('nombre')}
					</th>
					<th onClick={() => requestSort('postulantes')}>
						Postulantes {renderSortIcon('postulantes')}
					</th>
					<th></th>
				</tr>
			</thead>
			<tbody className="table__body">
				{sortedCourses.map((course, index) => (
				<tr key={index}>
					<td>{course.sigla}</td>
					<td>{course.nombre}</td>
					<td>{course.postulantes}</td>
					<td><CoursesButton sigla={course.sigla} route={course.route} /></td>
				</tr>
				))}
			</tbody>
		</table>
	);
}

export default CoursesTable;
