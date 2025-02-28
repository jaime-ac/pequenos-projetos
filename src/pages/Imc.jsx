import { useState } from "react"


function Imc() {

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imagemMasc, setImagemMasc] = useState();
    const [imagemFem, setImagemFem] = useState();
    const [result, setResult] = useState('aguardando...');

    function calcularImc(){

        if (!peso || !altura){ //a ! faz a verificação para ver se um dos campos está retornando '', null, NaN, undefined;

            alert("Atenção você precisa preencher todos os campos antes de prosseguir com o cálculo!")

        }else{

            const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(1)
            
            if (imc < 18.5){

                setImagemMasc('/imc/abaixo-peso-masc.png')
                setImagemFem('/imc/abaixo-peso-fem.png')
                setResult(imc)

            }else if (imc >= 18.5 && imc < 25){
                
                setImagemMasc('/imc/normal-masc.png')
                setImagemFem('/imc/normal-fem.png')
                setResult(imc)

            }else if (imc >= 25 && imc < 30){
                
                setImagemMasc('/imc/acima-peso-masc.png')
                setImagemFem('/imc/acima-peso-fem.png')
                setResult(imc)

            }else{
                
                setImagemMasc('/imc/obesidade-masc.png')
                setImagemFem('/imc/obesidade-fem.png')
                setResult(imc)

            }
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
                placeholder="digite o seu peso em kilos (ex.: 74.00)" 
            />

            <input 
                type="number"
                value={altura}
                onChange={(event) => setAltura(event.target.value)}
                className="imc__entrada--dados"
                placeholder="digite a sua altura em metros (ex.: 1.80)"
            />
            
            <button className="imc__calcular" onClick={calcularImc}>Calcular</button>

        </div>

        <div className="imc__resultado">

            <div className="imagem__resultado">

                <img src={imagemMasc} alt="" className="header__resultado--imagem"/>
                <img src={imagemFem} alt="" className="header__resultado--imagem"/>

            </div>

            <div className="texto__resultado">

                <label htmlFor="" className="imc__text--result">IMC</label>

                <div className="card__resultado">

                    {result}

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Imc
