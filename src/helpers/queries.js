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
    console.log(response);
    return response
  } catch (error) {
    console.error(error);
  }
}