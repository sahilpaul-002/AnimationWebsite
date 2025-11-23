import React from 'react'
import { Link } from 'react-router'

export default function HomeBottomNavigation() {
  return (
    <div className='navigationLinkButtons-wrapper w-fit h-fit p-1 flex justify-center items-center gap-5'>
        <Link className="navigationLink1 w-fit h-fit" to="/projects">
            <button className='navigationLinkButton1 w-[30vw] h-[7.5vw] px-2 py-1 border-6 border-white hover:border-[#a0dc14] hover:text-[#a0dc14] rounded-full text-[6vw] text-white font-semibold bg- flex justify-center items-center'>
                PROJECTS
            </button>
        </Link>
        <Link className="navigationLink2 w-fit h-fit" to="/agence">
            <button className='navigationLinkButton1 w-[30vw] h-[7.5vw] px-2 py-1 border-6 border-white hover:border-[#a0dc14] hover:text-[#a0dc14] rounded-full text-[6vw] text-white font-semibold flex justify-center items-center'>
                AGENCE
            </button>
        </Link>
    </div>
  )
}
