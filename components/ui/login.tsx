'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';

type LoginFormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
        callbackUrl: "http://localhost:3000/lifetracker"
      });

      console.log(res);
      

      if (res?.error) {
        console.error("Login failed:", res.error);
      } else {
        // Redirigir al usuario después de un inicio de sesión exitoso
        router.push('/lifetracker'); // o la ruta de tu aplicación
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
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
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register('email', { required: 'Email is required' })}
                    type="email"
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                    placeholder="Enter email"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
