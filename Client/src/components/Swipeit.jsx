import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import SkeletonHome from './SkeletonHome';

import { useSelector } from 'react-redux'

export function SwipeCS() {
  const { ComputerScience, loading } = useSelector((state) => state.HomeReducer);

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

      {loading !== false ?
        (
          <SkeletonHome />
        )
        :
        (
          ComputerScience
            .filter(book => book.cover_i !== undefined)
            .map((book, index) => (
              <SwiperSlide key={index} className='h-[400px] flex flex-col bg-blue-200'>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt="Book Cover"
                  className='h-[350px] w-full'
                />
                <Link to={`/book/${encodeURIComponent(book.key)}/${encodeURIComponent(book.cover_i)}`} className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>
                  {book.title}
                </Link>
              </SwiperSlide>
            ))
        )
      }
    </Swiper>
  );
}

export function SwipeFiction() {
  const { Fiction, loading } = useSelector((state) => state.HomeReducer);

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

      {
        loading === false ?
          (
            Fiction
              .filter(book => book.cover_i !== undefined)
              .map((book, index) => (
                <SwiperSlide key={index} className='h-[400px] flex flex-col bg-blue-200'>
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                    alt="Book Cover"
                    className='h-[350px] w-full'
                  />
                  <Link to={`/book/${encodeURIComponent(book.key)}/${encodeURIComponent(book.cover_i)}`} className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>
                    {book.title}
                  </Link>
                </SwiperSlide>
              ))
          )
          :
          (
            <SkeletonHome />
          )
      }
    </Swiper>
  );
}

export function SwipeHealth() {
  const { Health, loading } = useSelector((state) => state.HomeReducer);

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

      {loading !== false ?
        (
          <SkeletonHome />
        )
        :
        (
          Health
            .filter(book => book.cover_i !== undefined)
            .map((book, index) => (
              <SwiperSlide key={index} className='h-[400px] flex flex-col bg-blue-200'>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt="Book Cover"
                  className='h-[350px] w-full'
                />
                <Link to={`/book/${encodeURIComponent(book.key)}/${encodeURIComponent(book.cover_i)}`} className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>
                  {book.title}
                </Link>
              </SwiperSlide>
            ))
        )
      }
    </Swiper>
  );
}

export function SwipeSports() {
  const { Sports, loading } = useSelector((state) => state.HomeReducer);

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

      {loading !== false ?
        (
          <SkeletonHome />
        )
        :
        (
          Sports
            .filter(book => book.cover_i !== undefined)
            .map((book, index) => (
              <SwiperSlide key={index} className='h-[400px] flex flex-col bg-blue-200'>
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt="Book Cover"
                  className='h-[350px] w-full'
                />
                <Link to={`/book/${encodeURIComponent(book.key)}/${encodeURIComponent(book.cover_i)}`} className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>
                  {book.title}
                </Link>
              </SwiperSlide>
            ))
        )
      }
    </Swiper>
  );
}