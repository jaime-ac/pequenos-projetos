import { useState } from "react"


function Imc({imagem, result}) {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    function calcularImc(){

        if (parseFloat(peso) === '' || parseFloat(altura) === ''){

            alert("Atenção você precisa preencher todos os campos antes de prosseguri com o cálculo!")

        }else{

            const imc = (peso / (altura * altura)).toFixed(1)
            alert(imc)
        }
    }

  return (

    <div className="container__imc">

        <div className="imc__header">

            <div className="header__elements">

                <label htmlFor="" className="texto__descricao">Desenvolva uma calculadora de Índice de Massa Corporal IMC que receba peso e altura</label>
                <label htmlFor="" className="texto__descricao">e retorne o IMC e a classificação ex: abaixo do peso, normal, sobrepeso.</label>
                <img src="/public/imc.png" alt="" className="gif__imc"/>

            </div>

        </div>

        <div className="imc__dados">

            <input 
                type="number"
                value={peso}
                onChange={(event) => setPeso(event.target.value)}
                className="imc__entrada--dados"
                placeholder="digite o seu peso aqui em kilos (ex.: 74 ou 74.50)" 
            />

            <input 
                type="number"
                value={altura}
                onChange={(event) => setAltura(event.target.value)}
                className="imc__entrada--dados"
                placeholder="digite a sua altura aqui em metros (ex.: 1.80)"
            />
            
            <button className="imc__calcular" onClick={calcularImc}>Calcular</button>

        </div>

        <div className="imc__resultado">

            <div className="imagem__resultado">

                <img src={imagem} alt="" className="header__resultado--imagem"/>

            </div>

            <div className="texto__resultado">

                {result}

            </div>

        </div>
      
    </div>
  )
}

export default Imc
