import { cn } from "@utils/index";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "mt-1 block w-full px-3 py-2.5 border border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 sm:text-sm bg-card text-foreground placeholder:text-muted-foreground/60 transition-colors resize-y",
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
