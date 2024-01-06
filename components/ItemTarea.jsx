import { Button, ListGroupItem } from 'react-bootstrap'

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroupItem className='d-flex align-items-center justify-content-between'>
      {nombreTarea}
      <Button variant='secondary' className='me-2' onClick={() => {borrarTarea(nombreTarea)}}><i className="fa-solid fa-trash"></i></Button>
    </ListGroupItem>
  )
}

export default ItemTarea