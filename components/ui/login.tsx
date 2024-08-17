'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Image from 'next/image';
import { useState } from "react";
import axios from "axios";

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}login`, data);
      console.log('Success:', response.data);

    } catch (error: any) {
      if (error.response && error.response.status === 400) {
      } else {
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="font-[sans-serif]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-8">
                  <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                  <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  Sign in to your account and explore a world of possibilities. Your journey begins here.
                </p>
                </div>


                <div>
                  <label className="text-gray-800 text-sm mb-2 block">User name</label>
                  <div className="relative flex items-center">
                    <input
                    {...register('email', { required: 'Username is required' })}
                    type="text"
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter user name"
                  />
                    <PersonIcon className="w-[20px] h-[18px] absolute text-gray-400 right-2" />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="text-gray-800 text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                    {...register('password', { required: 'Password is required' })}
                    type="password"
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter password"
                  />
                    <RemoveRedEyeIcon className="w-[22px] h-[18px] absolute text-gray-400 right-2" />
                  </div>
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="text-sm">
                    <a href="#" className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </a>
                  </div>
                </div>

                <div className="mt-8 text-white">
                  <button
                  type="submit"
                  className="w-full shadow-xl py-3 px-4 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 focus:outline-none relative"
                  disabled={loading}
                >
                    {loading ? (
                      <span className="flex items-center justify-center text-white">
                        <div className="w-6 h-6 border-4 border-t-transparent border-solid rounded-full animate-spin "></div>
                        </span>
                    ) : (

                        <span className="relative">Log in</span>
                      )}
                  </button>
                </div>

                <p className="text-sm !mt-8 text-center text-gray-800">
                Dont have an account <a href="#" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</a>
                </p>
              </form>
            </div>

            <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
              <Image
              src="https://readymadeui.com/login-image.webp"
              alt="Dining Experience"
              className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              width={800}  // Ajusta el ancho según tus necesidades
              height={400} // Ajusta la altura según tus necesidades
              layout="responsive"
            />
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

