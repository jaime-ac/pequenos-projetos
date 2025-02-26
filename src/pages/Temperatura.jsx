import { useState } from "react"

function Temperatura() {

    const [temperaturaDigitada, setTemperaturaDigitada] = useState();
    const [temperaturaEntrada, setTemperaturaEntrada] = useState();
    const [temperaturaSaida, setTemperaturaSaida] = useState();
    const [resultadoCalculo, setResultadoCalculo] = useState();

    function calcularTemperatura(){
       
        let calculo

        if (temperaturaEntrada === temperaturaSaida){

            setResultadoCalculo(`Erro🌡`)

        }else{

            //converter de celsius para os outros
            if (temperaturaEntrada === 'celsius' && temperaturaSaida === 'kelvin'){
    
                calculo = (parseFloat(temperaturaDigitada) + 273.15).toFixed(1)
                setResultadoCalculo(`${calculo} °K`)
                
            }
            else if(temperaturaEntrada === 'celsius' && temperaturaSaida === 'fahrenheit'){
                
                calculo = (((parseFloat(temperaturaDigitada) *  9 /5)) + 32).toFixed(1)
                setResultadoCalculo(`${calculo} °F`)
                
            }
            
            //converter de farenheit para os outros
            if(temperaturaEntrada === 'fahrenheit' && temperaturaSaida === 'celsius'){
                
                calculo = ((parseFloat(temperaturaDigitada) - 32) * 5/9).toFixed(1)
                setResultadoCalculo(`${calculo} °C`)
                
            }else if(temperaturaEntrada === 'fahrenheit' && temperaturaSaida === 'kelvin'){
                
                calculo = ((parseFloat(temperaturaDigitada) - 32) * 5/9 + 273.15).toFixed(1)
                setResultadoCalculo(`${calculo} °K`)
                
            }
            
            //converter de kelvin para os outros
            if(temperaturaEntrada === 'kelvin' && temperaturaSaida === 'celsius'){
                
                calculo = (parseFloat(temperaturaDigitada) - 273.15).toFixed(1)
                setResultadoCalculo(`${calculo} °C`)
                
            }else if(temperaturaEntrada === 'kelvin' && temperaturaSaida === 'fahrenheit'){
                
                calculo = ((parseFloat(temperaturaDigitada) - 273.15) * 9/5 + 32).toFixed(1)
                setResultadoCalculo(`${calculo} °F`) 
    
            }

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
                        <option value="fahrenheit">Fahrenheit</option>
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
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>

                    </select>

                </div>

                <div className="temperatura__calculo">

                    <button className="botao__calculo" onClick={calcularTemperatura}>Calcular</button>

                </div>

            </div>

            <div className="temperatura__resultado">

                <div className="temperatura__resultado--quadro">

                    {resultadoCalculo}

                </div>

                
            </div>

        </div>
      
    </div>
  )
}

export default Temperatura
