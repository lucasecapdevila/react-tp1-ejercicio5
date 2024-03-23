import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

const ItemTarea = ({tarea, eliminarTarea, setTareaAEditar}) => {
  return (
    <tr key={tarea._id} className='d-flex align-items-center justify-content-between'>
      <td>{tarea.nombreTarea}</td>
      <td>
        <Button variant='warning' className='me-2' onClick={() => setTareaAEditar(tarea)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Button variant='secondary' className='me-2' onClick={() => eliminarTarea(tarea._id)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  )
}

export default ItemTarea