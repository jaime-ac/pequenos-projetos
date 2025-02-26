import { useState } from "react"
import Aviso from "../pages/Aviso"
import Temperatura from "../pages/Temperatura";
import Moedas from "../pages/Moedas";
import Distancia from "../pages/Distancia";
import Imc from "../pages/Imc";

function Main() {
    const [tela, setTela] = useState();

  return (
    <div className="main__container">

       <div className="topicos__container">
            
            <div className="topicos__header">
                <h2>Tópicos</h2>
            </div>

            <div className="topicos__opcoes">

                <button className="botao__exercicio--aviso" onClick={() => setTela(<Aviso />)}>O grande avisador⚠️</button>
                <button className="botao__exercicio" onClick={() => setTela(<Temperatura />)}>Conversor de temperatura🌡</button>
                <button className="botao__exercicio" onClick={() => setTela(<Moedas />)}>Conversor de moedas💱</button>
                <button className="botao__exercicio" onClick={() => setTela(<Distancia />)}>Conversor de distância🛣️</button>
                <button className="botao__exercicio" onClick={() => setTela(<Imc />)}>Calculador de IMC⚖️</button>
                
            </div>

       </div>

       <div className="exercicios__container">
            {tela}
       </div>
      
    </div>
  )
}

export default Main
