import { cn } from "@utils/index";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={cn(
        "block text-sm font-medium text-primary mr-auto",
        className,
      )}
    >
      {children}
    </label>
  );
};

export default Label;
