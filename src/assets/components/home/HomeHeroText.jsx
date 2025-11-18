import React from 'react'
import Video from "./Video";

export default function HomeHeroText() {
    return (
        <div className='homeHeroText-wrapper w-fit h-fit p-2 text-[12vw] leading-[10vw] flex flex-col justif-start items-center'>
            <span className="text1">
                THE SPARKS FOR
            </span>
            <span className="text2 flex justify-center items-center gap-2">
                <span>ALL</span>
                <div className="smallVedioInHeroText w-[16vw] h-[8.5vw] mt-[1.5vw] rounded-full overflow-hidden">
                    <Video />
                </div>
                <span>THINGS</span>
            </span>
            <span className="text3">
                CREATIVE
            </span>
        </div>
    )
}
