import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../public/assets/gallery/logo.png";
import sky from "../public/assets/gallery/132a.jpg";
import { motion } from "framer-motion";
import { RiMenu4Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100 },
};

export const Header = () => {
  const [active, setActive] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className='h-[50vh] sm:h-[70vh] w-[100vw] sm:w-full relative'>
      <Image
        src={sky}
        width={3950}
        height={4937}
        alt='Header'
        className='saturate-0 w-[100vw] h-[50vh] sm:h-[70vh] object-cover'
        priority
      />

      <div className='absolute top-0 w-full text-white z-10'>
        <div className='bg-black-600/10'>
          <nav
            className={`flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5 z-30 ${
              active ? "bg-[#81BFCB] text-white" : ""
            }`}
          >
            <Link href={"#home"} className='sm:text-lg font-bold z-30 flex items-center'>
              <Image src={logo} width={40} alt='Header' className='mx-1' priority />
              THE TOTAL YOUTHS CHURCH
            </Link>

            <div className='hidden md:flex space-x-6 uppercase'>
              <Link href={"#home"} className='navlinks'>
                Home
              </Link>
              <Link href={"events"} className='navlinks'>
                Events
              </Link>
              <Link href={"gallery"} className='navlinks'>
                Gallery
              </Link>
              <Link href={"#contact"} className='navlinks'>
                Contact
              </Link>
            </div>

            <div className='md:hidden z-30'>
              {!active && (
                <RiMenu4Line
                  onClick={() => setActive(!active)}
                  className='w-8 h-8'
                />
              )}
              {active && (
                <TfiClose
                  onClick={() => setActive(!active)}
                  className='w-5 h-5'
                />
              )}
            </div>
          </nav>
        </div>
      </div>

      <div className='absolute top-0 h-full w-full text-white'>
        <div className='h-full relative flex flex-col justify-center items-center space-y-5'>
          <h2 className='font-medium text-lg sm:text-[2rem] md-text lg text-amber-400 px-4 text-center'>
            Welcome to The Total Youth Church (TTYC)
          </h2>

          <div className='space-y-1 px-8 text-center text-[1rem] leading-[1rem] sm:leading-none md:text-sm lg:text-lg'>
            <h2 className='lg:px-8'>
              Join us in cultivating a generation of Total Youths, spiritually
              rooted, emotionally grounded ready to make a difference.
            </h2>
            <h2 className=''>
              Discover Christ-likeness in all things, Where Balance Meets
              Purpose.
            </h2>
          </div>

          {active && (
            <>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={list}
                ref={wrapperRef}
                className='fixed top-8 bottom-0 right-0 left-0 bg-[#000000] md:hidden flex flex-col space-y-5 uppercase items-center justify-center font-semibold z-20'
              >
                <motion.div variants={item}>
                  <Link
                    href={"#home"}
                    onClick={() => setActive(!active)}
                    className='btns !text-white text-2xl'
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div variants={item}>
                  <Link
                    href={"events"}
                    onClick={() => setActive(!active)}
                    className='btns !text-white text-2xl'
                  >
                    Events
                  </Link>
                </motion.div>

                <motion.div variants={item}>
                  <Link
                    href={"gallery"}
                    onClick={() => setActive(!active)}
                    className='btns !text-white text-2xl'
                  >
                    Gallery
                  </Link>
                </motion.div>

                <motion.div variants={item}>
                  <Link
                    href={"#contact"}
                    onClick={() => setActive(!active)}
                    className='btns !text-white text-2xl'
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
