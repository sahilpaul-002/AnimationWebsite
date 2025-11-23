import React from 'react'

export default function Agence() {
  return (
    <div className='agence-wrapper'>
      <div className="agenceLanding-wrapper w-[99vw] p-2 relative">
        <div className="agenceLanding-teamMemebersImages w-[16vw] h-[20vw] bg-red-400 rounded-xl sticky top-20 left-100 overflow-hidden">
          <img className='w-full h-full object-cover' src="/k72_teamMembers/Carl_480x640.jpg" alt="Person 1" />
        </div>
        <div className="agenceLanding-texts w-full h-fit flex flex-col justitfy-center items-center gap-6 relative">
          <div className="agenceLanding-headerText w-full h-fit flex flex-col justify-center items-center">
            <h1 className='w-fit h-fit text-[20vw] text-black text-center leading-[16vw] tracking-tight font-bold'>
              SEVEN7Y
            </h1>
            <h1 className='w-fit h-fit text-[20vw] text-black text-center leading-[16vw] tracking-tight font-bold'>
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
