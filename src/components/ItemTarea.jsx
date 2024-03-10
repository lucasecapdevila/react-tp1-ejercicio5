import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, ListGroupItem } from 'react-bootstrap'

const ItemTarea = ({tarea, eliminarTarea}) => {
  return (
    <ListGroupItem className='d-flex align-items-center justify-content-between'>
      {tarea.nombreTarea}
      <Button variant='secondary' className='me-2' onClick={() => eliminarTarea(tarea.id)}><FontAwesomeIcon icon={faTrash} /></Button>
    </ListGroupItem>
  )
}

export default ItemTarea