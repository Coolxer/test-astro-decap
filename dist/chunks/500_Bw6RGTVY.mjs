import { a as createComponent, b as renderTemplate, d as renderComponent, m as maybeRenderHead } from './astro/server_pajwzIoN.mjs';
import 'kleur/colors';
import { $ as $$Section } from './Section_Bj4Y0GJ-.mjs';
import { a as $$Layout } from './Layout_C-gnpdAt.mjs';

const $$500 = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "500 - B\u0142\u0105d serwera",
    description: "Wyst\u0105pi\u0142 b\u0142\u0105d serwera. Spr\xF3buj ponownie za chwil\u0119. Przepraszamy za utrudnienia.",
    og: false,
    tw: false,
    nofollow: true,
    noindex: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "center": true }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<h1>500. Wewnętrzny błąd serwera</h1> ` })} ` })}`;
}, "D:/Projects/Personal/astro-template/src/pages/500.astro", void 0);

const $$file = "D:/Projects/Personal/astro-template/src/pages/500.astro";
const $$url = "/500";

export { $$500 as default, $$file as file, $$url as url };
