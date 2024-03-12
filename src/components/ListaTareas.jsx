import { Button, Table } from 'react-bootstrap'
import ItemTarea from './ItemTarea'

export default function ListaTareas({listaTareas, eliminarTarea, setTareaAEditar}) {
  return (
    <div className='d-flex flex-column my-4'>
      <Table striped>
        <tbody>
          {listaTareas.map((tarea, i) => (<ItemTarea key={i} tarea={tarea} eliminarTarea={eliminarTarea} setTareaAEditar={setTareaAEditar} />))}
        </tbody>
      </Table>
      <Button variant='danger' className='mt-3 align-self-end'>Eliminar todas las tareas</Button>    
    </div>
  )
}
