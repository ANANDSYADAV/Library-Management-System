import { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [enrollment, setEnrollment] = useState('');
    const [registration, setRegistration] = useState('');
    const [department, setDepartment] = useState('');
    const [year, setYear] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [inputType1, setInputType1] = useState('password');
    const [inputType2, setInputType2] = useState('password');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (password !== confirmPassword) {
          console.error('Passwords do not match');
          return;
      }

      try {
          const response = await fetch('http://localhost:3000/user/registerUser', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name,
                  email,
                  enrollment,
                  registration,
                  department,
                  year,
                  password,
              }),
          });

          if (response.ok) {
            navigate('/', { state: { signUpSuccess: true } });
          } else {
              console.error('Signup failed');
          }
      } catch (error) {
          console.error('Error occurred during signup:', error);
      }
  };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
                    <FaBookOpen className="text-3xl" />
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up for a new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="enrollment" className="block text-sm font-medium leading-6 text-gray-900">
                                Enrollment
                            </label>
                            <div className="mt-2">
                                <input
                                    id="enrollment"
                                    name="enrollment"
                                    type="text"
                                    autoComplete="enrollment"
                                    required
                                    value={enrollment}
                                    onChange={(e) => setEnrollment(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="registration" className="block text-sm font-medium leading-6 text-gray-900">
                                Registration
                            </label>
                            <div className="mt-2">
                                <input
                                    id="registration"
                                    name="registration"
                                    type="text"
                                    autoComplete="registration"
                                    required
                                    value={registration}
                                    onChange={(e) => setRegistration(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                                Department
                            </label>
                            <div className="mt-2">
                                <input
                                    id="department"
                                    name="department"
                                    type="text"
                                    autoComplete="department"
                                    required
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                                Year
                            </label>
                            <div className="mt-2">
                                <input
                                    id="year"
                                    name="year"
                                    type="text"
                                    autoComplete="year"
                                    required
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="mt-2 flex gap-1 items-center">
                                <input
                                    id="password"
                                    name="password"
                                    type={inputType1}
                                    autoComplete="new-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />

                                {inputType1 === 'password' ?
                                    (<FaEye className='text-2xl cursor-pointer'
                                        onClick={() => {
                                            setInputType1('text');
                                        }}
                                    />)
                                    :
                                    (<FaEyeSlash className='text-2xl cursor-pointer'
                                        onClick={() => {
                                            setInputType1('password');
                                        }}
                                    />)
                                }
                            </div>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                                Confirm Password
                            </label>
                            <div className="mt-2 flex gap-1 items-center">
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={inputType2}
                                    autoComplete="new-password"
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 text-2xl px-2"
                                />

                                {inputType2 === 'password' ?
                                    (<FaEye className='text-2xl cursor-pointer'
                                        onClick={() => {
                                            setInputType2('text');
                                        }}
                                    />)
                                    :
                                    (<FaEyeSlash className='text-2xl cursor-pointer'
                                        onClick={() => {
                                            setInputType2('password');
                                        }}
                                    />)
                                }
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
