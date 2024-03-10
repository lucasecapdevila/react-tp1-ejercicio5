import { Button, ListGroup } from 'react-bootstrap'
import ItemTarea from './ItemTarea'

export default function ListaTareas({listaTareas, eliminarTarea}) {
  return (
    <div className='d-flex flex-column my-4'>
      <ListGroup>
        {
          listaTareas.map((itemTarea) => <ItemTarea key={itemTarea.id} tarea={itemTarea} eliminarTarea={eliminarTarea} />)
        }
      </ListGroup>
      <Button variant='danger' className='mt-3 align-self-end'>Eliminar todas las tareas</Button>    
    </div>
  )
}
