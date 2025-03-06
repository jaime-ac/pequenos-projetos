import { useState } from "react"
import Gif from "../components/Gif";


function Distancia() {

  const [distanciaDigitada, setDistanciaDigitada] = useState();
  const [medidaSelecionada, setMedidaSelecionada] = useState();
  const [medidaConversao, setMedidaConversao] = useState();
  const [resultadoConversao, setResultadoConversao] = useState();

  function converterDistancia(){
    
    let distanciaConvertida

    if (medidaSelecionada === medidaConversao){

      setResultadoConversao('erro!!!')

    }else{

      //convertendo de metros para as outras unidades
      if (medidaSelecionada === 'metros' && medidaConversao === 'quilometros'){
  
        distanciaConvertida = (parseFloat(distanciaDigitada) / 1000)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} metros = ${distanciaConvertida} quilomêtros`}/>)
  
      }else if (medidaSelecionada === 'metros' && medidaConversao === 'milhas'){

        distanciaConvertida = (parseFloat(distanciaDigitada) / 1609)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} metros = ${distanciaConvertida} milhas`}/>)

      }else if (medidaSelecionada === 'metros' && medidaConversao === 'pes'){

        distanciaConvertida = (parseFloat(distanciaDigitada) * 3.281)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} metros = ${distanciaConvertida} pés`}/>)

      }

      //convertendo de quilomêtros para as outras unidades
      if (medidaSelecionada === 'quilometros' && medidaConversao === 'metros'){
  
        distanciaConvertida = (parseFloat(distanciaDigitada) * 1000)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} quilomêtros = ${distanciaConvertida} metros`}/>)
  
      }else if (medidaSelecionada === 'quilometros' && medidaConversao === 'milhas'){

        distanciaConvertida = (parseFloat(distanciaDigitada) / 1609)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} quilomêtros = ${distanciaConvertida} milhas`}/>)

      }else if (medidaSelecionada === 'quilometros' && medidaConversao === 'pes'){

        distanciaConvertida = (parseFloat(distanciaDigitada) * 3281)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} quilomêtros = ${distanciaConvertida} pés`}/>)

      }

      //convertendo de milhas para as outras unidades
      if (medidaSelecionada === 'milhas' && medidaConversao === 'metros'){
  
        distanciaConvertida = (parseFloat(distanciaDigitada) * 1609)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} milhas = ${distanciaConvertida} metros`}/>)
  
      }else if (medidaSelecionada === 'milhas' && medidaConversao === 'quilometros'){

        distanciaConvertida = (parseFloat(distanciaDigitada) / 1.609)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} milhas = ${distanciaConvertida} quilomêtros`}/>)

      }else if (medidaSelecionada === 'milhas' && medidaConversao === 'pes'){

        distanciaConvertida = (parseFloat(distanciaDigitada) * 5280)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} milhas = ${distanciaConvertida} pés`}/>)

      }

      //convertendo de pés para as outras unidades
      if (medidaSelecionada === 'pes' && medidaConversao === 'metros'){
  
        distanciaConvertida = (parseFloat(distanciaDigitada) / 3.281).toFixed(5)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} pés = ${distanciaConvertida} metros`}/>)
  
      }else if (medidaSelecionada === 'pes' && medidaConversao === 'quilometros'){

        distanciaConvertida = (parseFloat(distanciaDigitada) / 3281).toFixed(5)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} pés = ${distanciaConvertida} quilomêtros`}/>)

      }else if (medidaSelecionada === 'pes' && medidaConversao === 'milhas'){

        distanciaConvertida = (parseFloat(distanciaDigitada) / 5280).toFixed(5)
  
        setResultadoConversao(<Gif imagem="/public/distancia/goku.gif" texto={`${distanciaDigitada} pés = ${distanciaConvertida} milhas`}/>)

      }

    }

  }

  return (

    <div className="container__distancia">

      <div className="header__distancia">

        <div className="header__distancia--elementos">

          <label htmlFor="" className="header__distancia--descricao">Crie um componente que converta distâncias entre metros, quilômetros, milhas e pés.</label>
          <label htmlFor="">🏃🏾‍♂️‍➡️🛣️</label>

        </div>

      </div>

      <div className="body__distancia">

        <div className="body__left">

          <div className="body__left--top">

            <input 
              type="number" 
              className="input__distancia"
              placeholder="digite a distância..."
              value={distanciaDigitada}
              onChange={(e) => setDistanciaDigitada(e.target.value)}
            />

          </div>

          <div className="body__left--center">

            <select 

              name="" 
              id="" 
              className="select__distancia"
              value={medidaSelecionada}
              onChange={(e) => setMedidaSelecionada(e.target.value)}
            >

              <option value="">Seleciona a medida digitada</option>
              <option value="metros">Metros</option>
              <option value="quilometros">Quilomêtros</option>
              <option value="milhas">Milhas</option>
              <option value="pes">Pés</option>

            </select>

            <img src="/public/distancia/icone.png" alt="" className="imagem__conversao"/>

            <select 
              name="" 
              id="" 
              className="select__distancia"
              value={medidaConversao}
              onChange={(e) => setMedidaConversao(e.target.value)}
            >

              <option value="">Seleciona a medida de conversão</option>
              <option value="metros">Metros</option>
              <option value="quilometros">Quilomêtros</option>
              <option value="milhas">Milhas</option>
              <option value="pes">Pés</option>

            </select>

          </div>

          <div className="body__left--bottom">

            <button className="botao__conversao" onClick={converterDistancia}>Converter</button>

          </div>
          
        </div>

        <div className="body__right">

          {resultadoConversao}

        </div>

      </div>
      
    </div>
  )
}

export default Distancia
