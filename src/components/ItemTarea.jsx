import { faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ListGroupItem } from 'react-bootstrap'

const ItemTarea = ({tarea, eliminarTarea, setTareaAEditar}) => {
  return (
    <ListGroupItem key={tarea._id} className='d-flex align-items-center justify-content-between'>
      {tarea.nombreTarea}
      <div>
        <Button variant='warning' className='me-2' onClick={() => setTareaAEditar(tarea)}>
        <FontAwesomeIcon icon={faFilePen} />
        </Button>
        <Button variant='secondary' className='me-2' onClick={() => eliminarTarea(tarea)}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </ListGroupItem>
  )
}

export default ItemTarea