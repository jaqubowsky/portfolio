import { cn } from "@utils/index";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <>
      <input
        className={cn(
          "mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-ring focus:muted sm:text-sm",
          className
        )}
        {...props}
      />
    </>
  );
};
