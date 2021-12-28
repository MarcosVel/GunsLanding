import React from 'react'
import FansCloseImg from '../assets/images/fansClose.png';

function FansClose() {  
  return (
    <section className="gunstars__fansClose">
      <div className="close-idols">
        <h1 className="gunstars__guns-title uppercase mb-32" style={{ whiteSpace: 'pre-line' }}>Fãs próximos<br />de seus<br />ídolos</h1>
        <p className="gunstars__guns-descriptions mb-48">Parceria de perto com<br />influenciadores e marcas como a<br />LOUD para criar conteúdo exclusivo<br />para seu público.<br /><br />Cosméticos personalizados e<br />chance de entrar no metaverso do<br />jogo como um personagem jogável.<br /><br />Ferramentas especiais para<br />criadores de conteúdo para<br />melhorar o envolvimento do público<br />e o crescimento da comunidade.</p>
        <button><span>CRIADORES?</span> DIGA OLÁ!</button>
      </div>
      <img src={FansCloseImg} alt="Fans close image" />
    </section>
  )
}

export default FansClose;
