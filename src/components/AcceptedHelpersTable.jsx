// src/components/AcceptedHelpersTable.js
import React from 'react';

const AcceptedHelpersTable = ({ acceptedHelpers, onRemove }) => (
    <table className="table table-striped table-bordered table-hover">
        <thead>
            <tr>
            <th style={{ backgroundColor: '#002244', color: 'white' }}>Nombre</th>
            <th style={{ backgroundColor: '#002244', color: 'white' }}>Rol</th>
            <th style={{ backgroundColor: '#002244', color: 'white' }}>Asignación</th>
            <th style={{ backgroundColor: '#002244', color: 'white' }}></th>
            </tr>
        </thead>
        <tbody>
            {acceptedHelpers.map((helper, index) => (
                <tr key={index}>
                    <td>{helper.name}</td>
                    <td>{helper.role}</td>
                    <td>{helper.selectedOptions.join(', ') || 'Ninguna'}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => onRemove(helper)}>
                            Eliminar
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default AcceptedHelpersTable;
