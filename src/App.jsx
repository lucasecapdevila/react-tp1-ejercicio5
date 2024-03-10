import { Container } from 'react-bootstrap'
import './App.css'
import FormTareas from './components/FormTareas'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'
import { useEffect, useState } from 'react'
import { crearTareaAPI, leerTareasAPI } from './helpers/queries'

function App() {
  useEffect(() => {
    traerTareas()
  }, [])

  const [listaTareas, setListaTareas] = useState([])

  const traerTareas = async() => {
    try {
      const listaTareasAPI = await leerTareasAPI()
      setListaTareas(listaTareasAPI)
    } catch (error) {
      console.error(error);
    }
  }

  const crearTarea = async(nuevaTarea) => {
    const response = await crearTareaAPI()
    if(response.status === 201){
      //  Mensaje de éxito
      console.log('Creado !');
      console.log(nuevaTarea);
    } else{
      //  Mensaje de error
    }
  }

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1 className='display-1 text-center'>Lista de Tareas</h1>
        <h2 className="text-center my-4">Ingrese aquí sus tareas</h2>
        <FormTareas crearTarea={crearTarea} />
        <ListaTareas listaTareas={listaTareas} />
      </Container>

      <Footer />
    </>
  )
}

export default App
