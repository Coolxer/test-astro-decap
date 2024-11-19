import { e as createAstro, a as createComponent, b as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, g as renderSlot } from './astro/server_pajwzIoN.mjs';
import 'clsx';

const $$Astro = createAstro("https://www.lukaszmilos.pl");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id = void 0,
    noTopPadding = false,
    noBottomPadding = false,
    withBackgroundImage = false,
    class: className,
    maxWidth = "max-w-screen-xl",
    center = false,
    gap = "gap-8",
    innerContainerClasses,
    ...attributes
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["w-full", withBackgroundImage && "relative", className], "class:list")}${addAttribute(id, "id")}${spreadAttributes(attributes)}> ${withBackgroundImage && renderTemplate`<div class="l-0 t-0 absolute -z-10 size-full"> ${renderSlot($$result, $$slots["background"])} </div>`} <div${addAttribute([
    "px-6",
    !noTopPadding && !noBottomPadding ? "py-16 md:py-24 lg:py-32" : noTopPadding ? "pb-16 md:pb-24 lg:pb-32" : noBottomPadding ? "pt-16 md:pt-24 lg:pt-32" : "",
    withBackgroundImage && "relative z-10",
    className
  ], "class:list")}> <div${addAttribute([
    "items container mx-auto flex flex-col items-start",
    maxWidth,
    center && "items-center",
    gap,
    innerContainerClasses
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </div> </section>`;
}, "D:/Projects/Personal/astro-template/src/components/core/Section.astro", void 0);

export { $$Section as $ };
