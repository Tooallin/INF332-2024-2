import React from 'react';
import SeleccionarPostulante from './button';

function Tabla() {
	return (
            <table className="table table-striped table-bordered table">
			<thead className='table__head'>
				<tr>
				<th style={{ backgroundColor: '#002244', color: 'white' }}>Sigla</th>
				<th style={{ backgroundColor: '#002244', color: 'white' }}>Ramo</th>
				<th style={{ backgroundColor: '#002244', color: 'white' }}>Postulante</th>
				<th style={{ backgroundColor: '#002244', color: 'white' }}></th>
				</tr>
			</thead>
			<tbody className='table__body'>
				<tr>
					<td>INF-295</td>
					<td>Inteligencia Artificial</td>
					<td>4</td>
					<th><SeleccionarPostulante /></th>
				</tr>
				<tr>
					<td>INF-343</td>
					<td>Sistemas Distribuidos</td>
					<td>6</td>
					<th><SeleccionarPostulante /></th>
				</tr>
				<tr>
					<td>INF-285</td>
					<td>Computación Cientifica</td>
					<td>5</td>
					<th><SeleccionarPostulante /></th>
				</tr>
			</tbody>
		</table>
	);
}

export default Tabla;
