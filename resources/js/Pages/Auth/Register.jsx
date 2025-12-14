import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Register() {
    // ESTADO: Controla en qué pantalla estamos (1=Rol, 2=Idioma, 3=Nombre...)
    const [currentStep, setCurrentStep] = useState(1);

    // FORMULARIO: Acumula datos de TODOS los pasos
    const { data, setData, post, processing, errors } = useForm({
        role: '',      // Paso 1
        language: '',  // Paso 2
        name: '',      // Paso 3
        email: '',     // Paso X
        password: '',  // Paso Final
        password_confirmation: '',
    });

    // AVANZAR: Solo suma 1 al contador (No recarga la página)
    const nextStep = () => {
        if (currentStep === 1 && !data.role) {
            alert("Por favor selecciona un rol");
            return;
        }
        setCurrentStep(prev => prev + 1);
    };

    // RETROCEDER
    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    // --- RENDERIZADO DE PASOS ---

    // PASO 1: Selección de Rol (Tu diseño actual)
    const renderStep1_RoleSelection = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>
            <p className="text-gray-300 mb-12 max-w-sm">
                Para nosotros es importante saber cómo deseas usar la plataforma para mejorar tu experiencia y facilitar nuestros productos.
            </p>

            <div className="w-full max-w-xs space-y-10">
                {/* Opciones */}
                <div className="flex justify-around text-lg font-semibold">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="role"
                            value="creator"
                            checked={data.role === 'creator'}
                            onChange={(e) => setData('role', e.target.value)}
                            className="h-6 w-6 text-[#FF004C] bg-black border-white focus:ring-[#FF004C] cursor-pointer"
                        />
                        <span className="group-hover:text-[#FF004C] transition">Creador</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <input
                            type="radio"
                            name="role"
                            value="user"
                            checked={data.role === 'user'}
                            onChange={(e) => setData('role', e.target.value)}
                            className="h-6 w-6 text-[#FF004C] bg-black border-white focus:ring-[#FF004C] cursor-pointer"
                        />
                        <span className="group-hover:text-[#FF004C] transition">Usuario</span>
                    </label>
                </div>

                {/* Botón Siguiente - IMPORTANTE: type="button" evita submit/redirección */}
                <div className="mt-12">
                    <PrimaryButton
                        type="button"
                        onClick={nextStep}
                        className="w-full justify-center py-4 bg-[#D90040] hover:bg-[#D90040] text-white font-bold text-lg rounded-full"
                        disabled={!data.role}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    // PASO 2: Selección de Idioma
    const renderStep2_Language = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-6">Selecciona tu Idioma</h1>

            <p className="text-gray-300 mb-12 max-w-sm">
                Llega a otros mercados (Brasil con más de 212 millones de personas, Francia con 68 millones, Rusia con 143 millones, Italia 59 millones)
                con la traducción completa de toda la plataforma.
            </p>

            <div className="w-full max-w-xs space-y-10">
                <div className="flex flex-col space-y-5 text-lg font-semibold w-full">

                    <label className="flex items-center space-x-3 cursor-pointer p-4 rounded-lg border border-gray-700 hover:border-[#FF004C]/50 transition duration-150">
                        <input
                            type="radio"
                            name="language"
                            value="es"
                            checked={data.language === 'es'}
                            onChange={(e) => setData('language', e.target.value)}
                            className="h-6 w-6 text-[#FF004C] bg-black border-white focus:ring-[#FF004C] cursor-pointer"
                        />
                        <span>Spanish</span>
                    </label>

                </div>
            </div>

            <div className="flex space-x-4 w-full max-w-xs mt-12">
                <PrimaryButton
                    type="button"
                    onClick={nextStep}
                    className="w-full justify-center py-4 bg-[#D90040] hover:bg-[#D90040] text-white font-bold text-lg rounded-full"
                >
                    Siguiente
                </PrimaryButton>
            </div>
        </div>
    );

    // PASO 3: Nombre Completo
    const renderStep3_Name = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-6">Escribe tu nombre <br /> completo</h1>



            <div className="w-full max-w-xs space-y-10">
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full bg-gray-700 border-none text-white placeholder-gray-300 rounded-md py-3 px-4 focus:ring-2 focus:ring-[#FF005C]"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    placeholder="Nombre Completo"
                    required
                />

                <p className="text-gray-300 mb-12 max-w-sm">
                    *Debe coincidir exactamente con el nombre que aparece en tu ID o Pasaporte. Este nombre no será visible para los usuarios.
                </p>

                <div className="flex space-x-4 w-full max-w-xs mt-12 justify-center">
                    <PrimaryButton
                        type="button"
                        onClick={nextStep}
                        className="w-full justify-center py-4 bg-[#D90040] hover:bg-[#D90040] text-white font-bold text-lg rounded-full"
                        disabled={!data.language}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    // PASO 4: Correo Electrónico
    const renderStep4_Email = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-8">Escribe tu Correo <br />Electrónico</h1>

            <div className="w-full max-w-xs space-y-6">
                {/* Input Email */}
                <div className="text-left">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-lg focus:ring-2 focus:ring-[#FF004C]"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>

                {/* Separador OR */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="mx-4 text-gray-400 text-sm uppercase">OR</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>

                {/* Botón Login con Google */}
                <button
                    type="button"
                    className="w-full flex justify-center items-center py-4 bg-transparent border border-white rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
                    onClick={() => console.log('Google Login logic here')}
                >
                    Login with Google
                </button>

                {/* Botón Siguiente */}
                <div className="flex space-x-4 w-full max-w-xs mt-12">
                    <PrimaryButton
                        type="button"
                        onClick={nextStep}
                        className="w-full justify-center py-4 bg-[#D90040] hover:bg-[#D90040] text-white font-bold text-lg rounded-full"
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
            <Head title="Registro" />

            <div className="relative pt-8 pl-2">
                {currentStep === 1 ? (
                    <Link href={route('login')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer hover:text-[#FF004C]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                ) : (
                    <button onClick={prevStep} className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer hover:text-[#FF004C]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                )}
            </div>

            {currentStep === 1 && renderStep1_RoleSelection()}
            {currentStep === 2 && renderStep2_Language()}
            {currentStep === 3 && renderStep3_Name()}
            {currentStep === 4 && renderStep4_Email()}

            <div className="text-center text-[10px] text-gray-400 pb-4">
                Terms of Service Privacy Cookies Policy Contact
            </div>
        </div>
    );
}