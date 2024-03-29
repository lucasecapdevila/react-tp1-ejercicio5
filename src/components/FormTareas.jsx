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
      <Form onSubmit={handleSubmit} className='d-flex flex-column'>
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
        </Form.Group>
        <Button variant='success' className='mx-2 px-4 align-self-end' type='submit'>{form._id ? 'Editar' : 'Agregar'}</Button>
      </Form>
    </section>
  );
};

export default FormTareas;