import { FaBookOpen, FaUser } from "react-icons/fa";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { selectCurrentUser, logout } from '../assets/redux/HomeSlice';
import { jwtDecode } from "jwt-decode";

function Header() {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = localStorage.getItem('Token');

    // useEffect(() => {
    //     const token = localStorage.getItem('Token');
    //     if (token) {
    //         const decodedToken = jwtDecode(token);
    //         if (decodedToken.exp * 1000 < new Date().getTime()) {
    //             handleLogout();
    //         }
    //     } else {
    //         const profile = JSON.parse(localStorage.getItem("Profile"));
    //         if (profile) {
    //             dispatch(login(profile)); // Dispatch login action to set the current user
    //         }
    //     }
    // }, [currentUser?.token, dispatch, navigate]); // Include currentUser?.token in the dependency array

    const handleLogout = () => {
        localStorage.removeItem('Token');
        navigate("/");
    };

    return (
        <nav className='h-[80px] w-full py-3 px-10 flex bg-amber-300 items-center'>
            <Link to='/'>
                <div className='flex gap-1 items-center hover:cursor-pointer'>
                    <div className='text-gray-700 text-4xl'><FaBookOpen /></div>
                    <div className='text-3xl font-semibold font-mono'>OpenLib.com</div>
                </div>
            </Link>
            <div className="flex gap-10 items-center absolute right-10 font-semibold font-serif text-2xl">
                {token ? ( // Check if currentUser exists
                    <>
                        <Link to={`/user/${currentUser?.result?._id}`}>
                            <div className="bg-red-500 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer">
                                <FaUser />
                            </div>
                        </Link>
                        <div className="font-semibold font-serif hover:text-teal-400 cursor-pointer" onClick={handleLogout}>logout</div>
                    </>
                ) : (
                    <>
                        <Link to='/login'>
                            <div className="font-semibold font-serif hover:text-teal-400 cursor-pointer">login</div>
                        </Link>
                        <Link to='/signup'>
                            <div className="flex bg-neutral-700 h-10 w-[100px] text-white justify-center items-center rounded-lg hover:text-teal-400 cursor-pointer">signup</div>
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Header;
