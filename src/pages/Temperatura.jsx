import { useState } from "react"


function Temperatura() {
    const [temperaturaDigitada, setTemperaturaDigitada] = useState();
    const [temperaturaEntrada, setTemperaturaEntrada] = useState();
    const [temperaturaSaida, setTemperaturaSaida] = useState();
    const [resultadoCalculo, setResultadoCalculo] = useState();

    function calcularTemperatura(){
       
        let calculo

        //converter de celsius para os outros
        if (temperaturaEntrada === 'celsius' && temperaturaSaida === 'kelvin'){

            calculo = (parseFloat(temperaturaDigitada) + 273.15)
            setResultadoCalculo(calculo)
            
        }else if(temperaturaEntrada === 'celsius' && temperaturaSaida === 'farenheit'){
            
            calculo = ((parseFloat(temperaturaDigitada) *  9 /5)) + 32
            setResultadoCalculo(calculo)
    
        }

    }

  return (
    <div className="container__temperatura">

        <div className="temperatura__descricao">
            <label className="texto__descricao">Crie um componente que converta temperaturas entre Celsius, Fahrenheit e Kelvin.</label>
            <label className="texto__descricao">O usuário deve poder inserir um valor e selecionar a unidade de entrada e saída.</label>
        </div>

        <div className="temperatura__exercicio">

            <div className="temperatura__digitada">

                <input 
                    type="number"
                    value={temperaturaDigitada}
                    onChange={(event) => setTemperaturaDigitada(event.target.value)}
                    className="temperatura__input" 
                    placeholder="digite a temperatura aqui"
                />

            </div>
           
            <div className="temperatura__opcoes">

                <div className="temperatura__entrada">

                    <label htmlFor="entrada">Entrada</label>

                    <select 

                        id="entrada"
                        value={temperaturaEntrada}
                        onChange={(event) => setTemperaturaEntrada(event.target.value)} 
                        className="temperatura__select">
                        <option value="">Selecione uma opção de entrada</option>
                        <option value="celsius">Celsius</option>
                        <option value="farenheit">Farenheit</option>
                        <option value="kelvin">Kelvin</option>

                    </select>
                    
                </div>

                <div className="temperatura__saida">

                    <label htmlFor="saida">Saída</label>

                    <select 

                        id="saida"
                        value={temperaturaSaida}
                        onChange={(event) => setTemperaturaSaida(event.target.value)} 
                        className="temperatura__select">
                        <option value="">Selecione uma opção de saída</option>
                        <option value="celsius">Celsius</option>
                        <option value="farenheit">Farenheit</option>
                        <option value="kelvin">Kelvin</option>

                    </select>

                </div>

                <div className="temperatura__calculo">

                    <button className="botao__calculo" onClick={calcularTemperatura}>Calcular</button>

                </div>

            </div>

            <div className="temperatura__resultado">

                {resultadoCalculo}
                
            </div>

        </div>
      
    </div>
  )
}

export default Temperatura
