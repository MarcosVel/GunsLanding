import React from 'react'
import JoystickIcon from '../assets/images/joystick.png';
import EarnNFTIcon from '../assets/images/earnNFT.png';
import SellIcon from '../assets/images/sell.png';
import EarnMoneyIcon from '../assets/images/earnMoney.png';
import ArrowIcon from '../assets/images/arrow.png';

function PlayAndWin() {
  return (
    <section className="gunstars__playAndWin">
      <div className="cards">
        <div className="card-green">
          <div className="div-title mb-16">
            <h4 className="title-h4 color-green">ganhe uma skin<br />nft da loud</h4>
          </div>
          <p className="description-card mb-32">Faça o pré-registro e<br />garanta seu primeiro<br />NFT grátis!</p>
          <button className="btn-card background-green uppercase">RESGATAR NFT</button>
        </div>
        <div className="card-pink">
          <div className="div-title-pink mb-16">
            <h4 className="title-h4 color-pink">nfts<br />drops</h4>
          </div>
          <p className="description-card mb-32">Tenha acesso à<br />exclusivos NFTs<br />em pré-venda.</p>
          <button className="btn-card background-pink uppercase">VER DROPS</button>
        </div>
      </div>

      <h1 className="gunstars__guns-title uppercase text-center mb-24">jogue & ganhe</h1>
      <p className="gunstars__guns-descriptions text-center" style={{ margin: '0 auto', maxWidth: '1086px' }}>Gunstars foi desenvolvido para conectar fãs e criadores por meio de experiências divertidas e interativas no modelo Play & Earn (jogue e ganhe), trazendo muito conteúdo e colecionáveis exclusivos para seus jogadores, sem esquecer do principal, a diversão!</p>

      <div className="boxes-icons">
        <div>
          <div className="green-box">
            <img src={JoystickIcon} alt="Joystick icon" />
          </div>
          <h5 className='box-title mt-16'>jogue<br />grátis</h5>
        </div>
        <img src={ArrowIcon} alt="Arrow icon" className="arrow" />
        <div>
          <div className="green-box">
            <img src={EarnNFTIcon} alt="EarnNFT icon" />
          </div>
          <h5 className='box-title mt-16'>ganhe<br />nfts</h5>
        </div>
        <img src={ArrowIcon} alt="Arrow icon" className="arrow" />
        <div>
          <div className="green-box">
            <img src={SellIcon} alt="Sell icon" />
          </div>
          <h5 className='box-title mt-16'>venda no<br />marketplace</h5>
        </div>
        <img src={ArrowIcon} alt="Arrow icon" className="arrow" />
        <div>
          <div className="green-box">
            <img src={EarnMoneyIcon} alt="EarnMoney icon" />
          </div>
          <h5 className='box-title mt-16'>ganhe<br />dinheiro</h5>
        </div>
      </div>
    </section>
  )
}

export default PlayAndWin;
