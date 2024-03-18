import { FaUser } from "react-icons/fa";
import { TbListNumbers } from "react-icons/tb";
import { BiRegistered } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FcDepartment } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { useSelector } from 'react-redux';

function UserDetail() {
    const { user } = useSelector((state) => state.currentUserReducer);

    return (
        <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
            <div className='w-[80%] h-full flex flex-col items-center py-5 text-xl'>
                <div className='flex flex-col gap-10'>
                    <img src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" alt="Profile Image"
                        className='rounded-full h-[250px] w-[250px] border-gray-300 border-[10px]'
                    />
                    <div className='flex flex-col items-start'>
                        <span className="flex gap-2 items-center"><FaUser /> {user.result.name} </span>
                        <span className="flex gap-2 items-center"><IoIosMail /> {user.result.email} </span>
                        <span className="flex gap-2 items-center"><BiRegistered /> {user.result.enrollment} </span>
                        <span className="flex gap-2 items-center"><TbListNumbers /> {user.result.registration} </span>
                        <span className="flex gap-2 items-center"><FcDepartment /> {user.result.department} </span>
                        <span className="flex gap-2 items-center"><MdDateRange /> {user.result.year} </span>
                    </div>
                </div>
                <div className="py-10 flex flex-col w-full">
                    <div className="font-serif font-semibold">Borrowed Books</div>

                    <table>
                        <tr className="bg-blue-600 h-10 text-center">
                            <th>#</th>
                            <th>Book</th>
                            {/* <th>Borrowed On</th> */}
                            <th>Fine</th>
                        </tr>

                        {user.result.booksBorrowed.map((item, index) => {
                            index++;
                            return (
                                <tr className="bg-green-400 h-10 items-center" key={index}>
                                    <td className="text-center">{index}</td>
                                    <td className="text-center">{item}</td>
                                    {/* <td className="text-center">{}</td> */}
                                    {/* <td className="text-center">{item.Borrow}</td> */}
                                    <td className="text-center">{0}</td>
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