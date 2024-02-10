import Swipeit from '../components/Swipeit';

function Home() {
    return (
        <div className='h-full w-full bg-red-300 py-8 flex flex-col gap-6'>
            <div className='mx-[60px]'>
                <div className='text-xl mb-2 font-semibold font-serif'>Computer Science</div>
                <Swipeit category="Computer Science" />
            </div>
            <div className='mx-[60px]'>
                <div className='text-xl mb-2 font-semibold font-serif'>Fiction</div>
                <Swipeit category="Fiction" />
            </div>
            <div className='mx-[60px]'>
                <div className='text-xl mb-2 font-semibold font-serif'>Health</div>
                <Swipeit category="Health" />
            </div>
        </div>
    );
}

export default Home;