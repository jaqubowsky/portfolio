import { cn } from "@utils/cn";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={cn(
        "block text-sm font-medium text-foreground w-full",
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Label;
