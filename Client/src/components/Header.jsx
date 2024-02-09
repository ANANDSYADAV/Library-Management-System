import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className='h-[80px] w-full py-3 px-10 flex bg-amber-300 items-center'>
            <Link to='/'>
                <div className='flex gap-1 items-center hover:cursor-pointer'>
                    <div className='text-gray-700 text-4xl'><FaBookOpen /></div>
                    <div className='text-3xl font-semibold font-mono'>OpenLib.com</div>
                </div>
            </Link>
            <div className="flex gap-10 items-center absolute right-10 font-semibold font-serif text-2xl">
                <Link to='/login'>
                    <div className="font-semibold font-serif hover:text-teal-400 cursor-pointer">login</div>
                </Link>
                <Link to='/signup'>
                    <div className=" flex bg-neutral-700 h-10 w-[100px] text-white justify-center items-center rounded-lg hover:text-teal-400 cursor-pointer">signup</div>
                </Link>
                <Link to='/user/1'>
                    <div className="bg-red-500 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
                        <FaUser />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header