import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

function Swipeit() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      freeMode={true}
      pagination={{
        type: 'progressbar',
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
    >
      <SwiperSlide className='h-[400px] flex flex-col bg-blue-200'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
      <SwiperSlide className='h-[400px] flex flex-col items-center bg-blue-200 justify-center'>
        <img src="https://images.pexels.com/photos/19168627/pexels-photo-19168627/free-photo-of-a-balcony-with-flowers-on-it-and-a-balcony-with-a-balcony.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Book Cover"
          className='h-[350px] w-full'
        />
        <div className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>View Details</div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Swipeit