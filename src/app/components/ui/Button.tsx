import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg text-white px-3 py-3 duration-200 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid:
          "bg-black text-white dark:bg-white dark:text-black hover:opacity-90",
        destructive: "bg-red-600 hover:bg-red-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        outline:
          "bg-transparent text-black border border-gray-600 hover:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-600",
        ghost: "bg-transparent hover:bg-gray-600",
        link: "bg-transparent hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className, variant, ...rest }: IProps) => {
  return (
    <button
      className={`${className} px-3 py-3 ${buttonVariants({
        variant: variant,
      })}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
