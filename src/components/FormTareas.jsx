import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const formInicial = {
  nombreTarea: ''
}

const FormTareas = ({crearTarea, editarTarea, tareaAEditar, setTareaAEditar}) => {

  useEffect(() => {
    tareaAEditar ? setForm(tareaAEditar) : setForm(formInicial)
  }, [tareaAEditar])
  const [form, setForm] = useState(formInicial)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(form._id === undefined){
      crearTarea(form)
    } else{
      console.log('Aquí voy a editar');
      editarTarea(form)
    }
    handleReset()
  }

  const handleReset = (e) => {
    setForm(formInicial)
    setTareaAEditar(null)
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
        <Button variant='success' className='mx-2 px-4' type='submit'>{form._id ? 'Editar' : 'Agregar'}</Button>
      </Form>
    </section>
  );
};

export default FormTareas;