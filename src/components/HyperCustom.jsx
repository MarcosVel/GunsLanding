import React from 'react'
import PlayWithFriends from '../assets/images/playWithFriends.svg'
import RealIdols from '../assets/images/realIdols.svg'
import GameModes from '../assets/images/gameModes.svg'
import TarsSkins from '../assets/images/tarsSkins.mp4';
import HeroSkillArmour from '../assets/images/Hero-Skill-Armour.png';
import HeroSkillDamage from '../assets/images/Hero-Skill-Damage.png';
import HeroSkillRange from '../assets/images/Hero-Skill-Range.png';
import HeroSkillSpeed from '../assets/images/Hero-Skill-Speed.png';
import HeroSkillVitality from '../assets/images/Hero-Skill-Vitality.png';
import Nfts from '../assets/images/nfts.png';
import Coin from '../assets/images/coin.png';
import NftRare from '../assets/images/nftRare.png';
import Exchange from '../assets/images/exchange.png';
import SellItems from '../assets/images/sellItems.png';
import Trading from '../assets/images/trading.png';

function PlayAnywhere() {
  return (
    <section className="gunstars__hyperCustom">
      <div className="hyper-cards">
        <img src={PlayWithFriends} alt="Play with your friends image" />
        <img src={RealIdols} alt="Real idols image" />
        <img src={GameModes} alt="Multiple modes image" />
      </div>

      <div className="custom-skins">
        <video muted loop autoPlay>
          <source src={TarsSkins} type='video/mp4' />
        </video>
        <div>
          <h1 className="gunstars__guns-title uppercase mb-24" style={{ whiteSpace: 'pre-line' }}>Hiper<br />Customização</h1>
          <p className="gunstars__guns-descriptions">Armas, roupas, penteados, expressões,<br />provocações e outras estéticas que permitem<br />uma auto expressão e colecionáveis únicos.</p>
          <div className='custom-items'>
            <img src={HeroSkillDamage} alt="Skill Damage" />
            <img src={HeroSkillArmour} alt="Skill Armour" />
            <img src={HeroSkillVitality} alt="Skill Vitality" />
            <img src={HeroSkillSpeed} alt="Skill Speed" />
            <img src={HeroSkillRange} alt="Skill Range" />
          </div>
        </div>
      </div>

      <div className='nfts-cards'>
        <img src={Nfts} alt="Nfts" />
      </div>

      <h1 className="gunstars__guns-title uppercase mb-24" style={{ whiteSpace: 'pre-line' }}>Gunstars NFTs</h1>
      <p className="gunstars__guns-descriptions text-center" style={{ maxWidth: '1166px' }}>Vários tokens NFTs para desbloquear gratuitamente jogando Gunstars, e trocá-los no marketplace<br />para ganhar dinheiro. Basta jogar e ganhar G-bucks todos os dias em diferentes partes do jogo.</p>

      <div className='nfts-arrows'>
        <div className='gunstars-nfts'>
          <div className="play-earn">
            <h4 className="uppercase text-center">play<br />&<br />earn</h4>
            <p className="gunstars__guns-descriptions ml-24">- Caixas Diárias<br />- Recompensas Grátis<br />- Eventos<br />- Missões<br />- Ligas Competitivas</p>
            <img src={Coin} alt="Coin" id='coin' />
          </div>
          <img src={NftRare} alt="Nft Pack Rare" />
        </div>
        <div className='d-flex w-100 mt-32' style={{ maxWidth: '1048px', gap: '164px' }}>
          <div>
            <img src={Exchange} alt="Exchange icon" />
            <h5 className='title-h5 mt-16 uppercase'>TROQUE<br />($$$)</h5>
          </div>
          <div>
            <img src={SellItems} alt="Sell Items icon" />
            <h5 className='title-h5 mt-16 uppercase'>VENDA ITENS<br />(NFTS)</h5>
          </div>
          <div>
            <img src={Trading} alt="Trading icon" />
            <h5 className='title-h5 mt-16 uppercase'>NEGOCIE<br />(marketplace)</h5>
          </div>
        </div>
      </div>

      <button className='btn-marketplace uppercase'>ENTRE NO <span>marketplace</span></button>
    </section>
  )
}

export default PlayAnywhere;
