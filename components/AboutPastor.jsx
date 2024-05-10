import Image from "next/image";

export const AboutPastor = () => {
  return (
    <div className='min-h-[45vh] md:min-h-[40vh] relative bg-stone-800 text-white'>
      <Image
        src={"/assets/gallery/148b.jpg"}
        width={1200}
        height={400}
        alt=''
        className='saturate-0 h-[45vh] md:h-[40vh] w-[100vw] object-cover '
      />

      <div className='absolute top-0 h-full w-full text-right '>
        <div className='ml-5 sm:ml-10 lg:ml-28 max-w-[12rem] sm:max-w-xs lg:max-w-lg h-full flex flex-col justify-center space-y-5 items-center'>
          <h1 className='font-bold uppercase text-lg sm:text-xl md:text-2xl'>
            Join the Movement
          </h1>

          {/* <p className='text-amber-500 text-sm'>Get Involved</p> */}

          <p className='text-gray-200 text-sm sm:text-md text-center'>
            Find out how you can get involved with TTYC, whether through
            volunteering, donating, or attending our events and gatherings.
          </p>

          <button className='btns'>Get Involved</button>
        </div>
      </div>
    </div>
  );
};
