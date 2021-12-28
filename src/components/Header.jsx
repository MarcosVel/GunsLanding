import React from 'react'
import LogoGunstars from '../assets/images/logo-gunstars.png';
import LogoDiscord from '../assets/images/logo-discord.svg';

function Header() {
  return (
    <>
      <header className="gunstars__header">
        <img src={ LogoGunstars } alt="Logo Gunstars" />

        <ul>
          <li><a href="">Gunstars</a></li>
          <li><a href="">Jogue & ganhe</a></li>
          <li><a href="">GAMEPLAY</a></li>
          <li><a href="">NFTS</a></li>
          <li><a href="">criadores</a></li>
        </ul>

        <button className="btn-discord">
          <img src={ LogoDiscord } alt="Logo Discord" />
          Discord
        </button>
      </header>
    </>
  )
}

export default Header;
