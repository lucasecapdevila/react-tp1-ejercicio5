import { Button, Form } from 'react-bootstrap';

const FormTareas = ({crearTarea}) => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control
            size='lg'
            placeholder="Ingrese sus tareas"
            type="text"
            minLength={5}
            maxLength={75}
          />
        </Form.Group>
        <Button variant='success' className='mx-2 px-4' type='submit'>Agregar</Button>
      </Form>
    </section>
  );
};

export default FormTareas;