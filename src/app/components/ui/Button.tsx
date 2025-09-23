import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { tailwindCMerge } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-white duration-200 font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
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
      size: {
        base: "px-4 text-base h-10",
        xs: "px-2 text-xs h-6",
        sm: "px-3 text-sm h-8",
        lg: "px-5 text-lg h-12",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "base",
    },
  }
);

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: ReactNode;
}

const Button = ({ children, variant, size, ...rest }: IProps) => {
  return (
    <button
      className={`${tailwindCMerge(buttonVariants({ variant, size }))}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
