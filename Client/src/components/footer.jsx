import { FiMail, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Book Categories */}
                        <div className="ml-10">
                            <h3 className="text-lg font-semibold mb-2">Book Categories</h3>
                            <ul>
                                <li><a href="#">Fiction</a></li>
                                <li><a href="#">Non-fiction</a></li>
                                <li><a href="#">Science Fiction</a></li>
                                <li><a href="#">Mystery</a></li>
                                <li><a href="#">Thriller</a></li>
                            </ul>
                        </div>

                        {/* About Us */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">About Us</h3>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Mission & Vision</a></li>
                                <li><Link to="/team">Team</Link></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className='flex flex-col gap-2'>
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <div className="flex items-center">
                                <div className="icon mr-3">
                                    <FiMail />
                                </div>
                                <div className="email pr-5">Email</div>
                                <div className="em1">
                                    <a href="mailto:karanrajgodansa2003@gmail.com" className="text-white-600 hover:underline">
                                        karanrajgodansa2003@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="icon mr-3">
                                    <FiPhone />
                                </div>
                                <div className="phone pr-2">Phone</div>
                                <div className="text">+917737606697</div>
                            </div>
                            <div className="flex items-center">
                                <div className="icon mr-3">
                                    <FiMail />
                                </div>
                                <div className="email pr-5">Email</div>
                                <div className="em1">
                                    <a href="mailto:anandyad2004@gmail.com" className="text-white-600 hover:underline">
                                        anandyad2004@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="icon mr-3">
                                    <FiPhone />
                                </div>
                                <div className="phone pr-2">Phone</div>
                                <div className="text">+918528564602</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Information */}
            <div className="flex justify-center items-center h-[50px] mt-0 bg-black">
                <div className="">
                    <p className='text-white'>&copy; {new Date().getFullYear()} &nbsp; OpenLib.com</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
