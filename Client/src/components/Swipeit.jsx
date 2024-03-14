import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import SkeletonHome from './SkeletonHome';

import { useDispatch, useSelector } from 'react-redux'

export function SwipeCS() {
<<<<<<< HEAD
  // const dispatch = useDispatch();
  // const [cS, setCS] = useState([]); 
  const ComputerScience = useSelector((state) => state.ComputerScience);
  // setCS(ComputerScience);
=======
  const dispatch = useDispatch();
  const ComputerScience = useSelector((state) => state.ComputerScience ?? []);
>>>>>>> 2e9b5d3b18bc4b1e4b03a7270cebc257fcdad44e

  

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

      {ComputerScience.length === 0 ?
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
<<<<<<< HEAD
  // const dispatch = useDispatch();
  const Fiction = useSelector((state) => state.Fiction);
=======
  const dispatch = useDispatch();
  const Fiction = useSelector((state) => state.Fiction ?? []);
>>>>>>> 2e9b5d3b18bc4b1e4b03a7270cebc257fcdad44e

  // useEffect(() => {
  //   dispatch(fetchFictionBooks('Fiction'));
  // });

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

      {Fiction.length === 0 ?
        (
          <SkeletonHome />
        )
        :
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
      }
    </Swiper>
  );
}

export function SwipeHealth() {
<<<<<<< HEAD
  // const dispatch = useDispatch();
  const Health = useSelector((state) => state.Health);
=======
  const dispatch = useDispatch();
  const Health = useSelector((state) => state.Health ?? []);
>>>>>>> 2e9b5d3b18bc4b1e4b03a7270cebc257fcdad44e

  // useEffect(() => {
  //   dispatch(fetchHealthBooks('Health'));
  // });

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

      {Health.length === 0 ?
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
<<<<<<< HEAD
  // const dispatch = useDispatch();
  const Sports = useSelector((state) => state.Sports);
=======
  const dispatch = useDispatch();
  const Sports = useSelector((state) => state.Sports ?? []);
>>>>>>> 2e9b5d3b18bc4b1e4b03a7270cebc257fcdad44e

  // useEffect(() => {
  //   dispatch(fetchSportsBooks('Sports'));
  // });

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

      {Sports.length === 0 ?
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