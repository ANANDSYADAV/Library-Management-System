import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function OurTeam() {
    return (
        <div className="">
            <div className="my-10 w-[80%] m-auto flex flex-col gap-4">
                <div className="text-4xl font-extrabold font-serif">
                    <u>About the team</u>
                </div>
                <div className="text-xl">We are a dynamic group of individuals who are passionate about technology. Putting our cent percent into whatever we do. Dedicated to learning, building, and improving.</div>
            </div>
            <div className="w-[80%] md:w-[90%] xl:w-[80%] m-auto mb-10 flex flex-col gap-10">
                {/* ANAND YADAV */}
                <div className="flex gap-10 flex-col md:flex-row items-center">
                    <img src="/images/anandy.png" alt="anand"
                        className="h-[300px] md:h-[360px] lg:h-[300px] w-[300px] rounded-lg"
                    />
                    <div className="flex flex-col gap-4 md:gap-2 lg:gap-6 w-[100%] md:w-[80%] text-center md:text-start">
                        <div>
                            <h1 className="font-semibold text-4xl">Anand Yadav</h1>
                            <h2 className="text-slate-700 text-xl">NITA CSE'25</h2>
                        </div>
                        <div className="text-lg">
                            A dedicated web developer and tech enthusiast with an insatiable curiosity for all things digital. As a student of the digital age, I'm on a mission to blend my passion for technology with the art of crafting seamless digital experiences. Join me on this exhilarating journey as we shape the future of the digital landscape together!
                        </div>
                        <div className="flex gap-8 text-3xl text-black justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/anand-yadav-08b7b2230/">
                                <FaLinkedin className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a href="https://github.com/ANANDSYADAV">
                                <FaGithub className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a href="https://www.instagram.com/anandsyadav257/?hl=en">
                                <FaSquareInstagram className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 border-gray-300" />

                {/* KARAN RAJ */}
                <div className="flex gap-10 flex-col-reverse md:flex-row items-center">
                    <div className="flex flex-col gap-4 md:gap-2 lg:gap-6 w-[100%] md:w-[80%] text-center md:text-start">
                        <div>
                            <h1 className="font-semibold text-4xl">Karan Raj</h1>
                            <h2 className="text-slate-700 text-xl">NITA CSE'25</h2>
                        </div>
                        <div className="text-lg">
                            A web developer extraordinaire and an avid explorer of the ever-evolving world of technology. I'm constantly fueled by a burning passion to unravel the mysteries of code and harness the power of innovation. So, let's embark on this exhilarating journey together, where creativity knows no bounds and the possibilities are as limitless as the digital horizon!

                        </div>
                        <div className="flex gap-8 text-3xl text-black justify-center md:justify-start">
                            <a href="https://www.linkedin.com/in/karan-raj-b5823822a/">
                                <FaLinkedin className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a href="https://github.com/karan2198">
                                <FaGithub className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>
                            <a href="https://www.instagram.com/___karan_raj___/?hl=en">
                                <FaSquareInstagram className="bg-white cursor-pointer opacity-[0.6] hover:opacity-[1]" />
                            </a>

                        </div>
                    </div>
                    <img src="/images/karanraj.jpg" alt="karan"
                        className="h-[300px] md:h-[360px] lg:h-[300px] w-[300px] rounded-lg"
                    />
                </div>

            </div>
        </div>
    )
}

export default OurTeam