import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { TfiClose } from 'react-icons/tfi';
import { motion } from 'framer-motion';
import Head from 'next/head';
import logo from "../public/assets/gallery/logo.png";
import { Footer } from './Footer';
import Image from 'next/image';

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: 100 },
};

export const Layout = ({ children, title }) => {
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
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	return (
    <>
      <div className='flex flex-col'>
        <header className='bg-black text-white'>
          <nav
            className={`flex justify-between items-center lg:max-w-5xl md:max-w-3xl mx-auto py-5 px-5 z-30 ${
              active ? "text-white" : ""
            }`}
          >
            <Link href={"/#home"} className='sm:text-lg font-bold z-30 flex items-center'>
              <Image
                src={logo}
                width={40}
                alt='Header'
                className='mx-1'
                priority
              />
              THE TOTAL YOUTHS CHURCH
            </Link>

            <div className='hidden md:flex space-x-6 uppercase'>
              <Link href={"/#home"} className='btnse'>
                Home
              </Link>
              <Link href={"events"} className='btnse'>
                Events
              </Link>
              <Link href={"gallery"} className='btnse'>
                Gallery
              </Link>
              <Link href={"/#contact"} className='btnse'>
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

          {active && (
            <>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={list}
                ref={wrapperRef}
                className='fixed top-0 bottom-0 left-0 right-0 bg-[#81BFCB] pb-5 md:hidden flex flex-col space-y-8 uppercase items-center justify-center z-20 font-semibold'
              >
                <motion.div variants={item}>
                  <Link
                    href={"/#home"}
                    onClick={() => setActive(!active)}
                    className={`btnse !text-white text-2xl`}
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div variants={item}>
                  <Link
                    href={"events"}
                    onClick={() => setActive(!active)}
                    className={`btnse !text-white text-2xl`}
                  >
                    Events
                  </Link>
                </motion.div>

                <motion.div variants={item}>
                  <Link
                    href={"/gallery"}
                    onClick={() => setActive(!active)}
                    className={`btnse !text-white text-2xl`}
                  >
                    Gallery
                  </Link>
                </motion.div>

                <motion.div variants={item}>
                  <Link
                    href={"/#contact"}
                    onClick={() => setActive(!active)}
                    className={`btnse !text-white text-2xl`}
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.div>
            </>
          )}
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
