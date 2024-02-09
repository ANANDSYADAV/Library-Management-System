import { MdError } from "react-icons/md";
import { Link } from "react-router-dom"; 

function Error() {
    return (
        <div className="bg-slate-300 flex flex-col items-center justify-center gap-3 h-[500px]">
            <MdError className="text-[200px] text-red-700"/>
            <div className="text-2xl">Oops! Page not found.</div>
            <div className="text-2xl">404</div>
            <p className="text-xl">We cannot find the page you are looking for.</p>
            <Link to="/" className="bg-gray-700 text-white py-2 px-3 hover:bg-slate-500 rounded-lg">Go back home</Link>
        </div>
    )
}

export default Error