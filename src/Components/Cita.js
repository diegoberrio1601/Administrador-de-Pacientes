import React from 'react'
import PropType from 'prop-types'

const Cita = ({cita, eliminarCita}) => (
    
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Propietario: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Salida: <span>{cita.salida}</span></p>
        <p>Síntomas: <span>{cita.sintomas}</span></p>

        <button className="button-eliminar u-full-width"
        onClick={ () => eliminarCita(cita.id) }
        >Eliminar &times;
        </button>
    </div>
)

Cita.PropType = {
    cita: PropType.object.isRequired,
    eliminarCita: PropType.func.isRequired
}
 
export default Cita;