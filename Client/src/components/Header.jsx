import { FaBookOpen } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function Header() {
    return (
        <nav className='h-[80px] w-full py-3 px-10 flex bg-amber-300 items-center'>
            <div className='flex gap-1 items-center hover:cursor-pointer'>
                <div className='text-gray-700 text-4xl'><FaBookOpen /></div>
                <div className='text-3xl font-semibold font-mono'>OpenLib.com</div>
            </div>
            <div className="flex gap-10 items-center absolute right-10 font-semibold font-serif text-2xl">
                <div className="font-semibold font-serif hover:text-teal-400 cursor-pointer">login</div>
                <div className=" flex bg-neutral-700 h-10 w-[100px] text-white justify-center items-center rounded-lg hover:text-teal-400 cursor-pointer">signup</div>
                <div className="bg-red-500 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
                    <FaUser />
                </div>
            </div>
        </nav>
    )
}

export default Header