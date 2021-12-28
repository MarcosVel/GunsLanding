import React from 'react'
import Banner from './components/Banner';
import Header from './components/Header';
import Welcome from './components/Welcome';
import PlayAndWin from './components/PlayAndWin';
import PlayAnywhere from './components/PlayAnywhere';
import HyperCustom from './components/HyperCustom';
import DesertVideo from './components/DesertVideo';
import FansClose from './components/FansClose';
import Footer from './components/Footer';
import './styles.scss';

function Gunstars() {
  return (
    <div>
      <Header />
      <Banner />
      <Welcome />
      <PlayAndWin />
      <PlayAnywhere />
      <HyperCustom />
      <DesertVideo />
      <FansClose />
      <Footer />
    </div>
  )
}

export default Gunstars
