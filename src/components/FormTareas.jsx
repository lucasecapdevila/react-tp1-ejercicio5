import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const formInicial = {
  nombreTarea: ''
}

const FormTareas = ({crearTarea}) => {

  const [form, setForm] = useState(formInicial)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(form.id === undefined){
      crearTarea(form)
    } else{
      console.log('Aquí voy a editar');
    }
    handleReset()
  }

  const handleReset = (e) => {
    setForm(formInicial)
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId='nombreTarea'>
          <Form.Control
            name='nombreTarea'
            size='lg'
            placeholder="Ingrese sus tareas"
            type="text"
            minLength={5}
            maxLength={75}
            onChange={handleChange}
            value={form.nombreTarea}
          />
          <Form.Text className='text-danger'></Form.Text>
        </Form.Group>
        <Button variant='success' className='mx-2 px-4' type='submit'>Agregar</Button>
      </Form>
    </section>
  );
};

export default FormTareas;