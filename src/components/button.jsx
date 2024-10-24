import React from 'react';

function SeleccionarPostulante() {
  const handleClick = () => {
    window.open("https://www.example.com", "_blank", "width=800,height=600");
  };

  return (
    <div>
      <button onClick={handleClick}>SeleccionarPostulante</button>
    </div>
  );
}

export default SeleccionarPostulante;