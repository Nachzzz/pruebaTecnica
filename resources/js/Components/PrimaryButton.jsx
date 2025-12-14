export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                // CAMBIO: De 'rounded-full' a 'rounded-xl'
                `bg-[#F20574] w-full justify-center py-4 font-bold text-lg rounded-xl border-none flex items-center transition-all duration-300 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}