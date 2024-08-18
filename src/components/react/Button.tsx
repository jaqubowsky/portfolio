import { cn } from "@utils/index";

type Props = {
  variant?: keyof typeof variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: "bg-primary hover:bg-primary/80 text-primary-foreground",
  secondary: "bg-secondary hover:bg-secondary/80 text-secondary-foreground",
} as const;

const Button = ({
  variant = "primary",
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        "py-2 cursor-pointer inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring allowed disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
