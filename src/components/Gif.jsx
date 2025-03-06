import React from 'react'

const Gif = ({ imagem, texto }) => {
  return (
    <div className="gif-container">
    
      <img 
        src={imagem} 
        alt="Pessoa correndo" 
        className="running-gif"
      />

        <div className="resultado__conversao--texto">

            {texto}

        </div> 

    </div>
  )
}

export default Gif
