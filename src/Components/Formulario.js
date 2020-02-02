import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';
import PropType from 'prop-types'

const Formulario = ({crearCita}) => {

    // Crear State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        salida: '',
        sintomas: ''
    })

    const [ error, actualizarError ] = useState(false)

    //función que se ejecuta cada que se escribe en un input
    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    //Extraer los valores
    const { mascota, propietario, fecha, salida, sintomas } = cita

    // Cuando el usuario presiona agregar cita
    const submitCita = e => {
        e.preventDefault()

        //validar 
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || salida.trim() === '' || sintomas.trim() === '') {
            actualizarError(true)
            return
        }

        //eliminar mensaje previo
        actualizarError(false)

        //asignar un id
        cita.id = uuid()

        //crear la cita

        crearCita(cita)

        //reiniciar el form

        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            salida: '',
            sintomas: ''
        })
        
    }

    return ( 
        <Fragment>
            <h2>Crear Citas</h2>

            { error? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form
                onSubmit={submitCita}
            >
                <label>Nombre de mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Propietario de la mascota</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Propietario de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora de salida</label>
                <input
                    type="time"
                    name="salida"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={salida}
                />
                <label>Síntomas</label>
                <textarea 
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
Formulario.PropType = {
    crearCita: PropType.func.isRequired
}

export default Formulario;