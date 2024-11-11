import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';


const ApplicantsTable = ({ applicants, onAccept }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortConfig, setSortConfig] = useState(null);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const requestSort = (key) => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		}
		setSortConfig({ key, direction });
	};

	const sortedApplicants = React.useMemo(() => {
		let sortableApplicants = [...applicants];
		if (sortConfig !== null) {
			const { key, direction } = sortConfig;
			sortableApplicants.sort((a, b) => {
				if (a[key] < b[key]) {
					return direction === 'ascending' ? -1 : 1;
				}
				if (a[key] > b[key]) {
					return direction === 'ascending' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableApplicants;
	}, [applicants, sortConfig]);

	const availableApplicants = sortedApplicants.filter(applicant =>
		applicant.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

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
		<div>
			<label htmlFor='search-bar' className='search-label'>
				Búsqueda por nombre
			</label>
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchChange}
				className="search-bar mb-3"
			/>
			<table className="table table-striped table-bordered table-hover">
				<thead className='table__head'>
					<tr>
						<th onClick={() => requestSort('name')}>Nombre {renderSortIcon('name')}</th>
						<th onClick={() => requestSort('role')}>Rol {renderSortIcon('role')}</th>
						<th onClick={() => requestSort('nota')}>Nota {renderSortIcon('nota')}</th>
						<th onClick={() => requestSort('exp')}>Experiencia {renderSortIcon('exp')}</th>
						<th onClick={() => requestSort('semestre')}>Semestre cursado {renderSortIcon('semestre')}</th>
						<th>Laboratorio</th>
						<th>Cátedra</th>
						<th>Corrector</th>
						<th></th>
					</tr>
				</thead>
				<tbody className='table__body'>
					{availableApplicants.map((applicant, index) => (
						<tr key={index}>
							<td>{applicant.name}</td>
							<td>{applicant.role}</td>
							<td>{applicant.nota}</td>
							<td>{applicant.exp}</td>
							<td>{applicant.semestre}</td>
							<td>{applicant.laboratorio ? 'Si Postulado✅' : 'No Postulado❌'}</td>
							<td>{applicant.catedra ? 'Si Postulado✅' : 'No Postulado❌'}</td>
							<td>{applicant.corrector ? 'Si Postulado✅' : 'No Postulado❌'}</td>
							<td>
								<button className="normal-button btn-warning" onClick={() => onAccept(applicant)}>Seleccionar Ayudante</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ApplicantsTable;
