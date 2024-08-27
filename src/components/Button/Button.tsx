import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '~/lib/utils'

const buttonVariants = cva('border rounded-lg border-black font-bold', {
    variants: {
        variants: {
            primary:
                'bg-white text-black transition duration-500 hover:bg-gray-900 hover:text-white',
            secondary:
                'bg-gray-900 text-white transition duration-500 hover:bg-[#008080] hover:border-[#008080]',
        },
        size: {
            default: 'px-5 py-2',
        },
    },
    defaultVariants: {
        variants: 'primary',
        size: 'default',
    },
})

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({
    className,
    variants,
    size,
    children,
    onClick,
    ...props
}) => {
    return (
        <button
            className={cn(buttonVariants({ size, className, variants }))}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}
export { Button, buttonVariants }
