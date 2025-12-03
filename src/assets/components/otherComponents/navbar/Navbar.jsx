import React, { useState, useRef, useEffect } from 'react'
import NavbarMenuButton from './NavbarMenuButton'
import NavbarMenu from './NavbarMenu';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  // Register gsap
  gsap.registerPlugin(useGSAP);

  // -------------------------------------- Log to display the navbarMenuButton -------------------------------------- \\
  // Ref to store the navbarMenuButtonWrapper
  const navbarMenuButtonWrapperRef = useRef(null);

  // State to amange the visibility of the navbar menu button
  const [showNavbarMenuButton, setShowNavbarMenuButton] = useState(false);

  // UseEffect to close the navbar menu button on clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showNavbarMenuButton &&
        navbarMenuButtonWrapperRef.current &&
        !navbarMenuButtonWrapperRef.current.contains(event.target)
      ) {
        setShowNavbarMenuButton(false);
      }
    }

    // document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("click", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showNavbarMenuButton]);

  // Detect touch devices (Used for mobile devices)
  const isTouch = 'ontouchstart' in window

  // ---------------------------------------------- xxxxxxxxxxxxxxxxxxxxxxxxx ---------------------------------------------- \\

  // ------------------------------------------ Logic to display the navbar menu ------------------------------------------ \\
  // State to manage the visibility of navbar menu
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  // GSAP function for animation to navbar menu display
  useGSAP(() => {
    if (showNavbarMenu) {
      gsap.fromTo(".navbarMenu-wraper",
        {
          yPercent: -100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "easeOut",
        }
      )
    }
    else {
      gsap.to(".navbarMenu-wraper", {
        yPercent: -100,
        duration: 0.8,
        ease: "easeOut",
      })
    }
  }, [showNavbarMenu]);

  return (
    <>
      <div className='navbar-container w-screen h-8 sm:h-10 flex justify-end fixed top-0 left-0 z-600'>
        <div ref={navbarMenuButtonWrapperRef} className={`navbarMenuButton-wrapper w-8 sm:w-10 h-full bg-black  ${!showNavbarMenuButton ? "opacity-70" : "opacity-100"} rounded-l-full relative`}
          {...(!isTouch
            ? {
              onMouseEnter: () => setShowNavbarMenuButton(true),
              onMouseLeave: () => setShowNavbarMenuButton(false)
            }
            : {
              onClick: () => setShowNavbarMenuButton(prev => !prev)
            })
          }
        >
          <NavbarMenuButton showNavbarMenuButton={showNavbarMenuButton} setShowNavbarMenuButton={setShowNavbarMenuButton} setShowNavbarMenu={setShowNavbarMenu} />
        </div>
      </div>

      {showNavbarMenu && (
        <div className="navbarMenu-wraper fixed top-0 left-0 w-screen h-screen z-700">
          <NavbarMenu />
        </div>
      )}
    </>
  );
}
