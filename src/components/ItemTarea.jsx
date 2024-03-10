import { Button, ListGroupItem } from 'react-bootstrap'

const ItemTarea = ({tarea}) => {
  return (
    <ListGroupItem className='d-flex align-items-center justify-content-between'>
      {tarea.nombreTarea}
      <Button variant='secondary' className='me-2' onClick={() => {borrarTarea(nombreTarea)}}><i className="fa-solid fa-trash"></i></Button>
    </ListGroupItem>
  )
}

export default ItemTarea