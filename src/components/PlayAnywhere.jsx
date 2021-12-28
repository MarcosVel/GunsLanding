import React from 'react'
import Skulls from '../assets/images/skulls.png'

function PlayAnywhere() {

  return (
    <section className="gunstars__playAnywhere">
      <div className="div-iphone">
        <video muted loop autoPlay>
          <source src='https://gunstarsgame.com/header-video-promo.mp4' type='video/mp4' />
        </video>
      </div>
      <img src={Skulls} alt="Skulls" className="mt-24" />
      <h1 className="gunstars__guns-title uppercase text-center mt-24 mb-24" style={{ whiteSpace: 'pre-line' }}>jogue onde<br />você quiser</h1>
      <p className="gunstars__guns-descriptions text-center" style={{ maxWidth: '975px', paddingBottom: '78px'}}>Uma experiência multijogador de tiro em terceira pessoa, rápida, gratuita, que<br />acomoda até 36 jogadores em celulares e tablets. Junte-se ao cenário competitivo<br />para obter itens e tokens exclusivos. Colecione, troque ou faça qualquer outra coisa<br />que você queira, perto de seus verdadeiros ídolos e marcas favoritas.</p>
    </section>
  )
}

export default PlayAnywhere;
