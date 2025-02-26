import { useState } from "react"


function Imc() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
  return (
    <div className="container__imc">

        <div className="imc__header">

            <label htmlFor="" className="texto__descricao">Desenvolva uma calculadora de Índice de Massa Corporal IMC que receba peso e altura</label>
            <label htmlFor="" className="texto__descricao">e retorne o IMC e a classificação ex: abaixo do peso, normal, sobrepeso.</label>
            <img src="/public/imc.png" alt="" className="gif__imc"/>

        </div>

        <div className="imc__dados">

            <input 
                type="number"
                value={peso}
                onChange={(event) => setPeso(event.target.value)}
                className="imc__entrada--dados"
                placeholder="digite o seu peso aqui" 
            />

            <input 
                type="number"
                value={altura}
                onChange={(event) => setAltura(event.target.value)}
                className="imc__entrada--dados"
                placeholder="digite a sua altura aqui"
            />
            
            <button className="imc__calcular">Calcular</button>

        </div>

        <div className="imc__resultado">

        </div>
      
    </div>
  )
}

export default Imc
