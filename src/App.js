import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './Components/Formulario';
import Cita from './Components/Cita';

function App() {

  // citas el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'))
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //arreglo de citas
  const  [citas, guardarCitas] = useState(citasIniciales)

  //use Effect para realizar ciertas operaciones cuando el State cambia

  useEffect( ()=> {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas',JSON.stringify([]))
    }
  }, [citas, citasIniciales] )

  //funcion que tome la scitas actuales y agregue las nuevas
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

// funcion que elimina una cita por su id
const eliminarCita = id =>{
  const nuevasCitas = citas.filter(cita => cita.id !== id)
  guardarCitas(nuevasCitas)
}

//mensaje condicional
const titulo = citas.length === 0 ? 'Agregar citas' : 'Administrar tus citas'
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1> 
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita =>(
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
