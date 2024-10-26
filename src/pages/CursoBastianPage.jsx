// src/pages/CursoBastianPage.js
import React, { useState } from 'react';
import ApplicantsTable from '../components/ApplicantsTable';
import AcceptedHelpersTable from '../components/AcceptedHelpersTable';
import ModalOptions from '../components/ModalOptions';

const applicantsData = [
    {
        name: 'Alessando Cintolesi',
        role: '202173558-3',
        nota: 80,
        semestre: '2024/1',
        laboratorio: true,
        catedras: false,
        corrector: false,
        options: ['Laboratorio'],
    },
    {
        name: 'Ignacio Muñoz',
        role: '202173589-4',
        nota: 78,
        semestre: '2024/1',
        laboratorio: true,
        catedras: true,
        corrector: false,
        options: ['Laboratorio', 'Cátedras'],
    },
    {
        name: 'Maximiliano Bardi',
        role: '202173589-2',
        nota: 76,
        semestre: '2024/1',
        laboratorio: true,
        catedras: false,
        corrector: false,
        options: ['Laboratorio'],
    },
    {
        name: 'Francisca Figueroa',
        role: '202173534-1',
        nota: 92,
        semestre: '2023/2',
        laboratorio: true,
        catedras: true,
        corrector: true,
        options: ['Laboratorio', 'Cátedras', 'Corrector'],
    },
];

const CursoBastianPage = () => {
    const [acceptedHelpers, setAcceptedHelpers] = useState([]);
    const [modalData, setModalData] = useState({ show: false, applicant: null });
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [applicants, setApplicants] = useState(applicantsData); // Cambia aquí


  // Contadores para cada tipo de responsabilidad
    const [responsibilityCount, setResponsibilityCount] = useState({
    catedra: 0,
    corrector: 0,
    laboratorio: 0,
    });

    const showOptions = (applicant) => {
        setModalData({ show: true, applicant });
        setSelectedOptions([]);
    };
    const handleOptionChange = (option) => {
        setSelectedOptions((prevOptions) =>
            prevOptions.includes(option) ? prevOptions.filter((o) => o !== option) : [...prevOptions, option]
        );
    };
    

   
    const confirmSelection = () => {
        const { applicant } = modalData;
        if (selectedOptions.length === 0) {
            alert('Por favor, selecciona al menos una opción antes de aceptar.');
            return;
        }
        
        const newHelper = { ...applicant, selectedOptions };
        setAcceptedHelpers([...acceptedHelpers, newHelper]);

        // Actualizar contadores según las opciones seleccionadas
        const updatedCount = { ...responsibilityCount };
        selectedOptions.forEach((option) => {
            if (option === 'Cátedras') updatedCount.catedra += 1;
            if (option === 'Corrector') updatedCount.corrector += 1;
            if (option === 'Laboratorio') updatedCount.laboratorio += 1;
        });
        setResponsibilityCount(updatedCount);

        // Eliminar el postulante de la lista
        setApplicants(applicants.filter(item => item.name !== applicant.name));

        setModalData({ show: false, applicant: null });
    };


  
    const removeAccepted = (helper) => {
        // Eliminar al ayudante de la lista de aceptados
        const updatedHelpers = acceptedHelpers.filter(item => item.name !== helper.name);
        setAcceptedHelpers(updatedHelpers);

        // Decrementar los contadores
        const updatedCount = { ...responsibilityCount };
        helper.selectedOptions.forEach((option) => {
            if (option === 'Cátedras') updatedCount.catedra -= 1;
            if (option === 'Corrector') updatedCount.corrector -= 1;
            if (option === 'Laboratorio') updatedCount.laboratorio -= 1;
        });
        setResponsibilityCount(updatedCount);

        // Devolver al ayudante a la lista de postulantes
        setApplicants([...applicants, helper]);
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Postulantes</h2>
            <ApplicantsTable applicants={applicants} onAccept={showOptions} />
            <div className="d-flex flex-column align-items-center mt-4 mb-3">
                <h2>Ayudantes Aceptados</h2>
                <div className="d-flex gap-3 justify-content-center">
                    <p>Cátedra: {responsibilityCount.catedra} / 2</p>
                    <p>Corrector: {responsibilityCount.corrector} / 2</p>
                    <p>Laboratorio: {responsibilityCount.laboratorio} / 2</p>
                </div>
            </div>
            <AcceptedHelpersTable acceptedHelpers={acceptedHelpers} onRemove={removeAccepted} />
            <ModalOptions
                show={modalData.show}
                options={modalData.applicant ? modalData.applicant.options : []}
                selectedOptions={selectedOptions}
                onClose={() => setModalData({ show: false, applicant: null })}
                onConfirm={confirmSelection}
                onOptionChange={handleOptionChange}
                applicantName={modalData.applicant ? modalData.applicant.name : ''} // Pasa el nombre del postulante
            />
        </div>
    );
    
};

export default CursoBastianPage;