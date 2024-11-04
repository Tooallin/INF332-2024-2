import React from 'react';

const AcceptedHelpersTable = ({ acceptedHelpers, onRemove }) => (
	<table className="table table-striped table-bordered table-hover">
		<thead className='table__head'>
			<tr>
				<th>Nombre</th>
				<th>Rol</th>
				<th>Asignación</th>
				<th></th>
			</tr>
		</thead>
		<tbody className='table__body'>
			{acceptedHelpers.map((helper, index) => (
				<tr key={index}>
					<td>{helper.name}</td>
					<td>{helper.role}</td>
					<td>{helper.selectedOptions.join(', ') || 'Ninguna'}</td>
					<td>
						<button className="cancel-button btn-danger" onClick={() => onRemove(helper)}>
							Eliminar
						</button>
					</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default AcceptedHelpersTable;
