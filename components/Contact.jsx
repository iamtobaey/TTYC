import { ImLocation, ImPhone } from "react-icons/im";
import { MdAccessTime } from "react-icons/md";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaPodcast,
} from "react-icons/fa";
import { motion } from "framer-motion";
import getInTouch from "../public/assets/getintouch.jpg";
import Image from "next/image";
import { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const Contact = () => {
  const [lng, setLng] = useState(7.072564);
  const [lat, setLat] = useState(8.945622);

  return (
    <div className='w-full lg:grid lg:grid-cols-6 space-y-10 lg:space-y-0'>
      <div className='relative h-full w-full col-span-2'>
        <Image
          src={getInTouch}
          alt='Get In Touch'
          className='w-full h-[40vh] sm:h-[44vh] object-cover'
        />

        <div className='absolute top-0 flex flex-col items-center justify-center h-full w-full'>
          <div className='text-center bg-gray-500/50 w-full py-5 text-white font-bold text-2xl'>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='uppercase'
            >
              Contact Us
            </motion.p>
            <h1 className='text-sm font-normal'>
              We will love to hear from you
            </h1>
          </div>
        </div>
      </div>

      <div className='lg:col-span-2 flex flex-col items-center justify-center space-y-10  text-gray-900'>
        <div className='space-y-2 font-semibold'>
          <p className='flex items-center text-sm'>
            <span>
              <ImLocation className='w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-amber-400' />
            </span>
            Along Specialist Road, Gwagwalada, Abuja, NGA
          </p>

          <p className='flex items-center text-sm'>
            <span>
              <ImPhone className='w-4 h-4 sm:h-4 sm:w-5 mr-1 sm:mr-2 text-amber-400' />
            </span>
            025 713 6081 | 025 718 1311
          </p>

          <p className='flex items-center text-sm'>
            <span>
              <MdAccessTime className='w-4 h-5 sm:w-5 mr-1 sm:mr-2 text-amber-400' />
            </span>
            Main Service: Sundays 1:30pm
          </p>
        </div>

        <div className='space-y-2'>
          <p className='font-bold text-center py-2'>Social Media</p>

          <span className='flex space-x-3 sm:space-x-5 text-amber-400'>
            <a href='https://www.facebook.com'>
              <FaFacebook className='w-5 h-5 hover:text-slate-500' />
            </a>
            <a href='https://twitter.com'>
              <FaTwitter className='w-5 h-5 hover:text-slate-500' />
            </a>
            <a href='https://www.linkedin.com'>
              <FaLinkedin className='w-5 h-5 hover:text-slate-500' />
            </a>
            <a href='https://www.youtube.com'>
              <FaYoutube className='w-5 h-5 hover:text-slate-500' />
            </a>
            <a href='https://www.instagram.com'>
              <FaInstagram className='w-5 h-5 hover:text-slate-500' />
            </a>
            <a href='https://www.podcast.com'>
              <FaPodcast className='w-5 h-5 hover:text-slate-500' />
            </a>
          </span>
        </div>
      </div>

      <div className='lg:col-span-2 h-[40vh] sm:h-[44vh] flex justify-center lg:justify-end'>
        <Map
          mapboxAccessToken='pk.eyJ1IjoibnVtb2ZyYW42IiwiYSI6ImNsZGRiZWFqNzAxaHYzdnJzZGsxMG5uankifQ.kKG8lHf3En9AwmENBOVmfQ'
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 12,
          }}
          style={{ width: "100%" }}
          mapStyle='mapbox://styles/mapbox/streets-v9'
        >
          <Marker longitude={lng} latitude={lat} />
          <NavigationControl position='bottom-right' />
          <FullscreenControl />
          <GeolocateControl />
        </Map>
      </div>
    </div>
  );
};
