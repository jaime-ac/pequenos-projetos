import { useEffect, useState, useRef } from 'react'
import './ListasLivros.css'

function ListasLivros() {

    const [abriuForm, setAbriuForm] = useState(false);
    const [nomeLista, setNomeLista] = useState('');
    const [descricaoLista, setDescricaoLista] = useState('');
    const [listas, setListas] = useState([{
        nome: '',
        descricao: ''
    }])

    const ref = useRef();

    function salvarLista(){
        setAbriuForm(false)
    }

    // useEffect(() => {
    //     if(abriuForm){
    //         ref.current?.showModal();
    //     }else{
    //         ref.current?.close();
    //     }
    // }, [abriuForm]);

  return (
    <div className='container__listas'>

        <div className="listas__header">

            <button className="botao__criar--listas" onClick={() => setAbriuForm(true)}>
                {console.log(abriuForm)}
                <img src="./flipi/criar-listas.svg" alt="" className='img__criar--listas'/>
            </button>

        </div>

        <div className="listas__body">

            <div className="listas__body--card__listas">

            </div>

        </div>

            <dialog open={abriuForm}>

                <div className="form__listas">

                    <div className="form__nome--lista">

                        <label htmlFor="" className="nome__lista">Nome</label>
                        <input 
                            type="text"
                            className='form__inputs'
                            placeholder='nomeie sua lista aqui...'
                            value={nomeLista}
                            onChange={(event) => setNomeLista(event.target.value)}
                        />

                    </div>

                    <div className="form__descricao--lista">

                        <label htmlFor="" className="nome__lista">Descrição</label>
                        <textarea 
                            type="text"
                            className='form__campo--descricao'
                            placeholder='escreva uma breve descrição sobre sua lista aqui...'
                            value={descricaoLista}
                            onChange={(event) => setDescricaoLista(event.target.value)}
                        />

                    </div>

                    <div className="form__botao--salvar">

                        <button className="salvar__listas" onClick={salvarLista}>Salvar lista</button>

                    </div>

                </div>

            </dialog>
      
    </div>
  )
}

export default ListasLivros
