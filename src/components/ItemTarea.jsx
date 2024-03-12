import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

const ItemTarea = ({tarea, eliminarTarea}) => {
  return (
    <tr key={tarea.id} className='d-flex align-items-center justify-content-between'>
      <td>{tarea.nombreTarea}</td>
      <td>
        <Button 
          variant='secondary'
          className='me-2'
          onClick={() => eliminarTarea(tarea.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  )
}

export default ItemTarea