import { cn } from "@utils/index";

type TagFilterProps = {
  tags: string[];
  className?: string;
}

const TagFilter = ({ tags, className,...props }: TagFilterProps) => {
  const params = new URLSearchParams(window.location.search);

  const handleSetTag = (tag: string) => {
    params.set("tag", tag);

    window.location.search = params.toString();
  }

  return <ul className="flex flex-wrap gap-2 items-start justify-start">
     {tags.map((tag: string) => <li onClick={() => handleSetTag(tag)} {...props} className={cn("text-primary text-xl cursor-pointer font-medium dark:text-secondary border-b-2 border-b-transparent hover:border-b-primary transition-colors dark:hover:border-b-secondary decoration-wavy underline", className)} key={tag}>#{tag}</li>)}
  </ul>
}

export default TagFilter;
