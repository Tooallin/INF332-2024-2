// src/components/ApplicantsTable.js
import React, { useState } from 'react';

const ApplicantsTable = ({ applicants, onAccept }) => { // Cambia aquí
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
                <thead>
                    <tr>
                    <th style={{ backgroundColor: '#002244', color: 'white' }}>Nombre</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}>Rol</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}>Nota</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}>Semestre cursado</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}>Laboratorio</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}>Cátedras</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}>Corrector</th>
                            <th style={{ backgroundColor: '#002244', color: 'white' }}></th>
                    </tr>
                </thead>
                <tbody>
                    {availableApplicants.map((applicant, index) => (
                        <tr key={index}>
                            <td>{applicant.name}</td>
                            <td>{applicant.role}</td>
                            <td>{applicant.nota}</td>
                            <td>{applicant.semestre}</td>
                            <td>{applicant.laboratorio ? 'Sí' : 'No'}</td>
                            <td>{applicant.catedras ? 'Sí' : 'No'}</td>
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
