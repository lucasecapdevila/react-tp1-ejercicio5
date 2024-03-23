import { Button, ListGroup } from 'react-bootstrap'
import ItemTarea from './ItemTarea'

export default function ListaTareas({listaTareas, eliminarTarea, setTareaAEditar, eliminarTodasLasTareas}) {
  return (
    <div className='d-flex flex-column my-4'>
      <ListGroup>
        {listaTareas.map((tarea, i) => (<ItemTarea key={i} tarea={tarea} eliminarTarea={eliminarTarea} setTareaAEditar={setTareaAEditar} />))}
      </ListGroup>
      <Button variant='danger' className='mt-3 align-self-end' onClick={() => eliminarTodasLasTareas()}>Eliminar todas las tareas</Button>    
    </div>
  )
}
