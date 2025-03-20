import { useEffect, useState } from 'react'
import './ListasLivros.css'
import CardLista from './CardLista';
import MinhaLista from './MinhaLista';

function ListasLivros() {

    const [abriuForm, setAbriuForm] = useState(false);
    const [nomeLista, setNomeLista] = useState('');
    const [descricaoLista, setDescricaoLista] = useState('');
    const [listas, setListas] = useState([]);
    const [mostrarLista, setMostrarLista] = useState(false);

    function salvarLista(){

        if (nomeLista.trim() && descricaoLista.trim()) {
            setListas(prevListas => {
                const novasListas = [...prevListas, { nomeLista, descricaoLista }];
                setNomeLista(""); // Limpa o input
                setDescricaoLista(""); // Limpa o input
                setAbriuForm(false); // Fecha o diálogo APÓS atualizar a lista
                console.log(novasListas)
                return novasListas;
            });
        }

    }

  return (
    <div className='container__listas'>

        {mostrarLista && <MinhaLista />}

        <div className="listas__header">

            <button className="botao__criar--listas" onClick={() => setAbriuForm(true)}>
                <img src="./flipi/criar-listas.svg" alt="" className='img__criar--listas'/>
            </button>

        </div>

        <div className="listas__body">

            <div className="listas__body--card__listas">

                {listas.length > 0 ? (
                        listas.map((lista, index) => (

                            <div className="card__lista" onClick={() => setMostrarLista(true)}>
                                <CardLista key={index} titulo={lista.nomeLista} />
                            </div>
                        ))
                    ) : (
                            <p>Nenhuma lista criada ainda.</p>
                    )
                }
 
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
