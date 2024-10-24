import React from 'react';
import SeleccionarPostulante from './button';

function Tabla() {
	return (
		<table className='table'>
			<thead className='table__head'>
				<tr>
					<th>Nombre</th>
					<th>ROL</th>
					<th>Nota de Aprobacion</th>
					<th>Semestre Cursado</th>
					<th>Catedra</th>
					<th>Laboratorio</th>
					<th>Corrector</th>
					<th></th>
				</tr>
			</thead>
			<tbody className='table__body'>
				<tr>
					<td>Alessandro Cintolesi Rodriguez</td>
					<td>202173541-0</td>
					<td>81</td>
					<td>2024-1</td>
					<td>Postula</td>
					<td>No Postula</td>
					<td>Postula</td>
					<th><SeleccionarPostulante /></th>
				</tr>
				<tr>
					<td>Ignacio Muñoz Sanchez</td>
					<td>202173620-4</td>
					<td>86</td>
					<td>2024-1</td>
					<td>Postula</td>
					<td>No Postula</td>
					<td>Postula</td>
					<th><SeleccionarPostulante /></th>
				</tr>
				<tr>
					<td>Bastian Ortega Antillana</td>
					<td>202173547-K</td>
					<td>84</td>
					<td>2024-1</td>
					<td>Postula</td>
					<td>No Postula</td>
					<td>Postula</td>
					<th><SeleccionarPostulante /></th>
				</tr>
			</tbody>
		</table>
	);
}

export default Tabla;