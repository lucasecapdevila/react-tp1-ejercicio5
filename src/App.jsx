import { Alert, Container } from 'react-bootstrap'
import './App.css'
import FormTareas from './components/FormTareas'
import Footer from './components/Footer'
import ListaTareas from './components/ListaTareas'
import { useEffect, useState } from 'react'
import { crearTareaAPI, editarTareaAPI, eliminarTareaAPI, eliminarTodasLasTareasAPI, leerTareasAPI } from './helpers/queries'
import Swal from 'sweetalert2'

function App() {
  useEffect(() => {
    traerTareas()
  }, [])

  const [listaTareas, setListaTareas] = useState([])
  const [tareaAEditar, setTareaAEditar] = useState(null)

  const traerTareas = async() => {
    try {
      const listaTareasAPI = await leerTareasAPI()
      if(!listaTareasAPI){
        return setListaTareas([])
      }
      setListaTareas(listaTareasAPI)
    } catch (error) {
      console.error(error);
    }
  }

  const crearTarea = async(nuevaTarea) => {
    try {
      const response = await crearTareaAPI(nuevaTarea)
      if(response.status === 201){
        Swal.fire({
          title: "Tarea agregada !",
          text: `La tarea ${nuevaTarea.nombreTarea} se agregó exitosamente.`,
          icon: "success",
          position: "top",
          showConfirmButton: false,
          timer: 2200
        });
        const nuevaListaTareas = [...listaTareas, nuevaTarea]
        setListaTareas(nuevaListaTareas)
      } else{
        Swal.fire({
          title: "Ocurrió un error",
          text: `La tarea ${nuevaTarea.nombreTarea} no pudo ser creada. Intentelo nuevamente en unos minutos.`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const editarTarea = async(tarea) => {
    try {
      const response = await editarTareaAPI(tarea._id, tarea)
      if(response.status === 200){
        Swal.fire({
          title: "¿Quieres guardar los cambios?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Guardar",
          denyButtonText: "No guardar"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Tarea editada !",
              text: `La tarea ${tarea.nombreTarea} se editó exitosamente.`,
              icon: "success",
              position: "top",
              showConfirmButton: false,
              timer: 2200
            });
            const nuevaListaTareas = listaTareas.map(elementoTarea => elementoTarea._id === tarea._id ? tarea : elementoTarea)
            setListaTareas(nuevaListaTareas)
          } else if (result.isDenied) {
            Swal.fire("Los cambios no fueron guardados", "", "info");
          }
        });
      } else{
        Swal.fire({
          title: "Ocurrió un error",
          text: `La tarea ${tarea.nombreTarea} no pudo ser editada. Intentelo nuevamente en unos minutos.`,
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  const eliminarTarea = (tarea) => {
    try {
      Swal.fire({
        title: "Estás seguro que desea eliminar la tarea ?",
        text: "No podrás revertir este proceso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const response = await eliminarTareaAPI(tarea)
          if(response.status === 200){
            const listaTareasActualizada = await leerTareasAPI()
            setListaTareas(listaTareasActualizada)
            Swal.fire({
              title: "Eliminada!",
              text: "La tarea se eliminó exitosamente.",
              icon: "success"
            });
          }
        }
      })
    }
    catch (error) {
      console.error(error);
    }
  }

  const eliminarTodasLasTareas = () => {
    try {
      Swal.fire({
        title: "Estás seguro que desea vaciar la lista de tareas ?",
        text: "No podrás revertir este proceso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const response = await eliminarTodasLasTareasAPI()
          if(response.status === 200){
            const listaTareasActualizada = await leerTareasAPI()
            setListaTareas(listaTareasActualizada)
            Swal.fire({
              title: "Eliminada!",
              text: "La lista de tareas se vació exitosamente.",
              icon: "success"
            });
          }
        }
      })
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1 className='display-1 text-center'>Lista de Tareas</h1>
        <h2 className="text-center my-4">Ingrese aquí sus tareas</h2>
        <FormTareas crearTarea={crearTarea} editarTarea={editarTarea} tareaAEditar={tareaAEditar} setTareaAEditar={setTareaAEditar} />
        <div className='my-4'>
          {listaTareas.length === 0 
            ? <Alert variant='danger' className='fs-5 text-center w-50 mx-auto'>En este momento no hay tareas pendientes.</Alert>
            : <ListaTareas listaTareas={listaTareas} eliminarTarea={eliminarTarea} setTareaAEditar={setTareaAEditar} eliminarTodasLasTareas={eliminarTodasLasTareas} />
          }
        </div>
      </Container>

      <Footer />
    </>
  )
}

export default App
