import BookCard from '../components/BookCard'
import { RiVerifiedBadgeFill } from 'react-icons/ri'

function AuthorDetail() {
    return (
        <div className='w-[80%] mx-auto mt-10'>
            <div className='flex gap-10 items-center'>
                <img src="https://images.pexels.com/photos/13792831/pexels-photo-13792831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Author"
                    className='w-[200px] h-[200px] rounded-full'
                />
                <div className='flex flex-col gap-1'>
                    <div className='text-5xl font-serif font-extrabold'>Author Name</div>
                    <div className='flex gap-2 items-center text-4xl'>
                        <RiVerifiedBadgeFill className='bg-white text-red-900' />
                        <div className='text-red-800 text-xl border-2 text-center w-[80px] border-red-800 rounded-lg'>Verified</div>
                    </div>
                </div>
            </div>

            <div className='border-b-2 border-green-700 rounded-lg w-[100%] mt-10' />

            <div className='my-5 flex flex-col gap-2 font-mono'>
                <div className='text-xl font-semibold'>ABOUT THE AUTHOR</div>
                <p>Courtney Milan writes books about carriages, corsets, and smartwatches. Her books have received starred reviews in Publishers Weekly, Library Journal, and Booklist. She is a New York Times and a USA Today Bestseller.

                    Courtney pens a weekly newsletter about tea, books, and basically anything and everything else.

                    Before she started writing romance, Courtney got a graduate degree in theoretical physical chemistry from UC Berkeley. After that, just to shake things up, she went to law school at the University of Michigan and graduated summa cum laude. Then she did a handful of clerkships. She was a law professor for a while. She now writes full-time.

                    Courtney is represented by Kristin Nelson of the Nelson Literary Agency.</p>
            </div>

            <div className='border-b-2 border-green-700 rounded-lg w-[100%] mt-10' />

            <div className='my-12 flex flex-col gap-8'>
                <div className='text-2xl font-extrabold'>Books by Author Name</div>
                <div className='flex gap-5'>
                    <BookCard />
                    <BookCard />
                    <BookCard />
                    <BookCard />
                </div>
            </div>
            {/* https://edit.org/images/cat/book-covers-big-2019101610.jpg */}
        </div>
    )
}

export default AuthorDetail