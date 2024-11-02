import React, { useState } from 'react';

const ApplicantsTable = ({ applicants, onAccept }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};
	const availableApplicants = applicants.filter(applicant => 
		applicant.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	return (
		<div>
			<input
				type="text"
				placeholder="Buscar postulante..."
				value={searchTerm}
				onChange={handleSearchChange}
				className="form-control mb-3"
			/>
			<table className="table table-striped table-bordered table-hover">
				<thead className='table__head'>
					<tr>
						<th>Nombre</th>
						<th>Rol</th>
						<th>Nota</th>
						<th>Semestre cursado</th>
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
							<td>{applicant.semestre}</td>
							<td>{applicant.laboratorio ? 'Sí' : 'No'}</td>
							<td>{applicant.catedra ? 'Sí' : 'No'}</td>
							<td>{applicant.corrector ? 'Sí' : 'No'}</td>
							<td>
								<button className="btn btn-warning" onClick={() => onAccept(applicant)}>Aceptar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ApplicantsTable;
