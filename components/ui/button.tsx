import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-green-500 text-primary-foreground hover:bg-green-500/90 active:border-b-0 border-2 border-green-600 border-b-4",
        secondary: "bg-blue-500 text-primary-foreground hover:bg-blue-500/90 active:border-b-0 border-2 border-blue-500 border-b-4",
        danger: "bg-rose-500 text-primary-foreground hover:bg-rose-500/90 active:border-b-0 border-2 border-rose-600 border-b-4",
        basic: "border-2 border-b-4 border-slate-200 bg-white text-slate-500 hover:bg-slate-100 active:border-b-2",
        link: "text-blue-600 underline-offset-4 hover:underline active:border-b-0",
        secondaryOutline: "bg-blue-100 text-blue-500 active:border-b-0 border-2 border-blue-300 border-b-4",
        ghost: "bg-transparent"
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full"
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
