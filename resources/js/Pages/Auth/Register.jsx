import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ChevronLeft, Eye, EyeOff, Calendar, Instagram, Facebook, Twitter, MessageCircle, Video, User, Plus, Search } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

const CATEGORY_OPTIONS = [
    { id: 'gaming', label: '#GAMING' },
    { id: 'art', label: '#ARTE' },
    { id: 'music', label: '#MUSICA' },
    { id: 'tech', label: '#TECH' },
    { id: 'vlog', label: '#VLOG' },
    { id: 'education', label: '#EDUCACION' },
    { id: 'sports', label: '#DEPORTES' },
    { id: 'beauty', label: '#BELLEZA' },
    { id: 'comedy', label: '#COMEDIA' },
    { id: 'news', label: '#NOTICIAS' },
    { id: 'crypto', label: '#CRYPTO' },
    { id: 'travel', label: '#VIAJES' },
];

export default function Register() {
    // ESTADO: Controlo en que pantalla estamos
    const [currentStep, setCurrentStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);

    // FORMULARIO
    const [photoPreview, setPhotoPreview] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        role: '',
        language: '',
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        birth_date: '',
        categories: [],
        gender: '',
        social_instagram: '',
        social_tiktok: '',
        social_x: '',
        social_reddit: '',
        social_facebook: '',
        profile_photo: null,
        description: '',
        blocked_countries: [],
        username: '', 
        username_public: true, 
    });

    // Solo suma 1 al contador
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

    // PASO 1: Selección de Rol
    const renderStep1_RoleSelection = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl font-bold mb-6">Bienvenido</h1>
            <p className="text-gray-300 mb-12 max-w-sm">
                Para nosotros es importante saber cómo deseas usar la plataforma para mejorar tu experiencia y facilitar nuestros productos.
            </p>

            <div className="w-full max-w-xs space-y-10">
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

                <div className="mt-12">
                    <PrimaryButton
                        type="button"
                        onClick={nextStep}
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

                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-600"></div>
                    <span className="mx-4 text-gray-400 text-sm uppercase">OR</span>
                    <div className="flex-grow border-t border-gray-600"></div>
                </div>

                <button
                    type="button"
                    className="w-full flex justify-center items-center py-4 bg-transparent border border-white rounded-lg text-white font-medium hover:bg-white/10 transition-colors"
                    onClick={() => console.log('Google Login logic here')}
                >
                    Login with Google
                </button>

                <div className="flex space-x-4 w-full max-w-xs mt-12">
                    <PrimaryButton
                        type="button"
                        onClick={nextStep}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    // PASO 5: Contraseña
    const renderStep5_Password = () => {
        const hasLength = data.password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(data.password);
        const hasNumber = /[0-9]/.test(data.password);
        const isValid = hasLength && hasUpperCase && hasNumber;

        return (
            <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
                <h1 className="text-4xl mb-12">Crea una Contraseña</h1>

                <div className="w-full max-w-xs space-y-6">
                    <div className="relative text-left">
                        <TextInput
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-lg focus:ring-2 focus:ring-[#FF004C] pr-12" // pr-12 deja espacio al ojo
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Contraseña"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white focus:outline-none mt-1 transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff size={24} strokeWidth={1.5} />
                            ) : (
                                <Eye size={24} strokeWidth={1.5} />
                            )}
                        </button>
                    </div>

                    <div className="text-left space-y-2 text-sm pl-2">
                        <p className={hasLength ? "text-white transition-colors" : "text-gray-500 transition-colors"}>
                            *Más de 8 carácteres
                        </p>
                        <p className={hasUpperCase ? "text-white transition-colors" : "text-gray-500 transition-colors"}>
                            *Una letra mayúscula
                        </p>
                        <p className={hasNumber ? "text-white transition-colors" : "text-gray-500 transition-colors"}>
                            *Un número
                        </p>
                    </div>

                    <div className="mt-8 pt-6">
                        <PrimaryButton
                            type="button"
                            onClick={nextStep}
                        >
                            Siguiente
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        );
    };

    // PASO 6: Fecha de Nacimiento
    const renderStep6_BirthDate = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl font-bold mb-12">¿Cuál es tu Fecha <br /> de Nacimiento?</h1>

            <div className="w-full max-w-xs space-y-6">
                <div className="relative text-left">
                    <TextInput
                        id="birth_date"
                        type="date"
                        name="birth_date"
                        value={data.birth_date}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-lg focus:ring-2 focus:ring-[#FF004C] pr-12 appearance-none"
                        onChange={(e) => setData('birth_date', e.target.value)}
                        required
                        style={{ colorScheme: 'dark' }}
                    />
                    
                </div>

                <p className="text-gray-400 text-xs leading-relaxed mt-8">
                    Colaboramos con National Center for Missing & Exploited Children y las autoridades para la prevención de abuso y explotación de menores de edad.
                </p>

                {/* Logo Placeholder (Debes poner tu imagen real aquí) */}
                <div className="flex justify-center py-4 opacity-80">
                   {/* Reemplaza src con la ruta de tu imagen real, ej: /images/ncmec-logo.png */}
                   <img 
                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/National_Center_for_Missing_and_Exploited_Children_logo.svg/1200px-National_Center_for_Missing_and_Exploited_Children_logo.svg.png" 
                       alt="NCMEC Logo" 
                       className="h-10 w-auto filter grayscale hover:grayscale-0 transition-all"
                   />
                </div>

                <div className="pt-4">
                     <PrimaryButton
                        type="button"
                        onClick={nextStep}
                        disabled={!data.birth_date}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

// PASO 7: Categorías
    const renderStep7_Categories = () => {
        
        // Función para manejar la selección
        const toggleCategory = (categoryId) => {
            const currentCategories = data.categories;
            
            if (currentCategories.includes(categoryId)) {
                setData('categories', currentCategories.filter(id => id !== categoryId));
            } else {
                if (currentCategories.length < 3) {
                    setData('categories', [...currentCategories, categoryId]);
                }
            }
        };

        return (
            <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
                <h1 className="text-4xl mb-6">Selecciona tus <br /> Categorías</h1>

                <div className="w-full max-w-sm">
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {CATEGORY_OPTIONS.map((cat) => {
                            const isSelected = data.categories.includes(cat.id);
                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => toggleCategory(cat.id)}
                                    className={`py-3 px-2 rounded-lg text-sm font-bold transition-all duration-200 truncate ${
                                        isSelected
                                            ? "bg-[#FF004C] text-white shadow-[0_0_10px_rgba(255,0,76,0.4)] scale-105"
                                            : "bg-[#544F69] text-gray-300 hover:bg-[#6e678a]"
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    <p className="text-gray-300 text-sm mb-12">
                        Selecciona hasta 3 categorías con las que los usuarios podrán encontrar tu perfil
                    </p>

                    <div className="flex justify-center">
                        <PrimaryButton
                            type="button"
                            onClick={nextStep}
                            disabled={data.categories.length === 0}
                        >
                            Siguiente
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        );
    };

    // PASO 8: Género
    const renderStep8_Gender = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-12">Selecciona tu Género</h1>

            <div className="w-full max-w-xs space-y-8">
                <div className="flex flex-col space-y-6 text-xl font-medium text-left pl-6">
                    {['Hombre', 'Mujer', 'Otro'].map((option) => (
                        <label key={option} className="flex items-center space-x-4 cursor-pointer group">
                            <div className="relative flex items-center justify-center w-6 h-6">
                                <input
                                    type="radio"
                                    name="gender"
                                    value={option}
                                    checked={data.gender === option}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className="peer appearance-none w-6 h-6 border-2 border-white rounded-full bg-transparent checked:bg-transparent transition-all cursor-pointer"
                                />
                                <div className="absolute w-3 h-3 bg-white rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
                            </div>
                            <span className="text-white group-hover:text-gray-300 transition-colors">{option}</span>
                        </label>
                    ))}
                </div>

                <div className="pt-10">
                     <PrimaryButton
                        type="button"
                        onClick={nextStep}
                        disabled={!data.gender}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    const renderStep9_Socials = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-12">Ingresa tus Redes <br /> Sociales</h1>

            <div className="w-full max-w-xs space-y-4">
                
                <div className="relative text-left">
                    <TextInput
                        name="social_instagram"
                        value={data.social_instagram}
                        onChange={(e) => setData('social_instagram', e.target.value)}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C] pr-12"
                        placeholder="https://www.instagram.com/username"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white">
                        <Instagram size={20} />
                    </div>
                </div>

                <div className="relative text-left">
                    <TextInput
                        name="social_tiktok"
                        value={data.social_tiktok}
                        onChange={(e) => setData('social_tiktok', e.target.value)}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C] pr-12"
                        placeholder="https://www.tiktok.com/username"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white">
                        <Video size={20} />
                    </div>
                </div>

                <div className="relative text-left">
                    <TextInput
                        name="social_x"
                        value={data.social_x}
                        onChange={(e) => setData('social_x', e.target.value)}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C] pr-12"
                        placeholder="https://www.x.com/username"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white">
                        <Twitter size={20} />
                    </div>
                </div>

                <div className="relative text-left">
                    <TextInput
                        name="social_reddit"
                        value={data.social_reddit}
                        onChange={(e) => setData('social_reddit', e.target.value)}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C] pr-12"
                        placeholder="https://www.reddit.com/username"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white">
                        <MessageCircle size={20} />
                    </div>
                </div>

                <div className="relative text-left">
                    <TextInput
                        name="social_facebook"
                        value={data.social_facebook}
                        onChange={(e) => setData('social_facebook', e.target.value)}
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C] pr-12"
                        placeholder="https://www.facebook.com/username"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white">
                        <Facebook size={20} />
                    </div>
                </div>

                <button 
                    type="button" 
                    onClick={nextStep}
                    className="block w-full text-center text-gray-300 hover:text-white text-sm py-4 transition-colors"
                >
                    Omitir este paso
                </button>

                <div className="">
                     <PrimaryButton
                        type="button"
                        onClick={nextStep}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    const renderStep10_ProfilePhoto = () => {
        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                setData('profile_photo', file);
                setPhotoPreview(URL.createObjectURL(file));
            }
        };

        return (
            <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
                <h1 className="text-4xl mb-12">Foto de Perfil</h1>

                <div className="w-full max-w-xs space-y-12 flex flex-col items-center">
                    
                    <div 
                        onClick={() => document.getElementById('fileInput').click()}
                        className="relative w-48 h-48 rounded-full bg-[#FFD6E0] flex items-center justify-center cursor-pointer overflow-hidden hover:opacity-90 transition-opacity"
                    >
                        {photoPreview ? (
                            <img 
                                src={photoPreview} 
                                alt="Preview" 
                                className="w-full h-full object-cover" 
                            />
                        ) : (
                            <User size={80} color="#FF004C" strokeWidth={1.5} />
                        )}

                        {!photoPreview && (
                            <div className="absolute bottom-3 right-3 bg-[#FF004C] rounded-full p-2 border-4 border-black">
                                <Plus size={24} color="white" strokeWidth={3} />
                            </div>
                        )}
                    </div>

                    <input 
                        id="fileInput" 
                        type="file" 
                        accept="image/*" 
                        hidden 
                        onChange={handleImageChange} 
                    />

                    <div className="w-full pt-4">
                         <PrimaryButton
                            type="button"
                            onClick={nextStep}
                            disabled={!data.profile_photo}
                        >
                            Siguiente
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        );
    };

    const renderStep11_Description = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-12">Escribe una breve <br /> Descripción</h1>

            <div className="w-full max-w-xs space-y-8">
                <textarea
                    name="description"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    className="w-full h-40 bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg p-4 text-base focus:ring-2 focus:ring-[#FF004C] resize-none"
                    placeholder="Descripción de mi cuenta"
                />

                <div className="pt-4">
                     <PrimaryButton
                        type="button"
                        onClick={nextStep}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    const renderStep12_BlockCountries = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-12">¿Deseas Bloquear algún <br /> País?</h1>

            <div className="w-full max-w-xs flex flex-col h-[50vh] justify-between">
                
                <div className="relative text-left">
                    <TextInput
                        name="country_search"
                        className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C] pr-12"
                        placeholder="Buscar País"
                        onChange={(e) => console.log(e.target.value)} 
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-white">
                        <Search size={20} />
                    </div>
                </div>

                <div className="space-y-6">
                    <button 
                        type="button" 
                        onClick={nextStep}
                        className="block w-full text-center text-gray-300 hover:text-white text-sm transition-colors"
                    >
                        Omitir este paso
                    </button>

                    <PrimaryButton
                        type="button"
                        onClick={nextStep}
                    >
                        Siguiente
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );

    const renderStep13_Username = () => (
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 animate-fade-in">
            <h1 className="text-4xl mb-12">Elige tu nombre de usuario</h1>

            <div className="w-full max-w-xs space-y-4">
                
                <TextInput
                    name="username"
                    value={data.username}
                    onChange={(e) => setData('username', e.target.value)}
                    className="mt-1 block w-full bg-[#1A1A1A] border-none text-white placeholder-gray-400 rounded-lg py-4 px-5 text-sm focus:ring-2 focus:ring-[#FF004C]"
                    placeholder="@Usuario"
                />

                <div className="flex justify-end w-full pt-2">
                    <label className="inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            className="sr-only peer"
                            checked={data.username_public}
                            onChange={(e) => setData('username_public', e.target.checked)}
                        />
                        <div className="relative w-14 h-8 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#FF004C]"></div>
                    </label>
                </div>

                <div className="pt-8">
                     <PrimaryButton
                        type="button"
                        onClick={nextStep}
                        disabled={!data.username}
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
                        <ChevronLeft
                            size={32}
                            strokeWidth={1.5}
                            className="text-white cursor-pointer hover:text-[#FF004C] transition-colors"
                        />
                    </Link>
                ) : (
                    <button onClick={prevStep} className="focus:outline-none">
                        <ChevronLeft
                            size={32}
                            strokeWidth={1.5}
                            className="text-white cursor-pointer hover:text-[#FF004C] transition-colors"
                        />
                    </button>
                )}
            </div>

            {currentStep === 1 && renderStep1_RoleSelection()}
            {currentStep === 2 && renderStep2_Language()}
            {currentStep === 3 && renderStep3_Name()}
            {currentStep === 4 && renderStep4_Email()}
            {currentStep === 5 && renderStep5_Password()}
            {currentStep === 6 && renderStep6_BirthDate()}
            {currentStep === 7 && renderStep7_Categories()}
            {currentStep === 8 && renderStep8_Gender()}
            {currentStep === 9 && renderStep9_Socials()}
            {currentStep === 10 && renderStep10_ProfilePhoto()}
            {currentStep === 11 && renderStep11_Description()}
            {currentStep === 12 && renderStep12_BlockCountries()}
            {currentStep === 13 && renderStep13_Username()}



            <div className="text-center text-[10px] text-gray-400 pb-4">
                Terms of Service Privacy Cookies Policy Contact
            </div>
        </div>
    );
}