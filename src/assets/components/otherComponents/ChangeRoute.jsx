import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ChangeRoute() {
    // Register gsap plugins
    gsap.registerPlugin(useGSAP);

    // Ref to store the change route container
    const changeRouteContainerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".changeRoutePage-animationBlocks",
            {
                height: 0,
                onStart: () => {
                    // Change the display to flex to reveal the change route component
                    changeRouteContainerRef.current.style.display = "block";
                }
            },
            {
                height: "100vh",
                stagger: { amount: -0.4 },
                duration: 0.7,
                onComplete: () => {
                    // Remove the background color to reveal the new page
                    changeRouteContainerRef.current.style.backgroundColor = "transparent";
                }
            }
        );

        tl.to(".changeRoutePage-animationBlocks", {
            y: "100%",
            stagger: { amount: -0.4 },
            duration: 0.7,
            // onComplete: () => {
            //     // Remove the change route component from the DOM
            //     changeRouteContainerRef.current.style.display = "none";
            // }
        }).then(() => {
            // Remove the change route component from the DOM
            changeRouteContainerRef.current.style.display = "none";
        });
    }, []);

    return (
        // Display will change to flex from hidden on animation start
        <div className='changeRoutePage-container w-screen h-screen bg-white flex fixed z-1000 top-0 left-0 overflow-hidden' ref={changeRouteContainerRef}>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
            <div className="changeRoutePage-animationBlocks w-[20vw] h-full bg-black"></div>
        </div>
    )
}

