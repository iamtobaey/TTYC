import Image from 'next/image';
import kids from '../public/assets/kids.jpg';

export const Kids = () => {
	return (
    <div className='min-h-[35vh] sm:min-h-[40vh] relative text-white'>
      <Image
        src={kids}
        alt=''
        className='h-[35vh] sm:h-[40vh] w-[100vw] object-cover'
      />

      <div className='absolute top-0 bg-orange-700/70 h-full w-full'>
        <div className='max-w-[12rem] sm:max-w-xs lg:max-w-lg ml-5 sm:ml-10 lg:ml-28 h-full flex flex-col justify-center space-y-5 items-center'>
          <h1 className='font-bold uppercase text-xl md:text-4xl'>Teenagers</h1>

          <p className='text-gray-100 text-sm text-center'>
            At TTYC, we're passionate about teenagers! Our dedicated pastors are
            equipped with deep knowledge of the Word of God and are committed to
            guiding teenagers aged 13-19 on their spiritual journey.
          </p>
        </div>
      </div>
    </div>
  );
};
