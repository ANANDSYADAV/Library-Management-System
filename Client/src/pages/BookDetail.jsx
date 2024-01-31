import React from 'react'
import { FaBook } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

function BookDetail() {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <div className='flex w-[90%] justify-center mt-12'>
                    <div className='h-[500px] w-[300px]'>
                        <img
                            src="https://images.pexels.com/photos/19601923/pexels-photo-19601923/free-photo-of-young-woman-wearing-an-ao-dai-dress-and-holding-a-fan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt="Cover Page"
                            style={{ overflow: "hidden" }}
                            onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
                            onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
                        />
                    </div>
                    <div className='flex flex-col w-[50%] gap-5 ml-7'>
                        <div className='flex flex-col items-center gap-3'>
                            <div className='text-4xl font-bold'>BOOK NAME</div>
                            <div className='text-2xl'>by AUTHOR NAME</div>
                            <div>RATINGS 10/10</div>
                        </div>
                        <div>
                            BOOK DESCRIPTION
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrial standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-gray-600 rounded-lg w-[50%] m-auto' />

                <div className='flex justify-center items-center gap-[80px] text-3xl font-semibold h-[100px] w-[80%] m-auto'>

                    <div className='flex flex-col gap-1 items-center'>
                        <FaBook />
                        <div className='text-xl'>200 Pages</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <IoLanguage />
                        <div className='text-xl'>English</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <FaBuilding />
                        <div className='text-xl'>Publication</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <SlCalender />
                        <div className='text-xl'>Publication Date</div>
                    </div>

                </div>

                <div className='border-b-2 border-gray-600 rounded-lg w-[50%] m-auto' />
            </div>

            <button className='bg-neutral-400 w-[150px] py-2 my-5 text-xl font-serif font-semibold rounded-sm hover:rounded-3xl'>Borrow</button>
        </div>
    )
}

export default BookDetail