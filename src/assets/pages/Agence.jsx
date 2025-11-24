import { useGSAP } from '@gsap/react';
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from 'react'

export default function Agence() {
  // Ref to ref the image div
  const imageDivRef = useRef(null);
  // Ref to refer the images
  const teamMatesImageRef = useRef(null);

  // Array to store the team memebers images
  const teamMembersImagesArray = [
    "/k72_teamMembers/Carl_480x640.jpg",
    "/k72_teamMembers/CAMILLE_480X640_2.jpg",
    "/k72_teamMembers/ChantalG_480x640.jpg",
    "/k72_teamMembers/HugoJoseph_480x640.jpg",
    "/k72_teamMembers/joel_480X640_3.jpg",
    "/k72_teamMembers/MEGGIE_480X640_2.jpg",
    "/k72_teamMembers/MEL_480X640.jpg",
    "/k72_teamMembers/Michele_480X640.jpg",
    "/k72_teamMembers/Michele_480X640.jpg",
    "/k72_teamMembers/SophieA_480x640.jpg",
  ]

  // Register the scroll triger plugin
  gsap.registerPlugin(ScrollTrigger);

  // useGSAP to apply images animation
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "bottom 20%",
        end: "+=500",
        onUpdate: ((self) => {
          const imageIndex = Math.round(self.progress * teamMembersImagesArray.length);

          if (imageIndex < teamMembersImagesArray.length - 2) {
            // Update the image src
            teamMatesImageRef.current.src = teamMembersImagesArray[imageIndex];
          }
          else {
            teamMatesImageRef.current.src = teamMembersImagesArray[teamMembersImagesArray.length - 1];
          }
        })
      }
    })
  })

  return (
    <div className='agence-wrapper'>
      <div className="agenceLanding-wrapper w-[99vw] p-2 relative">
        <div ref={imageDivRef} className="agenceLanding-teamMemebersImages w-[16vw] h-[20vw] rounded-xl sticky top-20 left-100 overflow-hidden">
          <img ref={teamMatesImageRef} className='w-full h-full object-cover' src="/k72_teamMembers/Carl_480x640.jpg" alt="Person 1" />
        </div>
        <div className="agenceLanding-texts w-full h-fit flex flex-col justitfy-center items-center gap-6 relative">
          <div className="agenceLanding-headerText w-full h-fit flex flex-col justify-center items-center">
            <h1 className='w-fit h-fit text-[20vw] text-black text-center leading-[16vw] tracking-tight font-semibold'>
              SEVEN7Y
            </h1>
            <h1 className='w-fit h-fit text-[20vw] text-black text-center leading-[16vw] tracking-tight font-semibold'>
              TWO
            </h1>
          </div>
          <div className="agenceLanding-subText w-full h-fit flex justify-end items-center">
            <p className='w-[52vw] h-fit text-[3vw] text-black leading-[3vw] tracking-tighter'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolor aliquam vero architecto! Nesciunt iusto quas, tenetur culpa beatae praesentium aut vero asperiores omnis earum qui, deleniti quia inventore cumque, ratione alias illo eum corporis rem. Accusamus, vitae sapiente fuga quia quae eos quos at?
            </p>
          </div>
        </div>
      </div>
      <div className="section2 bg-green-300 w-screen h-screen"></div>
    </div>
  )
}
