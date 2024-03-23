const URI_TAREAS = import.meta.env.VITE_API_TAREAS

//  Solicitud tipo GET (o Request) para el array de las tareas
export const leerTareasAPI = async() => {
  try {
    const response = await fetch(URI_TAREAS)
    const listaTareas = await response.json()
    return listaTareas
  } catch (error) {
    console.error(error);
  }
}

//  Solicitud tipo POST (crear)
export const crearTareaAPI = async(nuevaTarea) => {
  try {
    const response = await fetch(URI_TAREAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevaTarea)
    })
    return response
  } catch (error) {
    console.error(error);
  }
}

//  Solicitud tipo PUT (editar)
export const editarTareaAPI = async(id, tarea) => {
  try {
    const response = await fetch(`${URI_TAREAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tarea)
    })
    return response
  } catch (error) {
    console.error(error);
  }
}

//  Solicitud tipo DELETE (eliminar)
export const eliminarTareaAPI = async(tarea) => {
  try {
    const response = await fetch(`${URI_TAREAS}/${tarea._id}`, {
      method: "DELETE",
    })
    return response
  } catch (error) {
    console.error(error);
  }
}