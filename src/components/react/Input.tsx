import { cn } from "@utils/index";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <>
      <input
        className={cn(
          "mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-ring focus:muted sm:text-sm bg-accent",
          className,
        )}
        {...props}
      />
    </>
  );
};

export default Input;
