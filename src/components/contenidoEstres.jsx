import React from 'react'
import './contenidoEstres.css'
import chevronRight from '../imagenes/chevronRight.png'



const ContenidoEstres = () => {
  return (
    

  <div className="ContenidoEstres">
      <div className="ContenidoEstresChild">
        <a href="https://medlineplus.gov/spanish/ency/article/001942.htm" target="_blank" rel="noopener noreferrer">  Cómo mejorar el estrés <img className='imgContenidoEstres' alt="" src={chevronRight} /> </a>
      </div>
      <div className="ContenidoEstresChild">
        <a href="https://www.sabervivirtv.com/medicina-general/posturas-yoga-para-eliminar-estres-ansiedad_3416" target="_blank" rel="noopener noreferrer">  7 simples estiramientos de yoga para eliminar el estrés diario  <img className='imgContenidoEstres' alt="" src={chevronRight} /></a>
      </div>
      <div className="ContenidoEstresChild">
        <a href="https://vidafeliz.co/la-importancia-de-desconectarse/" target="_blank" rel="noopener noreferrer"> Por qué su cerebro necesita tiempo de inactividad  <img alt="" src={chevronRight} /></a>
      </div>
      <div className="ContenidoEstresChild">
        <a href="https://www.bbc.com/mundo/noticias-53472255#:~:text=%C2%BFC%C3%B3mo%20puede%20da%C3%B1arse%20nuestro%20cerebro,necesario%20para%20regular%20numerosas%20funciones" target="_blank" rel="noopener noreferrer"> Cómo el estrés afecta tu cerebro <img alt="" src={chevronRight} /> </a>
      </div>      
      <div className="ContenidoEstresChild">
        <a href="https://factorhuma.org/es/actualitat/blog-factor-huma/10610-como-convertir-al-estres-en-tu-amigo" target="_blank" rel="noopener noreferrer"> Cómo hacer del estrés tu amigo <img alt="" src={chevronRight} /></a>
      </div>      

    </div>
    
  )
}

export default ContenidoEstres