import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTareas([...tareas, tarea])
    setTarea('')
  }

  const borrarTarea = (nombreTarea) => {
    const copiaTareas = tareas.filter((tarea) => tarea !== nombreTarea)
    setTareas(copiaTareas)
  }

  const borrarTodo = () => {
    setTareas([])
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control
            size='lg'
            placeholder="Ingrese sus tareas"
            type="text"
            minLength={5}
            maxLength={75}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant='success' className='mx-2 px-4' type='submit'>Agregar</Button>
        </Form.Group>

        <ListaTareas tareas={tareas} borrarTarea={borrarTarea} borrarTodo={borrarTodo} />
      </Form>
    </section>
  );
};

export default FormTareas;