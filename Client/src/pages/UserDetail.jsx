import { FaUser } from "react-icons/fa";
import { TbListNumbers } from "react-icons/tb";
import { BiRegistered } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";

const books = [
    { bookName: "Hero of Life", Borrow: "02/02/2024", Fine: 0 },
    { bookName: "Lesson Life", Borrow: "02/01/2024", Fine: 0 }
]

function UserDetail() {
    let index = 0;

    return (
        <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
            <div className='w-[80%] h-full flex flex-col items-center py-5 text-xl'>
                <div className='flex flex-col gap-10'>
                    <img src="https://images.pexels.com/photos/19740693/pexels-photo-19740693/free-photo-of-me.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Image"
                        className='rounded-full h-[250px] w-[250px] border-gray-300 border-[10px]'
                    />
                    <div className='flex flex-col items-start'>
                        <span className="flex gap-2 items-center"><FaUser /> USER NAME</span>
                        <span className="flex gap-2 items-center"><IoIosMail /> USER EMAIL</span>
                        <span className="flex gap-2 items-center"><BiRegistered /> USER ENROLLMENT</span>
                        <span className="flex gap-2 items-center"><TbListNumbers /> USER REGISTRATION</span>
                        <span className="flex gap-2 items-center"><FcDepartment /> USER DEPRATMENT</span>
                        <span className="flex gap-2 items-center"><MdDateRange /> USER YEAR</span>
                    </div>
                </div>
                <div className="py-10 flex flex-col w-full">
                    <div className="font-serif font-semibold">Borrowed Books</div>

                    <table>
                        <tr className="bg-blue-600 h-10 text-center">
                            <th>#</th>
                            <th>Book</th>
                            <th>Borrowed On</th>
                            <th>Fine</th>
                        </tr>

                        {books.map((item) => {
                            index++;
                            return (
                                <tr className="bg-green-400 h-10 items-center" key={index}>
                                    <td className="text-center">{index}</td>
                                    <td className="text-center">{item.bookName}</td>
                                    <td className="text-center">{item.Borrow}</td>
                                    <td className="text-center">{item.Fine}</td>
                                </tr>
                            )
                        })}

                    </table>

                </div>
            </div>
        </div>
    )
}

export default UserDetail