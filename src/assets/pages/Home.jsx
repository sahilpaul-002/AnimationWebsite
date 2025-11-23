import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomNavigation from '../components/home/HomeBottomNavigation'

export default function Home() {
  return (
    <div className='homeHeroSection w-screen h-screen relative'>
      <div className="homeHeroSection-Video w-full h-full">
        <Video />
      </div>
      <div className="homeHeroSection-hero-text-navigationButtons w-full h-full bg-transparent flex flex-col justify-start items-center gap-20 absolute inset-0">
        <HomeHeroText />
        <HomeBottomNavigation />
      </div>
    </div>
  )
}
