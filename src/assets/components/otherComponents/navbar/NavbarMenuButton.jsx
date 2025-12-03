import React, { useEffect } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function NavbarMenuButton(props) {
    // Destructure props
    const { showNavbarMenuButton, setShowNavbarMenuButton, setShowNavbarMenu } = props;

    // Register gsap
    gsap.registerPlugin(useGSAP);

    // GSAP function to display the navbarMenuButton on hover
    useGSAP(() => {
        if (showNavbarMenuButton) {
            gsap.fromTo(".navbarMenuButton-container", {
                scaleX: 0,
                transformOrigin: "right center"
            },
                {
                    scaleX: 1,
                    duration: 0.6,
                })
        }
        else {
            gsap.to(".navbarMenuButton-container", {
                scaleX: 0,
                transformOrigin: "right center",
                duration: 0.6,
            })
        }
    }, [showNavbarMenuButton])

    return (
        <div className="navbarMenuButton-container w-30 h-full px-4 rounded-l-full bg-black flex justify-end items-center absolute top-0 right-0 overflow-hidden">
            <button className='navbarMenuButton w-16 h-full py-0.5 px-2 flex flex-col justify-center items-end gap-1 cursor-pointer' onClick={(e) => {
                e.stopPropagation();  // <--- prevents unwanted closing
                setShowNavbarMenuButton(prev => !prev);
                setShowNavbarMenu(true); // <--- Show the navbar menu
            }}
            >
                <div className="navbarMenuButton-line1 w-10 sm:w-12 h-1 sm:h-1.5 bg-white rounded-full"></div>
                <div className="navbarMenuButton-line1 w-7 sm:w-9 h-1 sm:h-1.5 bg-white rounded-full"></div>
                <div className="navbarMenuButton-line1 w-4 sm:w-6 h-1 sm:h-1.5 bg-white rounded-full"></div>
            </button>
        </div>
    )
}
