import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg text-white px-3 py-3 duration-200 font-medium",
  {
    variants: {
      variant: {
        solid: "bg-blue-600 hover:bg-blue-700",
        destructive: "bg-red-600 hover:bg-red-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
        outline: "bg-transparent border border-gray-600 hover:bg-gray-600",
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
