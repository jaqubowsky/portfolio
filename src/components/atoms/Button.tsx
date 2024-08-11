import { cn } from "@utils/index";

type Props = {
  variant?: keyof typeof variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground",
  secondary:
    "dark:bg-primary bg-secondary dark:text-primary-foreground text-secondary-foreground",
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
        "py-2 cursor-pointer border hover:bg-opacity-70 dark:hover:opacity-70 inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring allowed disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
