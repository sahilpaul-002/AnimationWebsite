import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomNavigation from '../components/home/HomeBottomNavigation'
import ChangeRoute from '../components/otherComponents/ChangeRoute'

export default function Home() {
  return (
    <>
      <ChangeRoute />
      <div className='homeHeroSection w-screen h-[60vw] xl:h-screen relative'>
        <div className="homeHeroSection-Video w-full h-full">
          <Video />
        </div>
        <div className="homeHeroSection-hero-text-navigationButtons w-full h-full pb-4 flex flex-col justify-between items-center absolute inset-0">
          <HomeHeroText />
          <HomeBottomNavigation />
        </div>
      </div>
    </>
  )
}
