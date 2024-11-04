import React from 'react';
import '../stylesheets/modal/modal__body.scss';

const ModalOptions = ({ show, options, selectedOptions, onClose, onConfirm, onOptionChange, applicantName }) => {
	if (!show) return null;
	return (
		<div className="modal show" style={{ display: 'block' }}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Confirmar Selección</h5>
					</div>
					<div className="modal-body">
						<p className="modal__p">Seleccione las opciones para el postulante: <strong>{applicantName}</strong></p>
						{options.map((option, index) => (
							<div key={option}>
								<input
									type="checkbox"
									id={`option-${index}`}
									checked={selectedOptions.includes(option)}
									onChange={() => onOptionChange(option)}
								/>
								<label htmlFor={`option-${index}`} className="modal__label">{option}</label> {/* Asociar el label con el checkbox */}
							</div>
						))}
					</div>
					<div className="modal-footer">
						<button className="cancel-button" onClick={onClose}>
							Cancelar
						</button>
						<button className="accept-button" onClick={onConfirm}>
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalOptions;

