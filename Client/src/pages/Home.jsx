import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import toast from react-toastify
import { SwipeCS, SwipeFiction, SwipeHealth, SwipeSports } from '../components/Swipeit';
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
    const signUpSuccess = location.state?.signUpSuccess;
    const signInSuccess = location.state?.signInSuccess;

    useEffect(() => {
        if (signUpSuccess) {
            toast.success("Successfully registered", { autoClose: 3000 });
        } else if (signInSuccess) {
            toast.success("Successfully signed in", { autoClose: 3000 });
        }
    }, [signUpSuccess, signInSuccess]);

    return (
        <>
            <div className='h-full w-full bg-red-300 py-8 flex flex-col gap-6'>
                <div className='mx-[60px]'>
                    <div className='text-xl mb-2 font-semibold font-serif'>Computer Science</div>
                    <SwipeCS />
                </div>
                <div className='mx-[60px]'>
                    <div className='text-xl mb-2 font-semibold font-serif'>Fiction</div>
                    <SwipeFiction />
                </div>
                <div className='mx-[60px]'>
                    <div className='text-xl mb-2 font-semibold font-serif'>Health</div>
                    <SwipeHealth />
                </div>
                <div className='mx-[60px]'>
                    <div className='text-xl mb-2 font-semibold font-serif'>Sports</div>
                    <SwipeSports />
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Home;
