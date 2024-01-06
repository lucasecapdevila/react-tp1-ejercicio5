import { Container } from 'react-bootstrap'
import './App.css'
import FormTareas from '../components/FormTareas'
import Footer from '../components/Footer'

function App() {

  return (
    <>
      <Container className='my-4 mainPage'>
        <h1 className='display-1 text-center'>Lista de Tareas</h1>
        <h2 className="text-center my-4">Ingrese aquí sus tareas</h2>
        <FormTareas />
      </Container>

      <Footer />
    </>
  )
}

export default App
