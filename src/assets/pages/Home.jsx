import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'

export default function Home() {
  return (
    <div className='homeHeroSection w-screen h-screen relative'>
      <div className="homeHeroSection-Video w-full h-full">
        <Video />
      </div>
      <div className="homeHeroSection-hero-text w-full h-full bg-transparent flex flex-col justify-start items-center absolute inset-0">
        <HomeHeroText />
      </div>
    </div>
  )
}
