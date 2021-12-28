import React from 'react'
import GunstarsFooter from '../assets/images/gunstarsFooter.png';
import Monomyto from '../assets/images/monomyto.png';
import LoudLogo from '../assets/images/loudLogo.png';
import Dropull from '../assets/images/dropull.png';
import LogoDiscord from '../assets/images/logo-discord.svg';
import MsgIcon from '../assets/images/msg_icon.png';
import TwitterIcon from '../assets/images/twitter_icon.png';
import FacebookIcon from '../assets/images/facebook_icon.png';
import InstagramIcon from '../assets/images/instagram_icon.png';
import YoutubeIcon from '../assets/images/youtube_icon.png';

function Footer() {  
  return (
    <section className="gunstars__footer-section">
      <div className="footer-gunstars">
        <div className="logo-nav">
          <img src={GunstarsFooter} alt="Fans close image" />
          <div>
            <ul className="list d-flex">
              <li><a href="">Gunstars</a></li>
              <li><a href="">Jogue & ganhe</a></li>
              <li><a href="">GAMEPLAY</a></li>
              <li><a href="">NFTS</a></li>
              <li><a href="">criadores</a></li>
            </ul>
          </div>
        </div>
        <span className="copyright mt-24">© 2021, Monomyto Studio</span>
        <div className="footer-bottom">
          <div>
            <img src={Monomyto} alt="Monomyto logo" />
            <img src={LoudLogo} alt="Loud logo" />
            <img src={Dropull} alt="Dropull logo" />
          </div>

          <ul className="list">
            <li><a href="">estamos contratando</a></li>
            <li className="mt-48"><a href="">time</a></li>
            <li className="mt-48"><a href="">termos & condições</a></li>
            <li className="mt-48"><a href="">política de Privacidade</a></li>
          </ul>

          <div className="join-us">
            <div className="join-discord">
              <h4 className="text-center">junte-se a nós em<br />nossa comunidade</h4>
              <button className="discord-btn mt-16">
                <img src={ LogoDiscord } alt="Logo Discord" />
                Discord
              </button>
            </div>
            <div className="d-flex justify-content-between">
              <img src={ MsgIcon } alt="Msg logo" />
              <img src={ TwitterIcon } alt="Twitter logo" />
              <img src={ FacebookIcon } alt="Facebook logo" />
              <img src={ InstagramIcon } alt="Instagram logo" />
              <img src={ YoutubeIcon } alt="Youtube logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;
