"use client";

import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "sm";
  children: React.ReactNode;
}

export function Button({
  className,
  variant = "primary",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  const { openModal } = useModal();

  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#B68D40] via-[#D4B069] to-[#8A672B] text-white hover:from-[#C59B4E] hover:via-[#E0C184] hover:to-[#9C7636] shadow-[0_4px_14px_0_rgba(182,141,64,0.39)] hover:shadow-[0_6px_20px_rgba(182,141,64,0.5)]",
    secondary: "bg-[#1A1A1A] text-white hover:bg-[#333333]",
    outline: "border border-[#B68D40] text-[#B68D40] hover:border-transparent hover:bg-gradient-to-r hover:from-[#B68D40] hover:via-[#D4B069] hover:to-[#8A672B] hover:text-white"
  };

  const sizes = {
    default: "h-12 px-8 text-base",
    sm: "h-10 px-6 text-sm",
    lg: "h-14 px-10 text-lg uppercase tracking-wide"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.onClick) {
          props.onClick(e);
        } else if (props.type !== "submit") {
          openModal();
        }
      }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
