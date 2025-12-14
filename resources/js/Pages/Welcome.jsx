import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome({ auth }) {
    // 1. Manejo de estado para la selección de rol (Creator o User)
    const [selectedRole, setSelectedRole] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!selectedRole) {
            alert("Por favor, selecciona un rol para continuar.");
            return;
        }

        // 2. Aquí iría la lógica para guardar el rol del usuario en la base de datos (POST)
        console.log(`Rol seleccionado: ${selectedRole}`);
        
        // 3. Redirigir al siguiente paso del Onboarding (o al Dashboard si es el final)
        // Para este ejemplo, saltamos al Dashboard después de seleccionar.
        router.visit(route('dashboard')); 
    };

    return (
        // 4. Utilizamos un div simple sin AuthenticatedLayout para control total del fondo
        <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
            <Head title="Bienvenido" />
            
            {/* Encabezado: Flecha de regreso */}
            <div className="relative pt-8">
                <Link href={route('dashboard')}> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>

            {/* Contenido Principal */}
            <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>
                
                <p className="text-gray-300 mb-12 max-w-sm">
                    Para nosotros es importante saber cómo deseas usar la plataforma para mejorar tu experiencia y facilitar nuestros productos.
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-10">
                    
                    {/* Contenedor de Radio Buttons */}
                    <div className="flex justify-around text-lg font-semibold">
                        
                        {/* Opción Creador */}
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="radio"
                                name="role"
                                value="creator"
                                checked={selectedRole === 'creator'}
                                onChange={() => setSelectedRole('creator')}
                                className="h-6 w-6 text-[#FF004C] bg-black border-white focus:ring-[#FF004C] checked:bg-[#FF004C]"
                            />
                            <span>Creador</span>
                        </label>
                        
                        {/* Opción Usuario */}
                        <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="radio"
                                name="role"
                                value="user"
                                checked={selectedRole === 'user'}
                                onChange={() => setSelectedRole('user')}
                                className="h-6 w-6 text-[#FF004C] bg-black border-white focus:ring-[#FF004C] checked:bg-[#FF004C]"
                            />
                            <span>Usuario</span>
                        </label>
                    </div>

                    {/* Botón Siguiente */}
                    <div className="mt-12">
                        <PrimaryButton 
                            className="w-full justify-center py-4 bg-[#FF004C] hover:bg-[#E0004C] text-white font-bold text-lg rounded-full border-none"
                            disabled={!selectedRole}
                        >
                            Siguiente
                        </PrimaryButton>
                    </div>
                </form>
            </div>

            {/* Footer Links */}
            <div className="text-center text-[10px] text-gray-400 pb-4">
                Terms of Service Privacy Cookies Policy Contact
            </div>
        </div>
    );
}