import { Icon } from "@iconify/react";
import { cn } from "@utils/cn";
import { useState } from "react";

type FaqItem = {
  readonly question: string;
  readonly answer: string;
  readonly link?: { readonly href: string; readonly text: string };
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-3 w-full max-w-2xl">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={item.question}
            className={cn(
              "rounded-xl border bg-card transition-all duration-200",
              isOpen
                ? "border-primary/30 shadow-sm shadow-primary/5"
                : "border-border hover:border-primary/30"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className={cn(
                "flex w-full items-center justify-between gap-4 cursor-pointer p-5 text-sm sm:text-base font-semibold text-left transition-colors duration-200",
                isOpen ? "text-primary/70" : "text-foreground"
              )}
            >
              {item.question}
              <Icon
                icon="mdi:chevron-down"
                width={20}
                height={20}
                className={cn(
                  "shrink-0 text-muted-foreground transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                  {item.link && (
                    <>
                      {" "}
                      <a
                        href={item.link.href}
                        className="text-primary hover:underline font-medium"
                      >
                        {item.link.text}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
