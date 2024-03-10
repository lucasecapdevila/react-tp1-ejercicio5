import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const FormTareas = ({crearTarea}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: {errors}
  } = useForm()

  const tareaValidada = (tarea) => {
    crearTarea(tarea)
    reset()
  }

  return (
    <section>
      <Form onSubmit={handleSubmit(tareaValidada)}>
        <Form.Group className="mb-3 d-flex" controlId="inputTarea">
          <Form.Control
            size='lg'
            placeholder="Ingrese sus tareas"
            type="text"
            {
              ...register("nombreTarea", {
                required: 'Ingrese una tarea.',
                minLength: {
                  value: 5,
                  message: 'La tarea debe tener un mínimo de 5 carácteres.'
                },
                maxLength: {
                  value: 75,
                  message: 'La tarea debe tener un máximo de 75 carácteres.'
                }
              })
            }
          />
          <Form.Text className='text-danger'>{errors.nombreTarea?.message}</Form.Text>
        </Form.Group>
        <Button variant='success' className='mx-2 px-4' type='submit'>Agregar</Button>
      </Form>
    </section>
  );
};

export default FormTareas;