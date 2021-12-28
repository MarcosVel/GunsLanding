import React from 'react'
import AppStore from '../assets/images/appStore.svg';
import GooglePlay from '../assets/images/googlePlay.svg';

function Banner() {  
  return (
    <section className="gunstars__banner">
      <h2 className="uppercase text-center">O lançamento oficial do Gunstars está chegando com a primeira temporada e pacotes exclusivos de NFTs para pegar!</h2>
      <h1 className="mt-16">45d 12h 23m 15s</h1>
      <div className="d-flex mt-24">
        <button className="btnStores"><img src={AppStore} alt="AppStore" /></button>
        <button className="btnStores"><img src={GooglePlay} alt="GooglePlay" /></button>
      </div>
    </section>
  )
}

export default Banner;
