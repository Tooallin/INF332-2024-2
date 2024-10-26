// src/components/ModalOptions.js
import React from 'react';
import '../stylesheets/modal/modal__body.scss'; // Ajusta la ruta según tu estructura de carpetas


const ModalOptions = ({ show, options, selectedOptions, onClose, onConfirm, onOptionChange, applicantName }) => {
    if (!show) return null;

    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirmar Aceptación</h5>
                    </div>
                    <div className="modal-body">
                        {/* Muestra el nombre del postulante */}
                        <p>Selecciona las opciones para el postulante: <strong>{applicantName}</strong></p>
                        {options.map((option) => (
                            <div key={option}>
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(option)}
                                    onChange={() => onOptionChange(option)}
                                />
                                <label>{option}</label>
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>
                            Cancelar
                        </button>
                        <button className="btn btn-primary" onClick={onConfirm}>
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOptions;

