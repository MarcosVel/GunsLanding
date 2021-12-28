import React from 'react'
import GameplayDesert from '../assets/images/gameplay-desert.mp4';

function DesertVideo() {
  return (
    <section className="gunstars__desertVideo">
        <video muted loop autoPlay>
          <source src={GameplayDesert} type='video/mp4' />
        </video>
    </section>
  )
}

export default DesertVideo;
