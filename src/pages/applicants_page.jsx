import React, { useState, useEffect } from 'react';
import ApplicantsTable from '../components/applicants_table';
import AcceptedHelpersTable from '../components/accepted_helpers_table';
import ModalOptions from '../components/modal_options';
import { useAyudantes   } from '../components/helpers_context';


const applicantsData = [
	{
		name: 'Alessando Cintolesi',
		role: '202173558-3',
		nota: 80,
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Ignacio Muñoz',
		role: '202173589-4',
		nota: 78,
		semestre: '2024/1',
		laboratorio: true,
		catedra: true,
		corrector: false,
		options: ['Laboratorio', 'Catedra'],
	},
	{
		name: 'Maximiliano Bardi',
		role: '202173589-2',
		nota: 76,
		semestre: '2024/1',
		laboratorio: true,
		catedra: false,
		corrector: false,
		options: ['Laboratorio'],
	},
	{
		name: 'Francisca Figueroa',
		role: '202173534-1',
		nota: 92,
		semestre: '2023/2',
		laboratorio: true,
		catedra: true,
		corrector: true,
		options: ['Laboratorio', 'Catedra', 'Corrector'],
	},
];

const ApplicantsPage = ({ sigla }) => {
	const { selectedHelpers, addHelper, removeHelper, responsibilityLimits } = useAyudantes();
	const [modalData, setModalData] = useState({ show: false, applicant: null });
	const [selectedOptions, setSelectedOptions] = useState({});
	const [applicants, setApplicants] = useState(applicantsData);
	useEffect(() => {
		const acceptedNames = (selectedHelpers[sigla] || []).map(helper => helper.name);
		const updatedApplicants = applicantsData.filter(applicant => !acceptedNames.includes(applicant.name));
		setApplicants(updatedApplicants);
	}, [selectedHelpers, sigla]);
	const showOptions = (applicant) => {
		setModalData({ show: true, applicant });
		setSelectedOptions({});
	};
	const handleOptionChange = (option) => {
		setSelectedOptions((prevOptions) => ({
			...prevOptions,
			[modalData.applicant.name]: prevOptions[modalData.applicant.name]?.includes(option)
				? prevOptions[modalData.applicant.name].filter((o) => o !== option)
				: [...(prevOptions[modalData.applicant.name] || []), option]
		}));
	};
	const confirmSelection = () => {
		const { applicant } = modalData;
		const optionsForApplicant = selectedOptions[applicant.name] || [];
		if (optionsForApplicant.length === 0) {
			alert('Por favor, selecciona al menos una opción antes de aceptar.');
			return;
		}
		addHelper(sigla, applicant, optionsForApplicant);
		setModalData({ show: false, applicant: null });
	};
	const removeAccepted = (helper) => {
		removeHelper(sigla, helper);
		
	};
	const responsibilityCount = { catedra: 0, corrector: 0, laboratorio: 0 };
	(selectedHelpers[sigla] || []).forEach((helper) => {
		helper.selectedOptions.forEach((option) => {
			const optionKey = option.toLowerCase(); // Convertir a minúsculas para comparación
			if (responsibilityCount[option.toLowerCase()] !== undefined) {
				responsibilityCount[option.toLowerCase()] += 1;
			}
		});
	});
	return (
		<div className="container mt-4">
			<h2 className="text-center">Postulantes</h2>
			<ApplicantsTable applicants={applicants} onAccept={showOptions} />
			<div className="d-flex flex-column align-items-center mt-4 mb-3">
				<h2>Ayudantes Aceptados</h2>
				<div className="d-flex gap-3 justify-content-center">
					<p>Cátedra: {responsibilityCount.catedra} / {responsibilityLimits.catedra}</p>
					<p>Corrector: {responsibilityCount.corrector} / {responsibilityLimits.corrector}</p>
					<p>Laboratorio: {responsibilityCount.laboratorio} / {responsibilityLimits.laboratorio}</p>
				</div>
			</div>
			<AcceptedHelpersTable acceptedHelpers={selectedHelpers[sigla] || []} onRemove={removeAccepted} />
			<ModalOptions
				show={modalData.show}
				options={modalData.applicant ? modalData.applicant.options : []}
				selectedOptions={selectedOptions[modalData.applicant?.name] || []}
				onClose={() => setModalData({ show: false, applicant: null })}
				onConfirm={confirmSelection}
				onOptionChange={handleOptionChange}
				applicantName={modalData.applicant ? modalData.applicant.name : ''} // Pasa el nombre del postulante
			/>
		</div>
	);
};

export default ApplicantsPage;
