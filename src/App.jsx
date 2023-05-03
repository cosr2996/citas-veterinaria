import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')??[]))
  const [paciente, setPaciente] = useState({})

  //? LOCAL STORAGE

  useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente =(id)=>{
    const pacientesActualizados = pacientes.filter(paciente=> paciente.id!==id)//aqui paciente es solo una variable temporal
    setPacientes(pacientesActualizados)
  }
   

  return (
    <div className='container mx-auto mt-20' >
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente} 
          setPaciente={setPaciente}
          />
          
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>//fragment 
  )
}

export default App
