import ListasLivros from '../components/ListasLivros'
import './Biblioteca.css'

function Biblioteca({ componente }) {
  return (
    <div className='container__biblioteca'>

        {componente}
      
    </div>
  )
}

export default Biblioteca
