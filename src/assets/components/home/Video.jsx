import React from 'react'

export default function Video() {
  return (
    <div className='w-full h-full'>
        <video className="w-full h-full object-cover" src="/homeVideo.mp4" autoPlay loop muted />
    </div>
  )
}
