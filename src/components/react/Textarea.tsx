import { cn } from "@utils/index";

type Textarea = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ className, ...props }: Textarea) => {
  return (
    <>
      <textarea
        className={cn(
          "mt-1 block w-full px-3 py-2 border border-muted rounded-md shadow-sm focus:outline-none focus:ring-ring focus:muted sm:text-sm",
          className
        )}
        {...props}
      ></textarea>
    </>
  );
};

export default Textarea;
