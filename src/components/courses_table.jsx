import React from 'react';
import SeleccionarPostulante from './button';
import { useAyudantes  } from './helpers_context';

function CoursesTable() {
	const {  getResponsibilityCount, getResponsibilityTotal, responsibilityLimits } = useAyudantes();
	const course = [
		{ sigla: 'INF-295', nombre: 'Inteligencia Artificial' },
		{ sigla: 'INF-343', nombre: 'Sistemas Distribuidos' },
		{ sigla: 'INF-285', nombre: 'Computación Científica' },
	];
	const countHelpersBySigla = (sigla, responsibility) => {
		const total = getResponsibilityTotal(sigla);
		return total[responsibility] || 0;
	};
	return (
		<table className="table table-striped table-bordered table">
			<thead className='table__head'>
				<tr>
				<th>Sigla</th>
				<th>Ramo</th>
				<th>Postulante</th>
				<th>Seleccionados</th>
				<th></th>
				</tr>
			</thead>
			<tbody className='table__body'>
				<tr>
					<td>INF-295</td>
					<td>Inteligencia Artificial</td>
					<td>4</td>
					<td>{getResponsibilityTotal(course.sigla).totalPostulantes || 0}/{responsibilityLimits.catedra + responsibilityLimits.corrector + responsibilityLimits.laboratorio}</td>
						{/* la linea de arriba funciona pero por persona, no funciona por cantidad de rol */}
					<td><SeleccionarPostulante sigla='INF-295' /></td>
				</tr>
				<tr>
					<td>INF-343</td>
					<td>Sistemas Distribuidos</td>
					<td>5</td>
					<td> 0/{responsibilityLimits.catedra + responsibilityLimits.corrector + responsibilityLimits.laboratorio}</td>
					<td><SeleccionarPostulante sigla='INF-343' /></td>
				</tr>
				<tr>
					<td>INF-285</td>
					<td>Computación Cientifica</td>
					<td>5</td>
					<td> 0/{responsibilityLimits.catedra + responsibilityLimits.corrector + responsibilityLimits.laboratorio}</td>
					<td><SeleccionarPostulante sigla='INF-285' /></td>
				</tr>
			</tbody>
		</table>
	);
}

export default CoursesTable;
