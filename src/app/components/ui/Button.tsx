import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg text-white px-3 py-3 duration-200 font-medium",
  {
    variants: {
      variant: {
        solid:
          "bg-black text-white dark:bg-white dark:text-black hover:opacity-90",
        destructive: "bg-red-600 hover:bg-red-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        outline: "bg-transparent text-black border border-gray-600 hover:bg-gray-600 dark:text-white dark:border-white dark:hover:bg-gray-600",
        ghost: "bg-transparent hover:bg-gray-600",
        link: "bg-transparent hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      className={`${className} ${width} rounded-lg text-white px-3 py-3 duration-200 font-medium`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
