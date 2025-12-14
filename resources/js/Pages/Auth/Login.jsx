import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black via-[#8B002E] to-[#FF005C] text-white px-6">
            <Head title="Log in" />

            <div className="absolute top-10 flex items-center gap-2">
                <div className="bg-white text-[#FF005C] rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
                <span className="font-bold tracking-wider text-sm">Idioma : ENGLISH</span>
            </div>

            <div className="w-full max-w-md mt-20 space-y-6">

                {status && <div className="mb-4 font-medium text-sm text-green-400">{status}</div>}

                <form onSubmit={submit} className="space-y-5">

                    <div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full bg-[#52001A] border-none text-white placeholder-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-[#FF005C]"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="Email"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full bg-[#52001A] border-none text-white placeholder-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-[#FF005C]"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-[#FF005C] hover:text-pink-400 font-medium"
                            >
                                Forgot Pasword?
                            </Link>
                        )}

                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="text-[#FF005C] border-white bg-transparent focus:ring-[#FF005C]"
                            />
                            <span className="ml-2 text-white">Remember Me</span>
                        </label>
                    </div>

                    <PrimaryButton
                        className="w-full justify-center py-4 bg-[#FF004C] hover:bg-[#E0004C] text-white font-bold text-lg rounded-full border-none shadow-lg shadow-[#FF004C]/50 transition duration-150 ease-in-out"
                        disabled={processing}
                    >
                        Login
                    </PrimaryButton>

                    <div className="relative flex items-center justify-center my-6">
                        <div className="border-t border-gray-400 w-full opacity-30"></div>
                        <span className="bg-transparent px-3 text-sm text-gray-200 uppercase">OR</span>
                        <div className="border-t border-gray-400 w-full opacity-30"></div>
                    </div>

                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 bg-transparent border border-white/30 rounded-full py-3 text-white hover:bg-white/10 transition"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.16-7.27 1.94 0 3.73.74 5.06 1.96l1.7-2.17C16.92 2.7 14.53 1.5 12.16 1.5c-5.8 0-10.42 4.7-10.42 10.4 0 5.7 4.62 10.4 10.42 10.4 5.3 0 9.25-3.66 9.25-9.1 0-.6-.05-1.1-.15-1.5z" />
                        </svg>
                        Login with Google
                    </button>

                    <p className="text-center text-xs text-gray-400 mt-4">
                        protected by reCAPTCHA <span className="text-[#FF005C]">Privacy</span> - <span className="text-[#FF005C]">Terms</span>
                    </p>

                    <div className="text-center mt-6">
                        <Link href={route('register')} className="text-[#FF005C] font-bold text-lg hover:underline">
                            Create an Account?
                        </Link>
                    </div>
                </form>

                <div className="flex justify-center gap-4 mt-6">
                    <img src="images/mc.png" alt="MasterCard SecureCode" className="h-6 opacity-80" />
                    <img src="images/visa.png" alt="Verified by Visa" className="h-6 opacity-80" />
                </div>

                <div className="text-center text-[10px] text-gray-400 pb-4">
                    Terms of Service Privacy Cookies Policy Contact
                </div>
            </div>
        </div>
    );
}