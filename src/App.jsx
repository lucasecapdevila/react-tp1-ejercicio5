import { Container } from 'react-bootstrap'
import './App.css'
import FormTareas from './components/FormTareas'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'
import { useEffect, useState } from 'react'
import { crearTareaAPI, eliminarTareaAPI, leerTareasAPI } from './helpers/queries'

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
    try {
      const response = await crearTareaAPI(nuevaTarea)
      if(response.status === 201){
        //  Mensaje de éxito
        console.log('Creado !');
        console.log(nuevaTarea);
        const nuevaListaTareas = [...listaTareas, nuevaTarea]
        setListaTareas(nuevaListaTareas)
      } else{
        //  Mensaje de error
        console.log('No se pudo agregar la tarea :(');
      }
    } catch (error) {
      console.error(error);
    }
  }

  const eliminarTarea = async(id) => {
    //  Estás seguro ?
    const response = await eliminarTareaAPI(id)
    if(response.status === 200){
      //  Se actualiza la lista de tareas
      const listaTareasActualizada = await leerTareasAPI()
      setListaTareas(listaTareasActualizada)

      //  Mensaje de confirmación
      console.log('Borrado !');
    }
  }

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1 className='display-1 text-center'>Lista de Tareas</h1>
        <h2 className="text-center my-4">Ingrese aquí sus tareas</h2>
        <FormTareas crearTarea={crearTarea} />
        <ListaTareas listaTareas={listaTareas} eliminarTarea={eliminarTarea} />
      </Container>

      <Footer />
    </>
  )
}

export default App
