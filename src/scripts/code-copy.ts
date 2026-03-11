function initCodeCopy() {
  const copyIcon = document.getElementById("copy-icon");
  const checkIcon = document.getElementById("check-icon");
  if (
    !(copyIcon instanceof HTMLTemplateElement) ||
    !(checkIcon instanceof HTMLTemplateElement)
  )
    return;

  document.querySelectorAll("pre").forEach((pre) => {
    const wrapper = document.createElement("div");
    wrapper.className = "relative group";
    pre.parentNode?.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement("button");
    button.className =
      "absolute right-2 top-2 p-1.5 rounded-md bg-muted/80 text-muted-foreground opacity-0 group-hover:opacity-100 hover:bg-muted hover:text-foreground transition-all cursor-pointer";
    button.setAttribute("aria-label", "Copy code");
    button.appendChild(copyIcon.content.cloneNode(true));

    button.addEventListener("click", async () => {
      try {
        const code =
          pre.querySelector("code")?.textContent ?? pre.textContent ?? "";
        await navigator.clipboard.writeText(code);
        button.replaceChildren(checkIcon.content.cloneNode(true));
        setTimeout(() => {
          button.replaceChildren(copyIcon.content.cloneNode(true));
        }, 2000);
      } catch {
        button.replaceChildren(copyIcon.content.cloneNode(true));
      }
    });

    wrapper.appendChild(button);
  });
}

initCodeCopy();
