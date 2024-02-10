import { MdChangeCircle } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useState } from "react";

function BookDetail() {
    const [book, setbook] = useState({});
    const [authorid, setAuthorId] = useState(null);
    const  [authorName, setauthorName] = useState("");
    const { bookid, coverid } = useParams();

    const bookData = async () => {
        const response = await fetch(`https://openlibrary.org${bookid}.json`);
        const data = await response.json();
        console.log(data);
        setbook(data);
        setAuthorId(data?.authors?.[0]?.author?.key);
    }
    const authorData = async () => {
        const response = await fetch(`https://openlibrary.org${authorid}.json`);
        const data = await response.json();
        setauthorName(data?.name);
    }
    bookData();
    authorData();

    return (
        <div className='flex flex-col items-center'>
            <div>
                <div className='flex w-[90%] justify-center mt-12'>
                    <div className='h-[500px] w-[300px]'>
                        <img
<<<<<<< HEAD
                            src={`https://covers.openlibrary.org/b/id/${coverid}-L.jpg`}
=======
                            src={`https://covers.openlibrary.org/b/id/${bookDetails.covers[0]}-L.jpg`}
>>>>>>> f678c674ecfff1f03b7adb418c4888fc397a607b
                            alt="Cover Page"
                            style={{ overflow: "hidden" }}
                            onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
                            onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
                        />
                    </div>
                    <div className='flex flex-col w-[50%] gap-5 ml-7'>
                        <div className='flex flex-col items-center gap-3'>
<<<<<<< HEAD
                            <div className='text-4xl font-bold'>{book?.title}</div>
                            <div className='text-2xl'>{authorName}</div>
                        </div>
                        <div>
                            {book?.description?.value}
=======
                            <div className='text-4xl font-bold'>{bookDetails.title}</div>
                            {bookDetails.authors && bookDetails.authors.length > 0 && <div className='text-2xl'>by {bookDetails.authors[0].author.key}</div>}
                            <div>RATINGS 10/10</div>
                        </div>
                        <div>
                            {bookDetails.description}
>>>>>>> f678c674ecfff1f03b7adb418c4888fc397a607b
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-gray-600 rounded-lg w-[50%] m-auto' />

                <div className='flex justify-center items-center gap-[80px] text-3xl font-semibold h-[100px] w-[80%] m-auto'>

                    <div className='flex flex-col gap-1 items-center'>
<<<<<<< HEAD
                        <MdChangeCircle />
                        <div className='text-xl'>{book?.last_modified?.value?.slice(0, 4)}</div>
=======
                        <FaBook />
                        <div className='text-xl'>{bookDetails.number_of_pages} Pages</div>
>>>>>>> f678c674ecfff1f03b7adb418c4888fc397a607b
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <IoLanguage />
                        <div className='text-xl'>{bookDetails.language}</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <BiSolidCategoryAlt />
<<<<<<< HEAD
                        <div className='text-xl'>{book?.subjects?.[0]}</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <SlCalender />
                        <div className='text-xl'>{book?.first_publish_date}</div>
=======
                        <div className='text-xl'>{bookDetails.subjects && bookDetails.subjects.length > 0 ? bookDetails.subjects[0] : 'No category'}</div>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <SlCalender />
                        <div className='text-xl'>{bookDetails.first_publish_date}</div>
>>>>>>> f678c674ecfff1f03b7adb418c4888fc397a607b
                    </div>

                </div>

                <div className='border-b-2 border-gray-600 rounded-lg w-[50%] m-auto' />
            </div>

            <button className='bg-neutral-400 w-[150px] py-2 my-5 text-xl font-serif font-semibold rounded-sm hover:rounded-3xl'>Borrow</button>
        </div>
    )
}

export default BookDetail;
