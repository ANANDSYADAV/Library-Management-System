import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

function Swipeit({ category }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(category)}&limit=50`);
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        const data = await response.json();
        setBooks(data.docs); // Set the fetched book details to the state
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookDetails();
  }, [category]); // Dependency on category to fetch books when category changes

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
      {books
        .filter(book => book.cover_i !== undefined)
        .map((book, index) => (
          <SwiperSlide key={index} className='h-[400px] flex flex-col bg-blue-200'>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
              alt="Book Cover"
              className='h-[350px] w-full'
            />
            <Link to={`/book/${encodeURIComponent(book.key)}`} className='h-[50px] w-full flex justify-center items-center cursor-pointer hover:bg-black hover:text-white'>
              {book.title}
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default Swipeit;