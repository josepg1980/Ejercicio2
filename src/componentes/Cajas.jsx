import React from 'react';
import '../hojas-de-estilo/Cajas.css';
function Cajas(props) {
  return (
    <div className='contenedor-caja'>
      <img className='imagen-caja'
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt='Foto futuro' />
      <div className='contenedor-texto-caja'>
        <p className='nombre-caja'>{props.subtitulo}</p>
        <p className='texto-caja'>"{props.texto}"</p>

      </div>


    </div>

  );

}

export default Cajas;