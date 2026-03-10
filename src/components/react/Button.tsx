import { cn } from "@utils/index";

type Props = {
  variant?: keyof typeof variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary:
    "bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] hover:opacity-90 text-white",
  secondary:
    "bg-card hover:bg-muted text-foreground border border-border",
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
        "py-2.5 cursor-pointer inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-semibold shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
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
